import './App.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
