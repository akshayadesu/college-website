
import React from 'react';
import '../styles/global.css';
import Link from 'next/link';
import { IoArrowBackCircle } from "react-icons/io5";
const AboutPage = () => {
  return (
    <div>
      <div className='about-grid'>
        <div className='back-logo'><Link href="/"><IoArrowBackCircle style={{ fontSize: '2em' }} /></Link></div>
        <div><h1>About Us</h1></div>
      </div>
      <div className='about-content'>
        <h2>About SVECW</h2>
        <p>Shri Vishnu Engineering College For Women is located in Bhimavaram - the central part of Coastal Andhra.The area generally known for its commercial activities has recently established itself as a Center for Academics.
          The campus is located in Vishnupur which is 3 km from Bhimavaram on Tadepalligudem Road. <br /><br />
          The campus spreads around 100 acres landscape known for its salubrious climate and presents congenial atmosphere to pursue higher studies.
          Our infrastructure is vibrant in nature because of constant attempt to maintain pace with the development available. The infrastructure acts as a facilitator for the effective delivery of our curriculum.
          Apart from the common central facilities the colleges has well-equipped laboratories, lecture halls, drawing and seminar halls etc.
          The organization provides adequate infrastructural support for all sports activities which provide students physical fitness and personality development inturn cultivate in them sportsman spirit, team spirit, leadership and talent.
        </p>
        <div>
          <h3>Vision, Mission & Values (VMV)</h3>
          <h4>Vision</h4>
          <p>Transform the society through excellence in Education, Community empowerment and sustained Environmental protection.</p>
          <h4>Mission</h4>

          <ul>
            <li>To achieve Academic excellence through innovative learning practices</li>
            <li>To instill self confidence among rural students by supplementing with co-curricular and extra-curricular activities</li>
            <li>To inculcate discipline and values among students</li>
            <li>To establish centers for Institute Industry partnership</li>
            <li>To extend financial assistance for the economically weaker sections</li>
            <li>To create self employment opportunities and skill up gradation</li>
          </ul>

          <h4>Values - Quality Policy</h4>

          <ul>
            <li>We strive for excellence in all that we do in order to model success for our students</li>
            <li>We focus on students success and satisfaction and meeting the needs of the community</li>
            <li>We take pride in the quality of our organization and work, and we value, originality, integrity, consistency, and attention to detail</li>
            <li>We stay abreast of ever-changing youth culture, emerging communication technologies and design trends</li>
            <li>We create an innovative environment for students and staff to develop an integrated personality</li>
            <li>Inclusive community projects</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
