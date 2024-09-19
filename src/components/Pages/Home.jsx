import '../../App.css'
import About from '../Layout/About.jsx';
import Footer from '../Layout/Footer.jsx';
import Hero from '../Layout/Hero';
import MeshBackground from '../UI/MeshBackground';
import Navbar from '../Layout/navbar';
import Socialproof from '../Layout/Socialproof.jsx';
import NewsEvents from '../Layout/NewsEvents.jsx';
import FeaturedSpots from '../Layout/FeaturedSpots.jsx';



function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <MeshBackground />
      </div>

      <div className="flex flex-col gap-24 mt-40 md:gap-24 lg:gap-60">
        <section id="discover">
          <Socialproof />
        </section>

        <section>
          <FeaturedSpots />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="event">
          <NewsEvents />
        </section>
        
      <Footer />
      </div>

    </>
  );
}

export default Home;
