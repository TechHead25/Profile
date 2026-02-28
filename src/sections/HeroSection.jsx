import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-100 via-white to-white" />
      <div className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Portfolio</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            AI & Robotics Developer
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Building intelligent systems at the intersection of artificial intelligence, computer vision, and edge hardware.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#"
              className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 p-6 shadow-xl shadow-slate-300/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85),transparent_55%)]" />
            <img
              src="/images/profile.jpg"
              alt="Shrish Patil"
              className="h-full w-full rounded-2xl border border-slate-300/80 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
