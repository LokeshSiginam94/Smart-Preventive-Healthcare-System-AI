import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const riskReasons = [
  'Fever reported',
  'Cough reported',
  'Fatigue reported',
  'Symptoms present for 3 days',
]

const featureCards = [
  {
    title: 'AI Health Risk Score',
    description:
      'Provides a preliminary health risk score using selected symptoms, severity signals, and duration details.',
  },
  {
    title: 'Symptom Severity Indicator',
    description:
      'Shows whether the reported condition may appear mild, moderate, or high-risk for better awareness.',
  },
  {
    title: 'Emergency Guidance Support',
    description:
      'Helps users understand when they may monitor symptoms, seek consultation, or consider urgent care.',
  },
  {
    title: 'Recovery Planner',
    description:
      'Offers a simple day-wise support plan for hydration, rest, food guidance, and routine recovery care.',
  },
  {
    title: 'Indian Home Care Tips',
    description:
      'Shares supportive household wellness suggestions commonly followed in India, along with safety disclaimers.',
  },
  {
    title: 'Seasonal Health Alerts',
    description:
      'Highlights common seasonal health risks in India using a simple month-based awareness model.',
  },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Select Symptoms',
    description:
      'Users choose currently observed symptoms and add recovery context such as duration and notes.',
  },
  {
    step: '02',
    title: 'Analyze Risk',
    description:
      'The platform evaluates symptom combinations and returns a preliminary AI-assisted health suggestion.',
  },
  {
    step: '03',
    title: 'Review Guidance',
    description:
      'Users see risk level, confidence guidance, matched symptoms, and suggested next-action support.',
  },
  {
    step: '04',
    title: 'Act Early',
    description:
      'The system supports preventive action through monitoring advice, recovery planning, and emergency awareness.',
  },
]

const stats = [
  { value: '10+', label: 'Core Platform Features' },
  { value: '6', label: 'Health Guidance Modules' },
  { value: '24/7', label: 'Preventive Support' },
  { value: '108', label: 'Emergency Helpline' },
]

function StatCard({ value, label, delay = 0 }) {
  return (
    <div
      className="animate-[fadeUp_0.7s_ease-out_forwards] rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 opacity-0 backdrop-blur-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
    </div>
  )
}

function FeatureCard({ title, description, delay = 0 }) {
  return (
    <article
      className="group animate-[fadeUp_0.7s_ease-out_forwards] rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-10 w-10 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-emerald-400/10" />
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-300/30 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  )
}

function WorkflowCard({ step, title, description, delay = 0 }) {
  return (
    <div
      className="animate-[fadeUp_0.7s_ease-out_forwards] rounded-[1.75rem] border border-white/10 bg-slate-900/50 p-6 opacity-0 backdrop-blur-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-xs font-semibold tracking-[0.28em] text-cyan-300">{step}</p>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-120px] top-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-[-80px] top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute left-1/3 top-[680px] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-10 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-20">
          <div className="animate-[fadeUp_0.8s_ease-out_forwards] opacity-0">
            <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
              Smart Preventive Healthcare System for India
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Check symptoms early, understand risk, and get AI-assisted health guidance.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              This platform supports preliminary symptom analysis, risk awareness,
              recovery planning, seasonal health alerts, and emergency guidance
              for everyday users.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
              It is designed for educational and decision-support purposes only and
              does not replace a doctor, clinical diagnosis, or emergency medical care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/symptom-checker"
                className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
              >
                Start Symptom Check
              </a>
              <a
                href="/how-to-use"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                How to Use
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Preventive Focus</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Helps users notice health risks early before conditions become more serious.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                <p className="text-sm text-slate-400">Decision Support</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Guides users on when to rest, monitor symptoms, seek consultation, or act urgently.
                </p>
              </div>
            </div>
          </div>

          <div
            className="animate-[fadeUp_0.9s_ease-out_forwards] opacity-0"
            style={{ animationDelay: '120ms' }}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <div>
                  <p className="text-sm text-slate-400">Overall Health Risk</p>
                  <p className="mt-2 text-3xl font-semibold text-white">Low</p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-300">
                  Stable Pattern
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Health Score</p>
                  <p className="mt-2 text-2xl font-semibold text-white">84 / 100</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Infection Risk</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Moderate</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[56%] rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-400">Suggested Action</p>
                    <p className="mt-2 text-xl font-semibold text-white">Monitor Closely</p>
                  </div>
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
                    Preventive Guidance
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-medium text-white">Why this result?</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {riskReasons.map((reason) => (
                      <div
                        key={reason}
                        className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-300"
                      >
                        <span className="mr-2 text-emerald-300">✔</span>
                        {reason}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Recovery Readiness</p>
                  <p className="mt-2 text-lg font-semibold text-white">Daily support plan available</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-sm text-slate-400">Emergency Support</p>
                  <p className="mt-2 text-lg font-semibold text-white">Quick access to 108 guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <StatCard
                key={item.label}
                value={item.value}
                label={item.label}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
              Core Features
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Built as a health decision-support platform
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The system is designed to go beyond disease prediction by combining AI
              analysis with preventive care, health education, and actionable recovery guidance.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((item, index) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                delay={index * 90}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-emerald-300">
                Workflow
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A simple flow built for early action
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The platform is structured to help users move from symptom awareness to
                safer next steps using a guided, understandable experience.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-sm leading-7 text-slate-300">
                  From first symptom selection to preliminary guidance, the workflow is
                  designed to reduce confusion and support informed, non-panic decision making.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {workflowSteps.map((item, index) => (
                <WorkflowCard
                  key={item.step}
                  step={item.step}
                  title={item.title}
                  description={item.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/[0.04] to-emerald-400/10 p-8 backdrop-blur-2xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200">
                  Start Early
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Get preventive guidance before symptoms are ignored too long
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                  Use the symptom checker to review early warning signals, understand
                  possible health risk, and see supportive next-step guidance.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="/symptom-checker"
                  className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-slate-100"
                >
                  Start Symptom Check
                </a>
                <a
                  href="/how-to-use"
                  className="rounded-2xl border border-white/15 bg-black/20 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-black/30"
                >
                  Read Workflow
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(26px);
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