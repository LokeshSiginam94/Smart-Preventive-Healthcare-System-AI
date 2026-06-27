import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Link } from 'react-router-dom'
import {
  Activity,
  Brain,
  ClipboardList,
  CircleAlert,
  Stethoscope,
  ArrowRight,
  CircleCheck,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Activity,
    title: 'Open the Symptom Checker',
    description:
      'Start from the symptom checker page and begin with the symptoms that best match the current condition.',
  },
  {
    step: '02',
    icon: ClipboardList,
    title: 'Enter symptoms carefully',
    description:
      'Select symptoms as accurately as possible so the system can generate more relevant preliminary support.',
  },
  {
    step: '03',
    icon: Brain,
    title: 'Review the result',
    description:
      'Check the AI-supported result, symptom summary, and the displayed guidance based on the selected symptoms.',
  },
  {
    step: '04',
    icon: Stethoscope,
    title: 'Use the guidance responsibly',
    description:
      'Treat the output as awareness and decision-support guidance only, not as a final medical diagnosis.',
  },
  {
    step: '05',
    icon: CircleAlert,
    title: 'Seek help when needed',
    description:
      'If symptoms worsen, continue for too long, or appear urgent, contact a licensed doctor or emergency service.',
  },
]

const quickPoints = [
  'Select only symptoms that are currently present',
  'Review the displayed result before taking action',
  'Use the guidance for awareness, not diagnosis',
  'Get medical help quickly for serious or urgent symptoms',
]

function StepCard({ item, index }) {
  const Icon = item.icon

  return (
    <article
      className="group relative animate-[fadeUp_0.7s_ease-out_forwards] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06]"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-200">
            <Icon size={22} />
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold tracking-[0.22em] text-slate-300">
            {item.step}
          </div>
        </div>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white">
          {item.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {item.description}
        </p>
      </div>
    </article>
  )
}

export default function HowToUsePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <main className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-80px] top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-[-90px] top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute left-1/3 top-[760px] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 backdrop-blur-2xl md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards] opacity-0">
              <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
                How to Use
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Use the platform in a clear step-by-step way
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This page explains how to use the current system carefully, from
                symptom selection to reviewing the displayed guidance and deciding
                the next safe step.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/symptom-checker"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
                >
                  Start Now
                </Link>

                <Link
                  to="/features"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  View Features
                </Link>
              </div>
            </div>

            <div
              className="animate-[fadeUp_0.8s_ease-out_forwards] opacity-0"
              style={{ animationDelay: '120ms' }}
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm text-slate-400">Quick Use Summary</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Follow the main flow and review the result carefully
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  {quickPoints.map((point) => (
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

        <section className="mt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">
              User Steps
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              How the current platform should be used
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The experience is designed around a simple order: choose symptoms,
              review the system output, understand the guidance, and act responsibly.
            </p>
          </div>

          <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((item, index) => (
              <StepCard key={item.step} item={item} index={index} />
            ))}
          </section>
        </section>

        <section className="mt-20 rounded-[2rem] border border-rose-400/20 bg-gradient-to-br from-rose-400/10 via-white/[0.03] to-orange-400/10 p-6 backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Safety Reminder
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-200">
            This system provides educational and preliminary support only. For chest
            pain, breathing difficulty, unconsciousness, severe dehydration, or any
            serious emergency, call emergency services or visit a hospital immediately.
          </p>
        </section>

        <section className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">
                Next Action
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Start the symptom check when ready
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Begin with the current symptoms, review the system output carefully,
                and use the guidance as supportive information only.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/symptom-checker"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
              >
                Start Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/features"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                View Features
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