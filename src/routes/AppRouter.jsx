import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SymptomCheckerPage from '../pages/SymptomCheckerPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
    </Routes>
  )
}