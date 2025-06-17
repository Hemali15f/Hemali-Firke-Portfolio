
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
  <div className="w-full overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
    <div className="relative mx-auto max-w-screen-xl px-4 sm:px-4 lg:px-4 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
</ThemeProvider>


  );
}

export default App;
