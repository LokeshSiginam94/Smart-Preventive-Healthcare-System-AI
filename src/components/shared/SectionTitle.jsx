export default function SectionTitle({ badge, title, description }) {
  return (
    <div className="max-w-3xl">
      {badge && (
        <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
          {badge}
        </p>
      )}
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}