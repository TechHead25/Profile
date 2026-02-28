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
        className="surface-3d p-8 sm:p-10"
      >
        <div className="space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
          <p>
            I am an AI and robotics developer focused on building intelligent systems that bridge the gap between artificial intelligence
            and real-world deployment. My work lies at the intersection of computer vision, edge AI, and embedded hardware, with a strong
            emphasis on practical applications in agriculture, sustainability, and social impact.
          </p>
          <p>
            I design and develop end-to-end solutions that integrate machine learning models with physical devices and web platforms—ranging
            from edge-based pest detection systems and autonomous crop-monitoring robots to AI-driven web applications. My projects emphasize
            deployability, efficiency, and usability in resource-constrained environments.
          </p>
          <p>
            Beyond technical development, I actively contribute to innovation ecosystems through hackathons, research initiatives, and
            leadership roles in national-level technology competitions. I am particularly interested in creating scalable intelligent
            infrastructure for sustainable agriculture and environmental monitoring.
          </p>
          <p>
            I am driven by the goal of translating advanced AI research into accessible, real-world technologies that solve meaningful
            problems.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutSection
