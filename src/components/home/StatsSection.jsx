import { stats } from '../../data/stats'

export default function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl bg-slate-900/60 p-5">
            <p className="text-3xl font-bold text-cyan-300">{item.value}</p>
            <p className="mt-2 text-sm text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}