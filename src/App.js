import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Sidebar from './components/Sidebar/Sidebar'
import { useEffect, useRef, useState } from 'react'
import Header from './components/Header/Header'
import ProjectText from './components/Projects/ProjectText/ProjectText'
import TideTackle from './components/Projects/TideTackle/TideTackle'
import Contact from './components/Contact/Contact'

function App() {

  let [sideOn, setSideOn] = useState(false);

  let sideRef = useRef();
  let homeRef = useRef();
  let aboutRef = useRef();
  let projectsRef = useRef();
  let contactRef = useRef();

  useEffect(() => {

    let sideBarHandler = (e) => {
      if (!sideRef.current.contains(e.target)) {
        setSideOn(false)
      }
    }

    let homeRefHandler = (e) => {
      if (homeRef.current.contains(e.target)) {
        setSideOn(false);
      }
    }

    let aboutRefHandler = (e) => {
      if (aboutRef.current.contains(e.target)) {
        setSideOn(false);
      }
    }

    let projectsRefHandler = (e) => {
      if (projectsRef.current.contains(e.target)) {
        setSideOn(false);
      }
    }

    let contactRefHandler = (e) => {
      if (contactRef.current.contains(e.target)) {
        setSideOn(false);
      }
    }

    document.addEventListener('mousedown', sideBarHandler);
    document.addEventListener('mousedown', homeRefHandler)
    document.addEventListener('mousedown', aboutRefHandler)
    document.addEventListener('mousedown', projectsRefHandler)
    document.addEventListener('mousedown', contactRefHandler)

  }, [])

  return (
    <>
      <Navbar setSideOn={setSideOn} sideOn={sideOn} />
      <Sidebar sideOn={sideOn} sideRef={sideRef} homeRef={homeRef} projectsRef={projectsRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Header />
      <AboutMe />
      <ProjectText />
      <TideTackle />
      <Contact/>
    </>
  )
}

export default App
