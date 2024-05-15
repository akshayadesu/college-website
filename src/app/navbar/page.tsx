import '../styles/global.css';
import '/public/vishnulogo2.png';
import React from 'react';
import Link from 'next/link';
export default function Navbar() {
    return (
        <>

            <div className='main-container'>
                <div className='clg-logo'>
                    <img src="vishnulogo2.png" alt="logo" style={{ maxWidth: '70%', height: 'auto', }} />
                </div>
                <div className="topnav">
                    <div><Link href="/about"><button style={{ backgroundColor: 'violet', border: 'none',fontSize: '20px' }}>AboutUs</button></Link></div>
                    <div><Link href="/contact"><button style={{ backgroundColor: 'violet',  border: 'none', fontSize: '20px' }}>ContactUs</button></Link></div>
                    <div className="dropdown">
                    <button style={{backgroundColor: 'violet', border: 'none'}}><span style={{fontSize: '20px'}}>Departments</span></button>
                        <div className='dropdown-content'>
                            <ul style={{listStyleType:'none'}}>
                                <li>Computer Science & Engineering(CSE)</li>
                                <li>Information Technology(IT)</li>
                                <li>Electronics and Communication Engineering(ECE)</li>
                                <li>Electrical & Electronics Engineering(EEE)</li>
                                <li>Mechanical Engineering(ME)</li>
                                <li>Civil Engineering</li>
                                <li>Artificial Intelligence(AI)</li>
                                <li>Master of Business Administration(MBA)</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>

    )
}