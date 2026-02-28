import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import UpdatesSection from './sections/UpdatesSection'

function App() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <main>
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
