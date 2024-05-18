'use client';
import '../styles/global.css';
import '/public/vishnulogo2.png';
import React, { useState } from 'react';
import Link from 'next/link';
export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const handleSidebar = () => {
        setSidebar(!sidebar);
        if (!sidebar) {
            setSelectedOption(null); 
        }
    }
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setSidebar(false);
    }
    return (
        <>
            <div className='main-container'>
                <div className='clg-logo'>
                    <img src="vishnulogo2.png" alt="logo" style={{ maxWidth: '70%', height: 'auto', }} />
                </div>
                <div className="topnav">
                    <div><Link href='/'><button style={{ backgroundColor: 'violet', border: 'none', fontSize: '20px' }} >Home</button></Link></div>
                    <div><Link href='/students'><button style={{ backgroundColor: 'violet', border: 'none', fontSize: '20px' }}>Students</button></Link></div>
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
                    <div><Link href="/signup"><button style={{ backgroundColor: 'violet', border: 'none', fontSize: '20px' }}>SignUp</button></Link></div>
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
                        <li onClick={() => handleOptionClick("HYDERABAD")} >Hyderabad</li>
                        <li onClick={() => handleOptionClick("BHIMAVARAM")}>Bhimavaram</li>
                    </ul>
                </div>
            }
            {selectedOption && (
                <div className={`selected-option ${selectedOption === 'BHIMAVARAM' ? 'green' : selectedOption === 'HYDERABAD' ? 'blue' : ''}`} >
                    <center>{selectedOption}</center>
                </div>
            )}
        </>

    )
}