import './App.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
