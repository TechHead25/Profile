import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="About"
        title="Building AI Systems That Create Real-World Impact"
        description="I focus on practical intelligence at the edge, combining machine learning with robust hardware to solve high-impact field problems."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10"
      >
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
          I am an AI and robotics developer passionate about turning research into deployable systems. My work spans computer vision,
          embedded AI, and intelligent robotics with a strong emphasis on reliability in real-world environments. I build solutions that
          bridge software and hardware, especially in agriculture technology, where automation and perception can improve productivity,
          sustainability, and decision-making at scale.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection
