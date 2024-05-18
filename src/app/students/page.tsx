'use client';
import { Student } from './types'; 
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios";
import { IoArrowBackCircle } from "react-icons/io5";
const StudentDetails = () => {
    const [students, setStudents] = useState<Student[]>([]);
    useEffect(() => {
        axios.get('http://localhost:3003/students')
            .then((response) => {
                setStudents(response.data);
                console.log(students)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className="back-box">
                <div className='back-logo'><Link href="/"><IoArrowBackCircle style={{ fontSize: '2em' }} /></Link></div>
                <div><h1> Details of students</h1></div>
            </div>
            <div className="students-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone no.</th>
                            <th>Address</th>
                            <th>D.O.B</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.dob}</td>
                                <td>{item.course}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default StudentDetails;