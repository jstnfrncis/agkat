
import './App.css'
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero';
import MeshBackground from './components/MeshBackground';
import Navbar from './components/navbar';
import Socialproof from './components/Socialproof.jsx';
import NewsEvents from './components/NewsEvents.jsx';
import FeaturedSpots from './components/FeaturedSpots.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';

// Kick off the polyfill!
smoothscroll.polyfill();


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <MeshBackground />
      </div>

      <div className="flex flex-col gap-24 mt-40 md:gap-24 lg:gap-60">
      <Routes>
          <Route 
            path="/" 
            element={
              <>
                  <Socialproof />
                <section id="discover">
                  <FeaturedSpots />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="event">
                  <NewsEvents />
                </section>
              </>
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


