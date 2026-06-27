import os
import joblib
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(
    app,
    resources={r"/*": {"origins": ["http://localhost:5173", "http://127.0.0.1:5173"]}}
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "model")

MODEL_PATH = os.path.join(MODEL_DIR, "disease_model.pkl")
SYMPTOM_COLUMNS_PATH = os.path.join(MODEL_DIR, "symptom_columns.pkl")
DISEASE_CLASSES_PATH = os.path.join(MODEL_DIR, "disease_classes.pkl")

model = joblib.load(MODEL_PATH)
symptom_columns = joblib.load(SYMPTOM_COLUMNS_PATH)
disease_classes = joblib.load(DISEASE_CLASSES_PATH)
symptom_set = set(symptom_columns)

SHORTLIST_DISEASES = {
    "Common Cold",
    "Pneumonia",
    "Bronchial Asthma",
    "Dengue",
    "Malaria",
    "Typhoid",
    "Gastroenteritis",
    "GERD"
}

SYMPTOM_ALIAS = {
    "fever": "high_fever",
    "high fever": "high_fever",
    "mild fever": "mild_fever",
    "body pain": "muscle_pain",
    "body_pain": "muscle_pain",
    "stomach ache": "stomach_pain",
    "stomach pain": "stomach_pain",
    "belly pain": "abdominal_pain",
    "abdominal pain": "abdominal_pain",
    "joint pain": "joint_pain",
    "head pain": "headache",
    "vomit": "vomiting",
    "loose motion": "diarrhoea",
    "loose motions": "diarrhoea",
    "diarrhea": "diarrhoea",
    "breathing problem": "breathlessness",
    "breathing difficulty": "breathlessness",
    "runny nose": "continuous_sneezing",
    "blocked nose": "congestion",
    "acid reflux": "acidity",
    "gas": "acidity",
    "tiredness": "fatigue"
}


def normalize_one(symptom):
    s = str(symptom).strip().lower()
    if s in SYMPTOM_ALIAS:
        s = SYMPTOM_ALIAS[s]
    s = s.replace(" ", "_")
    return s


def normalize_symptoms(symptoms):
    normalized = []
    for s in symptoms:
        x = normalize_one(s)
        if x and x not in normalized:
            normalized.append(x)
    return normalized


def build_input(symptoms):
    input_data = {symptom: 0 for symptom in symptom_columns}
    matched = []

    for symptom in symptoms:
        if symptom in input_data:
            input_data[symptom] = 1
            matched.append(symptom)

    return pd.DataFrame([input_data]), matched


def get_pattern_message(symptoms):
    symptom_values = set(symptoms)

    respiratory = {
        "cough", "high_fever", "breathlessness", "phlegm",
        "continuous_sneezing", "congestion", "chest_pain", "patches_in_throat"
    }
    gastro = {
        "vomiting", "diarrhoea", "stomach_pain", "acidity",
        "indigestion", "abdominal_pain", "nausea"
    }
    vector = {
        "high_fever", "joint_pain", "headache", "chills",
        "sweating", "vomiting", "fatigue", "pain_behind_the_eyes"
    }
    reflux = {"acidity", "indigestion", "chest_pain", "cough", "stomach_pain"}

    scores = {
        "respiratory": len(symptom_values & respiratory),
        "gastro": len(symptom_values & gastro),
        "vector": len(symptom_values & vector),
        "reflux": len(symptom_values & reflux),
    }

    best_group = max(scores, key=scores.get)
    best_score = scores[best_group]

    if best_score < 2:
        return "Insufficient symptom specificity. Add more symptoms for better preliminary guidance."

    messages = {
        "respiratory": "Symptoms mostly match a respiratory pattern.",
        "gastro": "Symptoms mostly match a gastrointestinal pattern.",
        "vector": "Symptoms mostly match a fever or vector-borne pattern.",
        "reflux": "Symptoms partly match an acidity or reflux-related pattern."
    }

    return messages[best_group]


def build_confidence_note(best_confidence):
    if best_confidence < 40:
        return "Prediction confidence is low. Treat this as preliminary awareness support only."
    if best_confidence < 60:
        return "Prediction confidence is moderate. Review the shortlist carefully and verify clinically."
    return "Prediction confidence is relatively stronger, but this still does not replace medical evaluation."


@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "success": False,
        "error": "Route not found"
    }), 404


@app.errorhandler(500)
def server_error(error):
    return jsonify({
        "success": False,
        "error": "Internal server error"
    }), 500


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "success": True,
        "message": "AI Digital Health Assistant API is running"
    }), 200


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json(silent=True)

        if not data:
            return jsonify({
                "success": False,
                "error": "Invalid or missing JSON payload"
            }), 400

        raw_symptoms = data.get("symptoms", [])

        if not isinstance(raw_symptoms, list):
            return jsonify({
                "success": False,
                "error": "Symptoms must be provided as a list"
            }), 400

        selected_symptoms = normalize_symptoms(raw_symptoms)

        if len(selected_symptoms) < 3:
            return jsonify({
                "success": False,
                "predicted_disease": "Insufficient symptoms",
                "selected_symptoms": selected_symptoms,
                "matched_symptoms": [],
                "top_3_predictions": [],
                "confidence_note": "Please select at least 3 symptoms for more meaningful preliminary analysis.",
                "pattern_message": "Too few symptoms to classify reliably.",
                "status_message": "Minimum symptom count not met."
            }), 400

        input_df, matched_symptoms = build_input(selected_symptoms)

        if len(matched_symptoms) < 2:
            return jsonify({
                "success": False,
                "predicted_disease": "Unknown",
                "selected_symptoms": selected_symptoms,
                "matched_symptoms": matched_symptoms,
                "top_3_predictions": [],
                "confidence_note": "Too few symptoms matched the trained model features.",
                "pattern_message": "Entered symptoms do not sufficiently match the trained dataset.",
                "status_message": "Insufficient symptom-feature match."
            }), 200

        probabilities = model.predict_proba(input_df)[0]
        class_names = getattr(model, "classes_", disease_classes)

        predictions = []
        for disease, prob in zip(class_names, probabilities):
            if disease in SHORTLIST_DISEASES:
                predictions.append({
                    "disease": disease,
                    "confidence": round(float(prob) * 100, 2)
                })

        predictions = sorted(predictions, key=lambda x: x["confidence"], reverse=True)
        top_3 = predictions[:3]
        best_prediction = top_3[0] if top_3 else {"disease": "Unknown", "confidence": 0}

        return jsonify({
            "success": True,
            "predicted_disease": best_prediction["disease"],
            "selected_symptoms": selected_symptoms,
            "matched_symptoms": matched_symptoms,
            "top_3_predictions": top_3,
            "confidence_note": build_confidence_note(best_prediction["confidence"]),
            "pattern_message": get_pattern_message(matched_symptoms),
            "status_message": "Preliminary shortlist prediction generated successfully."
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "error": "Prediction processing failed",
            "details": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)