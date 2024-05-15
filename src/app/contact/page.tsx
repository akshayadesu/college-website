import React from 'react';
import '../styles/global.css';
import Link from 'next/link';
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const ContactPage = () => {
  return (
    <div>
      <div className='about-grid'>
        <div className='back-logo'><Link href="/"><IoArrowBackCircle style={{ fontSize: '2em' }} /></Link></div>
        <div><h1>Contact Us</h1></div>
      </div>
      <div className='contact-box'>
        <h2>SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)</h2>
        <h4>APPROVED BY A.I.C.T.E & AFFILIATED TO JNTUK, KAKINADA</h4>
        <p>Counseling Code - VISW</p>
        <p>Vishnupur, BHIMAVARAM - 534202</p>
        <p>West Godavari District, Andhra Pradesh, India.</p>
        <ul style={{ listStyleType: 'none',paddingLeft:'7px' }}>
          <li><span style={{ marginRight: '5px' }}><FaPhone /></span>Phone: 08816 - 250864</li>
          <li><span style={{ marginRight: '5px' }}><FaFax /></span>Fax : 08816 - 250099</li>
          <li><span style={{ marginRight: '5px' }}> <MdEmail /></span>Email : info@svecw.edu.in, principal@svecw.edu.in</li>
        </ul>
        <h2>SRI VISHNU EDUCATIONAL SOCIETY</h2>
        <p>Plot No. 7 & 8,</p>
        <p>Nagarjuna Hills,</p>
        <p>Punjagutta Main Road, Hyderabad - 500082.</p>
        <p>Telangana, India</p>
        <ul style={{ listStyleType: 'none',paddingLeft:'7px' }}>
          <li><span style={{ marginRight: '5px' }}><FaPhone /></span>Phones : 040 - 40334899, 40334897, 40334866, 40334829</li>
          <li><span style={{ marginRight: '5px' }}><FaFax /></span>Fax : 40334818, 40334848</li>
        </ul>
      </div>
      
    </div>
  );
};

export default ContactPage;
