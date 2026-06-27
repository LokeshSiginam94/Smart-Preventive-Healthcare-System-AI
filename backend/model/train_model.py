import os
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split, StratifiedKFold, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.calibration import CalibratedClassifierCV
from sklearn.metrics import accuracy_score, classification_report, balanced_accuracy_score

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "training_data.csv")
MODEL_PATH = os.path.join(BASE_DIR, "disease_model.pkl")
SYMPTOM_COLUMNS_PATH = os.path.join(BASE_DIR, "symptom_columns.pkl")
DISEASE_CLASSES_PATH = os.path.join(BASE_DIR, "disease_classes.pkl")

SHORTLIST_DISEASES = [
    "Common Cold",
    "Pneumonia",
    "Bronchial Asthma",
    "Dengue",
    "Malaria",
    "Typhoid",
    "Gastroenteritis",
    "GERD"
]

df = pd.read_csv(DATA_PATH)
df = df.loc[:, ~df.columns.str.contains("^Unnamed")]
df.columns = df.columns.str.strip()

for col in df.columns:
    if df[col].dtype == "object":
        df[col] = df[col].astype(str).str.strip()

df = df.drop_duplicates()
df = df[df["prognosis"].isin(SHORTLIST_DISEASES)].copy()

X = df.drop("prognosis", axis=1)
y = df["prognosis"]

print("Filtered dataset shape:", df.shape)
print("Diseases used:", sorted(y.unique().tolist()))

base_model = RandomForestClassifier(
    n_estimators=300,
    max_depth=8,
    min_samples_split=4,
    min_samples_leaf=2,
    random_state=42,
    n_jobs=-1
)

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
cv_scores = cross_val_score(base_model, X, y, cv=cv, scoring="accuracy")

print("Cross-validation accuracy scores:", cv_scores)
print("Mean CV accuracy:", round(cv_scores.mean(), 4))

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

calibrated_model = CalibratedClassifierCV(
    estimator=base_model,
    method="sigmoid",
    cv=3
)

calibrated_model.fit(X_train, y_train)

y_pred = calibrated_model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
balanced_acc = balanced_accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)

print("Test Accuracy:", round(accuracy, 4))
print("Balanced Accuracy:", round(balanced_acc, 4))
print(report)

joblib.dump(calibrated_model, MODEL_PATH)
joblib.dump(list(X.columns), SYMPTOM_COLUMNS_PATH)
joblib.dump(sorted(y.unique().tolist()), DISEASE_CLASSES_PATH)

print("Saved model to:", MODEL_PATH)
print("Saved symptom columns to:", SYMPTOM_COLUMNS_PATH)
print("Saved disease classes to:", DISEASE_CLASSES_PATH)