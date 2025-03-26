import Team from '../components/Team';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
export function Homepage() {
  return (

    <div className="font-sans">
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}