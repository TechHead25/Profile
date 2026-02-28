import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import updates from '../data/updates.json'

const sortedUpdates = [...updates].sort((first, second) => new Date(second.date) - new Date(first.date))

const formatDate = (value) =>
  new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

function UpdatesSection() {
  return (
    <section id="updates" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Updates"
        title="Recent Milestones"
        description="A running timeline of work, collaborations, and technical progress."
      />

      <div className="relative ml-2 border-l border-slate-200 pl-8 sm:ml-4">
        {sortedUpdates.map((update, index) => (
          <motion.article
            key={`${update.title}-${update.date}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
            className="relative mb-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm last:mb-0"
          >
            <span className="absolute -left-[2.15rem] top-8 h-3 w-3 rounded-full border border-slate-300 bg-white" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{formatDate(update.date)}</p>
            <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">{update.title}</h3>
            {update.description ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{update.description}</p> : null}
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default UpdatesSection
