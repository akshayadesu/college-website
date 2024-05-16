'use client';
import '../styles/global.css';
import '/public/vishnulogo2.png';
import React, { useState } from 'react';
import Link from 'next/link';
export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <>
            <div className='main-container'>
                <div className='clg-logo'>
                    <img src="vishnulogo2.png" alt="logo" style={{ maxWidth: '70%', height: 'auto', }} />
                </div>
                <div className="topnav">
                    <div><button style={{ backgroundColor: 'violet', border: 'none', fontSize: '20px' }} onClick={handleSidebar}>Branches</button></div>
                    <div><Link href="/about"><button style={{ backgroundColor: 'violet', border: 'none', fontSize: '20px' }}>AboutUs</button></Link></div>
                    <div><Link href="/contact"><button style={{ backgroundColor: 'violet', border: 'none', fontSize: '20px' }}>ContactUs</button></Link></div>
                    <div className="dropdown">
                        <button style={{ backgroundColor: 'violet', border: 'none' }}><span style={{ fontSize: '20px' }}>Departments</span></button>
                        <div className='dropdown-content'>
                            <ul style={{ listStyleType: 'none' }}>
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
                    <div><Link href="/login"><button style={{ backgroundColor: 'violet', border: 'none', fontSize: '20px' }}>Login</button></Link></div>
                </div>
            </div>
            {sidebar &&
                <div className={`sidebar ${sidebar ? 'active' : ''}`}>
                    <div className='sidebar-head'>
                        <center><h2>Branches</h2></center>
                        <button onClick={handleSidebar} style={{ border: 'none', fontSize: '20px' }}>
                            X
                        </button>
                    </div>
                    <ul >
                        <li >Bhimavaram</li>
                        <li >Hyderabad</li>
                    </ul>
                </div>
            }
        </>

    )
}