import {
  Brain,
  HeartPulse,
  ShieldAlert,
  CalendarDays,
  Leaf,
  Thermometer,
} from 'lucide-react'
import SectionTitle from '../shared/SectionTitle'
import { features } from '../../data/features'

const icons = [Brain, HeartPulse, ShieldAlert, CalendarDays, Leaf, Thermometer]

export default function FeatureHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle
        badge="Core Features"
        title="Built as a health decision-support platform"
        description="The system is designed to go beyond disease prediction by combining AI analysis with preventive care, health education, and actionable recovery guidance."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = icons[index % icons.length]

          return (
            <article
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/20"
            >
              <div className="mb-4 w-fit rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}