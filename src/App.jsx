import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Steps from './components/Steps'
import Dashboard from './components/Dashboard'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Steps />
      <Dashboard />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
