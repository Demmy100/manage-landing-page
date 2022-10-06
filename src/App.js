import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About'
import Testimonial from './components/Testimonial';
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-white w-full'>
     <div className='bg-hero-pattern bg-no-repeat bg-contain bg-bottom'>
     <Navbar />
     <Hero />
     <About />
     </div>
     
     <Testimonial />
     <Team />
     <Footer />
    </div>
  );
}

export default App;
