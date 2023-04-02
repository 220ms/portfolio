import './css/App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'
import Socials from './components/Socials'

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Socials />

    </div>
  );
}

export default App;
