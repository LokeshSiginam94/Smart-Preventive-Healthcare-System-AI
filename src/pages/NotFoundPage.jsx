import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
        <p className="rounded-full border border-rose-400/20 bg-rose-400/10 px-4 py-1 text-sm font-medium text-rose-300">
          404 Error
        </p>

        <h1 className="mt-6 text-4xl font-bold md:text-5xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          The page you are trying to open does not exist or may have been moved.
          Use one of the links below to return to the main sections of the project.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Go to Home
          </Link>

          <Link
            to="/symptom-checker"
            className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
          >
            Open Symptom Checker
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}