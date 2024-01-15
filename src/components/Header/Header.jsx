import React from 'react'
import './Header.css'
import ProfilePic from '../../assets/profile-img1.jpg'
import HTMLPic from '../../assets/htmlPic.png'
import CSSPic from '../../assets/cssPic.png'
import JSPic from '../../assets/jsPic.png'
import ReactPic from '../../assets/reactPic.png'
import TailwindPic from '../../assets/tailwindPic.png'
import BootstrapPic from '../../assets/bootstrapPic.png'
import JqueryPic from '../../assets/jqueryPic.png'

export default function Header() {
  return (
    <div className='header container' id='home'>
           <div className="grid">
             <div className="headerTextContainer">
                <div className="headerTitle">
                  Front-End React Developer 👋
                </div>
                <div className="text">Hi, I'm Kaung Set Oo. A passionate Front-end web developer
                based in Sanchaung, Yangon</div>
                <div className="headerBtn">
                  <a href="https://github.com/Ka1ng" target='_blank'><i class="fab fa-github"></i></a>
                </div>
             </div>
             <div className="headerImgContainer">
                  <div className="headerImgBox">
                     <img src={ProfilePic} />
                  </div>
             </div>
           </div>
           <div className="techStack">
              <div className="techStackText">
                  <span>Tech Stack</span>  |
              </div>
              <div className="techStackIcons">
                  <ul>
                    <li> 
                        <img src={HTMLPic} className='langIcon'/>
                    </li>
                    <li> 
                        <img src={CSSPic} className='langIcon'/>
                    </li>
                    <li> 
                        <img src={JSPic} className='langIcon'/>
                    </li>
                    <li> 
                        <img src={ReactPic} className='langIcon'/>
                    </li>
                    <li> 
                        <img src={TailwindPic} className='langIcon'/>
                    </li>
                    <li> 
                        <img src={BootstrapPic} className='langIcon'/>
                    </li>
                    <li> 
                        <img src={JqueryPic} className='langIcon'/>
                    </li>
                  </ul>
              </div>
           </div>
    </div>
  )
}
