import React, { useEffect, useState } from 'react'
import './AboutMe.css'
import ReactCurvedText from 'react-curved-text';
import AboutMePic from '../../assets/aboutMe.jpg'

export default function AboutMe() {


  return (
    <div className='aboutMe container' id='aboutMe'>
      <div className="grid">
        <div className='imgContainer'>
          <div className="imgBox">
            <img src={AboutMePic} />
            <div className="circular">
              <ReactCurvedText
                width={300}
                height={300}
                cx={55}
                cy={55}
                rx={40}
                ry={40}
                startOffset={0}
                reversed={true}
                text="FRONTEND WEB DEVELOPER"
                textProps={{
                  style: {
                    fontSize: 14,
                    letterSpacing: 2,
                    backgroundColor: 'black'
                  }
                }}
                textPathProps={null}
                tspanProps={null}
                ellipseProps={null}
                svgProps={null}
              />
            </div>
          </div>

        </div>

        <div className="textContainer">
          <div className="sub-title">About Me</div>
          <div className='title'>A dedicated Front-end web developer 
            who base in Sanchaung, Yangon 🏛️</div>
          <div className="text">
            As a junior Front-End Developer, I possess skills in HTML, CSS, Javascript,
            React, Tailwind, Bootstrap and Jquery. I am also a team player who thrieves in
            collaboration with cross-functional teams to produce outstanding web applications.
          </div>
        </div>

      </div>
    </div>
  )
}
