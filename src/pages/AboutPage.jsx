import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Link } from 'react-router-dom'
import {
  ShieldPlus,
  HeartPulse,
  Brain,
  CalendarDays,
  Leaf,
  Thermometer,
  Activity,
  CircleCheck,
  Stethoscope,
  Database,
} from 'lucide-react'

const modules = [
  {
    icon: Activity,
    title: 'Symptom Checker',
    description:
      'Allows users to select current symptoms and begin the preliminary health review process.',
  },
  {
    icon: Brain,
    title: 'Health Risk Score',
    description:
      'Provides an AI-assisted preliminary indication of possible health risk based on entered symptoms.',
  },
  {
    icon: Stethoscope,
    title: 'Emergency Guidance Support',
    description:
      'Helps users understand when symptoms may require monitoring, consultation, or urgent care.',
  },
  {
    icon: CalendarDays,
    title: 'Recovery Planner',
    description:
      'Offers supportive day-wise wellness guidance for rest, hydration, food, and routine care.',
  },
  {
    icon: Leaf,
    title: 'Indian Home Care Tips',
    description:
      'Shares household wellness suggestions commonly followed in India with responsible safety notes.',
  },
  {
    icon: Thermometer,
    title: 'Seasonal Health Alerts',
    description:
      'Highlights seasonal health awareness patterns and common risk periods.',
  },
]

const highlights = [
  'Early symptom awareness support',
  'Preliminary health-risk understanding',
  'Preventive and recovery-focused guidance',
  'Educational use with emergency awareness',
]

function ModuleCard({ item, index }) {
  const Icon = item.icon

  return (
    <article
      className="group animate-[fadeUp_0.7s_ease-out_forwards] rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06]"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-200">
        <Icon size={22} />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-300">
        {item.description}
      </p>
    </article>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <main className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-80px] top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-[-90px] top-28 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute left-1/3 top-[860px] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 backdrop-blur-2xl md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards] opacity-0">
              <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
                About the Project
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Smart Preventive Healthcare System for India
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This project is a preventive healthcare web platform designed to
                support early symptom awareness, health-risk understanding, recovery
                guidance, and emergency decision support through AI-assisted analysis.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/symptom-checker"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
                >
                  Try Symptom Checker
                </Link>

                <Link
                  to="/team"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  View Team Details
                </Link>
              </div>
            </div>

            <div
              className="animate-[fadeUp_0.8s_ease-out_forwards] opacity-0"
              style={{ animationDelay: '120ms' }}
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div>
                    <p className="text-sm text-slate-400">Project Vision</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      Support earlier awareness before health risks are ignored
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-300/15 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                    Preventive Focus
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {highlights.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <CircleCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-300"
                      />
                      <p className="text-sm leading-7 text-slate-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="animate-[fadeUp_0.7s_ease-out_forwards] rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 opacity-0 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-200">
              <ShieldPlus size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              Project Objective
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              The main objective of this system is to help users recognize possible
              health concerns at an early stage and encourage timely action through
              awareness-focused digital support.
            </p>
          </article>

          <article
            className="animate-[fadeUp_0.7s_ease-out_forwards] rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 opacity-0 backdrop-blur-xl"
            style={{ animationDelay: '100ms' }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-400/10 text-emerald-200">
              <HeartPulse size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              Why It Matters
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Many users ignore early symptoms or delay care. This platform aims to
              improve preventive thinking by combining symptom checking, guidance,
              and educational health information in one place.
            </p>
          </article>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
              Core Modules
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Platform capabilities built into the current system
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              The project combines multiple health-support modules to provide a more
              complete preventive-care experience for users.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((item, index) => (
              <ModuleCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-200">
              <Database size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              Technology Stack
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              The project is built using React for the frontend, Flask for the
              backend, and machine learning-based symptom analysis for preliminary
              prediction and health guidance support.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-white/[0.03] to-orange-400/10 p-6 backdrop-blur-xl md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Medical Disclaimer
            </h2>

            <p className="mt-4 leading-8 text-slate-200">
              This platform provides preliminary health guidance for awareness and
              educational purposes only. It is not a medical diagnosis system and
              does not replace consultation with a licensed doctor, clinical testing,
              or emergency medical care.
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">
                Explore the Platform
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Continue through the symptom-check experience
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Review the project modules, understand the preventive-care purpose,
                and continue into the main symptom-check flow.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/symptom-checker"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
              >
                Try Symptom Checker
              </Link>

              <Link
                to="/team"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                View Team Details
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}