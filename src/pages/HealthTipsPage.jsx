import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function HealthTipsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-4xl font-bold">Health Tips</h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          This section will present preventive healthcare guidance, hydration reminders,
          recovery habits, nutrition advice, and seasonal safety tips.
        </p>
      </main>
      <Footer />
    </div>
  )
}