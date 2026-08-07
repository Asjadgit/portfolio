import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';


function App () {
    return <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
    </>
}

export default App
