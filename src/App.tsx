import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CursorGlow from './components/CursorGlow'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-100 overflow-x-clip">
      <CursorGlow />
      <ScrollProgress />
      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
