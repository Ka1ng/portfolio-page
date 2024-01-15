import React from 'react'
import TideTacklePic from '../../../assets/restaurant-screenshot.png'
import './TideTackle.css'


export default function TideTackle() {
    return (
        <div className='tideTackle container'>
            <div className="grid">
                <div className="projectImgContainer">
                    <div className="projectImgBox">
                        <img src={TideTacklePic} className='projectPic' />
                    </div>
                </div>
                <div className="projectTextContainer">
                    <div className="projectTitle">Tide & Tackle</div>
                    <div className="text">Tide & Tackle website is an online restaurant menu
                        that allows users to look for their appetite and to book the tables as their schedule.
                    </div>
                    <div className="projectType">
                        <div className="projectTitle">React</div>
                        <div className="projectTitle">CSS</div>
                    </div>
                    <div className="projectBtns">
                        <a href="https://github.com/Ka1ng/tide-tackle" target='_blank'><div className="projectBtn">
                            Code <i class="fab fa-github"></i>
                        </div></a>
                        <a href="https://ka1ng.github.io/tide-tackle/" target='_blank'><div className="projectBtn">
                            Live Demo
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="i">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
