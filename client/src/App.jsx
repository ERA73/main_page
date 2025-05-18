import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Element } from 'react-scroll';

function App() {
  const hideNavbar = (event) => {
    const parent1 = event.target.parentElement
    const parent2 = event.target.parentElement.parentElement
    const classNames = ['nav-btn', 'nav-container', 'nav-btn-bars']
    if (!classNames.some(className => parent2.classList.contains(className)) && !classNames.some(className => parent1.classList.contains(className))) {
      document.getElementsByTagName("nav")[0].classList.remove("responsive");
    }

  }
  return (
    <div className='main-container' onClick={hideNavbar}>
      <BrowserRouter>
        <Navigation />
        <div className='container'>
          <Element name='/'>
            <HomePage />
          </Element>
          <Element name='/projects'>
            <ProjectsPage />
          </Element>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App