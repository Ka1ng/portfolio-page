import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className='contact container' id='contact'>

            <div className="sub-title">Contact</div>
            <div className="title">Please just hit me up anytime! 👇</div>
            <div className="contact-list">
                <div className="contactContainer">
                    <div className="contactBox">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="i">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <div className='contactBox-test'>
                            <div className="projectTitle">Location</div>
                            <div className="text">No.45,Pathein St., Sanchaung, Yangon</div>
                        </div>
                    </div>
                    <div className="contactBox">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="i">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <div className='contactBox-test'>
                            <div className="projectTitle">Mail</div>
                            <div className="text">kaungsetoo123@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="contactContainer">
                    <div className="contactBox">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="i">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <div className='contactBox-test'>
                            <div className="projectTitle">Phone</div>
                            <div className="text">09-772114194</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
