import './css/App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects'
import Socials from './components/Socials'
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Socials />

    </div>
  );
}

export default App;
