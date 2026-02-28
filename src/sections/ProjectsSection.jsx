import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    title: 'Deepfake Detection Platform',
    description:
      'An end-to-end web platform for detecting manipulated media using deep learning pipelines with explainable confidence signals.',
    stack: ['React', 'TensorFlow', 'OpenCV'],
  },
  {
    title: 'Autonomous Crop Health Rover',
    description:
      'A vision-guided rover for crop monitoring that captures field data and performs edge-assisted analysis for early intervention.',
    stack: ['Raspberry Pi', 'Computer Vision', 'IoT'],
  },
  {
    title: 'Mood-Based Study Planner',
    description:
      'A smart planning interface that adjusts task flow by detecting user mood through camera-based facial analysis in real time.',
    stack: ['React', 'face-api.js'],
  },
  {
    title: 'Smart Pest Edge Trap',
    description:
      'AI-powered edge pest monitoring system that detects and classifies crop pests in real time on low-power hardware for precision agriculture and early infestation alerts.',
    stack: ['Edge AI', 'Python', 'OpenCV', 'Embedded Linux'],
  },
  {
    title: 'GreenEdge AI – Smart Agricultural Intelligence Framework',
    description:
      'Edge AI framework concept and prototype for sustainable farming analytics, covering pest detection, crop monitoring, and environmental sensing in low-connectivity agricultural regions.',
    stack: ['Edge AI', 'IoT', 'Computer Vision'],
  },
  {
    title: 'Precision Agriculture Monitoring Dashboard',
    description:
      'Real-time crop and pest analytics interface for visualizing detection outputs and crop health insights streamed from edge devices.',
    stack: ['React', 'Data Visualization'],
  },
  {
    title: 'Dual-Channel Audio Signal Processing Setup',
    description:
      'Software-based bass separation and multi-output audio routing pipeline that splits full-range and bass-only signals across separate outputs using virtual drivers and EQ processing.',
    stack: ['Equalizer APO', 'Signal Processing'],
  },
]

function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-slate-50/70 py-20 lg:py-24">
      <div className="absolute left-12 top-10 -z-0 h-52 w-52 rounded-full bg-slate-200/50 blur-3xl" />
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="A snapshot of systems designed for robust deployment across AI, computer vision, and edge environments."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              className="surface-3d p-7"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
