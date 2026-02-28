import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import UpdatesSection from './sections/UpdatesSection'

function App() {
  return (
    <div className="relative overflow-x-clip bg-white text-slate-800">
      <div className="soft-glow -left-24 top-16 h-64 w-64" />
      <div className="soft-glow right-0 top-[38rem] h-72 w-72" />
      <div className="soft-glow left-1/3 top-[85rem] h-72 w-72" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <UpdatesSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
