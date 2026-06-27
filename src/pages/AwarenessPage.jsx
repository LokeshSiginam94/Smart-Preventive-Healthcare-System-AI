import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function AwarenessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-4xl font-bold">Community Awareness</h2>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          This page will include awareness campaigns, common disease information,
          myths vs facts, prevention methods, and public health education content.
        </p>
      </main>
      <Footer />
    </div>
  )
}