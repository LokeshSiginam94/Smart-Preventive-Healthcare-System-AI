import { ArrowRight, ShieldPlus, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Smart Preventive Healthcare System for India
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Check symptoms early, understand health risk, and get AI-assisted guidance.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            This platform supports preliminary symptom analysis, risk awareness, recovery
            planning, seasonal health alerts, and emergency guidance for everyday users.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            It is designed for educational and decision-support purposes only and does not
            replace a doctor, clinical diagnosis, or emergency medical care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/symptom-checker"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start Symptom Check
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/how-to-use"
              className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              How to Use
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 w-fit rounded-xl bg-emerald-400/10 p-2 text-emerald-300">
                <ShieldPlus size={20} />
              </div>
              <h3 className="font-semibold text-white">Preventive Focus</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Helps users notice health risks early before conditions become more serious.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 w-fit rounded-xl bg-fuchsia-400/10 p-2 text-fuchsia-300">
                <Stethoscope size={20} />
              </div>
              <h3 className="font-semibold text-white">Decision Support</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Guides users on when to rest, monitor symptoms, seek consultation, or act urgently.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-emerald-500/10 p-5">
              <p className="text-sm text-emerald-300">Overall Health Risk</p>
              <p className="mt-3 text-3xl font-bold text-white">Low</p>
            </div>

            <div className="rounded-2xl bg-cyan-500/10 p-5">
              <p className="text-sm text-cyan-300">Health Score</p>
              <p className="mt-3 text-3xl font-bold text-white">84 / 100</p>
            </div>

            <div className="rounded-2xl bg-amber-500/10 p-5">
              <p className="text-sm text-amber-300">Infection Risk</p>
              <p className="mt-3 text-3xl font-bold text-white">Moderate</p>
            </div>

            <div className="rounded-2xl bg-rose-500/10 p-5">
              <p className="text-sm text-rose-300">Suggested Action</p>
              <p className="mt-3 text-3xl font-bold text-white">Monitor Closely</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <p className="text-sm font-medium text-cyan-300">Why this result?</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>✔ Fever reported</li>
              <li>✔ Cough reported</li>
              <li>✔ Fatigue reported</li>
              <li>✔ Symptoms present for 3 days</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}