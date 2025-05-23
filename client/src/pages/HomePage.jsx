import '../styles/home.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

export function HomePage() {
  return (
    <div className="home-wrapper">
      <div className="home-top">
        <h3>ESTEBAN</h3>
        <h3>RAMIREZ</h3>
        <h2>Backend Dev</h2>
      </div>
      <div className="home-picture">
        <div className="home-circle">
          <img src='img/laptop.jpg'></img>
          <p className='home-img-credits'>Credits Photo by <a href="https://unsplash.com/es/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">AltumCode</a> at <a href="https://unsplash.com/es/fotos/U0tBTn8UR8I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
      </div>
      <div className="home-bottom">
        <h5>PYTHON BACKEND DEVELOPER</h5>
        <div className='home-links'>
          <a href="https://www.linkedin.com/in/esteban-ramirez-0522bab8/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
          <a href="https://github.com/ERA73" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
          <a href="mailto:codedevest@outlook.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
        </div>
      </div>
    </div>
  )
}