import React from 'react'
import './Sidebar.css'

export default function Sidebar({ sideOn, sideRef, homeRef, aboutRef, projectsRef, contactRef}) {
    return (
        <div className="sideBar">
            <div className={!sideOn ? "sidebar-content" : "sidebar-content show"} ref={sideRef}>
                <ul>
                    <li>
                        <a href="#home" ref={homeRef}>Home</a>
                    </li>
                    <li>
                        <a href="#aboutMe" ref={aboutRef}>About</a>
                    </li>
                    <li>
                        <a href="#project" ref={projectsRef}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" ref={contactRef}>Contact</a>
                    </li>
                </ul>
            </div>
            <div className={!sideOn ? "sidebar-bg" : "sidebar-bg show"}></div>
        </div>
    )
}
