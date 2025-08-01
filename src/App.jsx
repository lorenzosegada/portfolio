
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Stack from './sections/Stack'
import  Contact  from './sections/Contact'
import Projects from './sections/Projects'

function App() {

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 max-w-[1090px] mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
