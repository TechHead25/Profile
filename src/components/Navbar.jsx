import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Updates', href: '#updates' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200/80 bg-white/80 shadow-lg shadow-slate-200/40 backdrop-blur-2xl'
          : 'border-transparent bg-white/45 backdrop-blur-xl'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-base font-semibold tracking-tight text-slate-900 transition-transform duration-300 hover:-translate-y-0.5">
          Shrish Patil
        </a>

        <ul className="flex items-center gap-2 text-sm font-medium text-slate-600 sm:gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-xl px-3 py-1.5 transition-all duration-200 hover:bg-white/80 hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
