import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import {
  Brain,
  ShieldAlert,
  HeartPulse,
  CalendarDays,
  Leaf,
  Thermometer,
  Activity,
  CircleCheck,
  Stethoscope,
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Health Risk Score',
    description:
      'Provides a preliminary risk score using symptom selection, severity signals, and duration-related inputs.',
  },
  {
    icon: HeartPulse,
    title: 'Symptom Severity Indicator',
    description:
      'Helps users understand whether the reported condition may appear mild, moderate, or higher-risk.',
  },
  {
    icon: ShieldAlert,
    title: 'Emergency Guidance Support',
    description:
      'Supports decision-making on whether symptoms can be monitored, require consultation, or need urgent attention.',
  },
  {
    icon: CalendarDays,
    title: 'Recovery Planner',
    description:
      'Offers a day-wise recovery support plan with simple guidance for rest, hydration, food, and routine care.',
  },
  {
    icon: Leaf,
    title: 'Indian Home Care Tips',
    description:
      'Shares supportive household wellness suggestions commonly followed in India with appropriate disclaimers.',
  },
  {
    icon: Thermometer,
    title: 'Seasonal Health Alerts',
    description:
      'Highlights common seasonal health risks in India through a simple awareness-based model.',
  },
]

const valuePoints = [
  'Early symptom awareness before conditions become more serious',
  'Preliminary AI-assisted support for everyday health concerns',
  'Preventive guidance focused on better next-step decisions',
  'Educational and decision-support use only',
]

const workflow = [
  {
    icon: Activity,
    title: 'Select Symptoms',
    description:
      'Users choose current symptoms and provide basic context such as duration and supporting observations.',
  },
  {
    icon: Brain,
    title: 'Review Preliminary Analysis',
    description:
      'The system processes symptom combinations and returns a preliminary AI-assisted result with supporting guidance.',
  },
  {
    icon: Stethoscope,
    title: 'Understand Next Steps',
    description:
      'Users review risk awareness, recovery support, and emergency direction based on the displayed result.',
  },
]

function PremiumFeatureCard({ feature, delay = 0 }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const Icon = feature.icon

  const glowStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 211, 238, 0.18) 0%, rgba(16, 185, 129, 0.08) 22%, transparent 62%)`,
    }),
    [mousePosition]
  )

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative animate-[fadeUp_0.7s_ease-out_forwards] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.06]"
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: isHovered
          ? '0 24px 70px rgba(0, 0, 0, 0.30)'
          : '0 10px 30px rgba(0, 0, 0, 0.18)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={glowStyle}
      />

      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-400/10 text-cyan-200">
          <Icon size={22} />
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-white">
          {feature.title}
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-300">
          {feature.description}
        </p>
      </div>
    </article>
  )
}

function WorkflowCard({ item, delay = 0 }) {
  const Icon = item.icon

  return (
    <div
      className="animate-[fadeUp_0.7s_ease-out_forwards] rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6 opacity-0 backdrop-blur-xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-400/10 text-emerald-200">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <main className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-80px] top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-[-90px] top-32 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute left-1/3 top-[720px] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 backdrop-blur-2xl md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-[fadeUp_0.8s_ease-out_forwards] opacity-0">
              <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
                Platform Features
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Features built for preventive healthcare support
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The platform combines symptom-based AI support, health awareness
                tools, recovery guidance, and emergency direction to help users take
                earlier and better-informed action.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/symptom-checker"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
                >
                  Try Symptom Checker
                </Link>

                <Link
                  to="/how-to-use"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  See How to Use
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
                    <p className="text-sm text-slate-400">Preventive Support</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      Built to support earlier health awareness
                    </p>
                  </div>
                  <div className="rounded-2xl border border-emerald-300/15 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                    Decision Support
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {valuePoints.map((point) => (
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
              Feature Modules
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Core modules available in the platform
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              These modules focus on symptom analysis, preventive support, health
              awareness, and basic next-step guidance based on the current project build.
            </p>
          </div>

          <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <PremiumFeatureCard
                key={feature.title}
                feature={feature}
                delay={index * 90}
              />
            ))}
          </section>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
              Platform Flow
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              How the current system works
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The user experience is designed to move from symptom entry to
              preliminary analysis and then toward better awareness of possible
              next steps.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {workflow.map((item, index) => (
              <WorkflowCard key={item.title} item={item} delay={index * 100} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-white/[0.03] to-orange-400/10 p-6 backdrop-blur-xl md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Important Note
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-200">
            These features are intended for awareness and decision support only.
            They do not replace professional medical diagnosis, laboratory
            confirmation, or emergency medical treatment.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/symptom-checker"
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
          >
            Try Symptom Checker
          </Link>

          <Link
            to="/how-to-use"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            See How to Use
          </Link>
        </div>
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