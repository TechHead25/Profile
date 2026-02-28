function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
