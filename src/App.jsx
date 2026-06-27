import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SymptomCheckerPage from './pages/SymptomCheckerPage'
import FeaturesPage from './pages/FeaturesPage'
import HowToUsePage from './pages/HowToUsePage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-to-use" element={<HowToUsePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}