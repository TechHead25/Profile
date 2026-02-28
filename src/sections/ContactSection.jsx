import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const contacts = [
  { label: 'Email', href: 'mailto:shrishpatil53@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/TechHead25', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shrish-patil-19969b32b', icon: Linkedin },
  { label: 'Phone', href: 'tel:+917259714562', icon: Phone, displayText: '+91 72597 14562' },
]

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50/70 py-20 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Build Something Meaningful"
          description="Open to collaborations in AI, robotics, computer vision, and embedded systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contacts.map((item) => {
            const Icon = item.icon
            const isExternal = item.label === 'GitHub' || item.label === 'LinkedIn'
            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-white px-6 py-5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <Icon size={18} />
                {item.displayText ?? item.label}
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
