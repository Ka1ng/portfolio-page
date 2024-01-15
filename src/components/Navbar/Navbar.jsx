import React  from 'react'
import './Navbar.css'

export default function Navbar({setSideOn, sideOn}) {


  return (
    <div className='navbar'>
      <div className="logo-text">Kaung.dev</div>
      <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutMe">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="line-container" onClick={()=>setSideOn(!sideOn)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>

    </div>
  )
}
