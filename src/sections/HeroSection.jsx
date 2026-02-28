import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/80 via-white to-white" />
      <div className="absolute -left-20 top-24 -z-10 h-56 w-56 rounded-full bg-indigo-200/55 blur-3xl" />
      <div className="absolute -right-20 bottom-20 -z-10 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">Portfolio</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            AI & Robotics Developer
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Building intelligent systems at the intersection of artificial intelligence, computer vision, and edge hardware.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/resume/Shrish_Patil_ColorMatched_Resume_withPhoto.docx"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200/50"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300"
            >
              Contact
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-3 sm:gap-4">
            <div className="surface-3d p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">Focus</p>
              <p className="mt-2 text-sm font-semibold text-slate-800">Edge AI + Robotics</p>
            </div>
            <div className="surface-3d p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">Domain</p>
              <p className="mt-2 text-sm font-semibold text-slate-800">Agri Intelligence</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="group mx-auto w-full max-w-sm"
        >
          <div className="surface-3d relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-indigo-50 to-sky-100 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85),transparent_55%)]" />
            <img
              src="/images/profile.jpg"
              alt="Shrish Patil"
              className="h-full w-full rounded-2xl border border-slate-300/80 object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
