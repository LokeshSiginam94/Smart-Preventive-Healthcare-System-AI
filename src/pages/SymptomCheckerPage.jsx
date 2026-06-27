import { useMemo, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const symptoms = [
  'Fever',
  'Cough',
  'Fatigue',
  'Headache',
  'Body Pain',
  'Vomiting',
  'Sore Throat',
  'Breathing Difficulty',
  'Dizziness',
  'Stomach Pain',
  'Cold',
  'Joint Pain',
]

export default function SymptomCheckerPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [duration, setDuration] = useState('')
  const [notes, setNotes] = useState('')
  const [fieldError, setFieldError] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const [predictedDisease, setPredictedDisease] = useState('No analysis yet')
  const [topPredictions, setTopPredictions] = useState([])
  const [matchedSymptoms, setMatchedSymptoms] = useState([])
  const [confidenceNote, setConfidenceNote] = useState(
    'Run an analysis to view confidence guidance.'
  )
  const [patternMessage, setPatternMessage] = useState(
    'No symptom pattern has been analyzed yet.'
  )
  const [statusMessage, setStatusMessage] = useState(
    'Select at least 3 symptoms for preliminary analysis.'
  )

  const canAnalyze = useMemo(() => selectedSymptoms.length >= 3, [selectedSymptoms])

  const toggleSymptom = (symptom) => {
    setFieldError('')

    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((item) => item !== symptom)
        : [...prev, symptom]
    )
  }

  const handleAnalyze = async () => {
    setFieldError('')

    if (!canAnalyze) {
      setFieldError('Please select at least 3 symptoms for analysis.')
      setStatusMessage('Too few symptoms selected for preliminary analysis.')
      return
    }

    if (!fullName.trim()) {
      setFieldError('Please enter the patient name.')
      return
    }

    if (!age || Number(age) <= 0) {
      setFieldError('Please enter a valid age.')
      return
    }

    if (!gender) {
      setFieldError('Please select a gender.')
      return
    }

    if (!duration) {
      setFieldError('Please select symptom duration.')
      return
    }

    try {
      setIsAnalyzing(true)
      setStatusMessage('Analyzing symptoms...')

      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symptoms: selectedSymptoms,
          full_name: fullName,
          age,
          gender,
          duration,
          notes,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setPredictedDisease(data.predicted_disease || 'Analysis could not be completed')
        setTopPredictions(data.top_3_predictions || [])
        setMatchedSymptoms(data.matched_symptoms || data.selected_symptoms || [])
        setConfidenceNote(
          data.confidence_note || 'Confidence guidance is not available.'
        )
        setPatternMessage(
          data.pattern_message || 'No symptom pattern summary is available.'
        )
        setStatusMessage(data.status_message || data.error || 'Analysis failed.')
        setFieldError(data.error || '')
        return
      }

      setPredictedDisease(data.predicted_disease || 'No suggestion available')
      setTopPredictions(data.top_3_predictions || [])
      setMatchedSymptoms(data.matched_symptoms || data.selected_symptoms || [])
      setConfidenceNote(
        data.confidence_note || 'Confidence guidance is not available.'
      )
      setPatternMessage(
        data.pattern_message || 'No symptom pattern summary is available.'
      )

      if ((data.top_3_predictions || []).length > 0) {
        setStatusMessage(
          data.status_message || 'Preliminary analysis completed successfully.'
        )
      } else {
        setStatusMessage(
          data.status_message ||
            'Analysis completed, but no shortlist could be generated.'
        )
      }
    } catch (error) {
      setPredictedDisease('Analysis failed')
      setTopPredictions([])
      setMatchedSymptoms([])
      setConfidenceNote('The backend could not be reached.')
      setPatternMessage('Pattern analysis could not be completed.')
      setStatusMessage('Connection to the Flask API failed.')
      console.error(error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleReset = () => {
    setSelectedSymptoms([])
    setFullName('')
    setAge('')
    setGender('')
    setDuration('')
    setNotes('')
    setFieldError('')
    setIsAnalyzing(false)
    setPredictedDisease('No analysis yet')
    setTopPredictions([])
    setMatchedSymptoms([])
    setConfidenceNote('Run an analysis to view confidence guidance.')
    setPatternMessage('No symptom pattern has been analyzed yet.')
    setStatusMessage('Select at least 3 symptoms for preliminary analysis.')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            AI Symptom Analysis
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">Symptom Checker</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Enter patient details, select symptoms, and view preliminary AI-assisted
            health suggestions, confidence guidance, and symptom-pattern feedback.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Patient Details</h2>

            <p className="mt-3 text-sm text-slate-400">
              Fill in the basic details and choose at least 3 symptoms to run a
              preliminary analysis.
            </p>

            {fieldError && (
              <div
                role="alert"
                className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200"
              >
                {fieldError}
              </div>
            )}

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter patient name"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter age"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Symptom Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
                >
                  <option value="">Select duration</option>
                  <option value="1 Day">1 Day</option>
                  <option value="2-3 Days">2-3 Days</option>
                  <option value="4-7 Days">4-7 Days</option>
                  <option value="More than 1 Week">More than 1 Week</option>
                </select>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">Select Symptoms</h3>
              <p className="mt-2 text-sm text-slate-400">
                Choose symptoms currently observed by the patient.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {symptoms.map((symptom) => {
                  const isSelected = selectedSymptoms.includes(symptom)

                  return (
                    <button
                      key={symptom}
                      type="button"
                      onClick={() => toggleSymptom(symptom)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300'
                          : 'border-white/10 bg-slate-900/70 text-slate-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300'
                      }`}
                    >
                      {symptom}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <p className="text-sm text-slate-400">
                  Selected symptoms:{' '}
                  <span className="font-semibold text-cyan-300">
                    {selectedSymptoms.length}
                  </span>
                </p>

                {!canAnalyze && (
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                    Select at least 3 symptoms to enable analysis
                  </span>
                )}
              </div>
            </div>

            <div className="mt-8">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Additional Notes
              </label>
              <textarea
                rows="4"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Enter any additional observations..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleAnalyze}
                disabled={!canAnalyze || isAnalyzing}
                className={`rounded-xl px-6 py-3 font-semibold transition ${
                  !canAnalyze || isAnalyzing
                    ? 'cursor-not-allowed bg-slate-700 text-slate-400'
                    : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                }`}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Symptoms'}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Reset Form
              </button>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Primary Suggestion</h2>
              <div className="mt-5 rounded-2xl bg-cyan-500/10 p-5">
                <p className="text-sm text-cyan-300">Preliminary AI-assisted result</p>
                <p className="mt-2 text-3xl font-bold text-white">{predictedDisease}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Top 3 Suggestions</h2>
              <div className="mt-5 space-y-4">
                {topPredictions.length > 0 ? (
                  topPredictions.map((item, index) => (
                    <div
                      key={`${item.disease}-${index}`}
                      className="rounded-2xl bg-slate-900/60 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-semibold text-white">{item.disease}</p>
                        <p className="text-cyan-300">{item.confidence}%</p>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-cyan-400"
                          style={{ width: `${item.confidence}%` }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">
                    Run an analysis to view the top matching shortlist.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Matched Symptoms</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {matchedSymptoms.length > 0 ? (
                  matchedSymptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300"
                    >
                      {symptom.replace(/_/g, ' ')}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">No matched symptoms yet.</p>
                )}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Confidence Guidance</h2>
              <div className="mt-5 rounded-2xl bg-amber-500/10 p-5">
                <p className="text-sm leading-7 text-slate-200">{confidenceNote}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Pattern Summary</h2>
              <div className="mt-5 rounded-2xl bg-fuchsia-500/10 p-5">
                <p className="text-sm leading-7 text-slate-200">{patternMessage}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Analysis Status</h2>
              <div className="mt-5 rounded-2xl bg-slate-900/60 p-5">
                <p className="text-sm leading-7 text-slate-200">{statusMessage}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-semibold text-white">Medical Disclaimer</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This system provides preliminary symptom-based suggestions only. It does
                not replace a licensed doctor, clinical testing, or emergency medical care.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}