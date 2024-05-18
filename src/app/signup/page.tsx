'use client';
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import axios from "axios";
import Link from 'next/link';
import { IoArrowBackCircle } from "react-icons/io5";
const SignUp = () => {
    const router = useRouter()
    const [valid, setValid] = useState(false);
    const [formData, setFormData] = useState({ id: '', name: '', email: '', phone: '', address: '', dob: '', course: '' })
    const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormData((prevdata) => ({ ...prevdata, [name]: value }))
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

        axios.post('http://localhost:3003/signup', { formData })
            .then((result) => {
                const data = result.data;
                if (data[0] === "valid") {
                    console.log("Data is successfully stored");
                    setValid(true);
                    console.log(data[1]);
                    router.push('/')
                } else {
                    console.log("Insertion failed:", data);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    return (
        <>
            <div className='back-logo'><Link href="/"><IoArrowBackCircle style={{ fontSize: '2em' }} /></Link></div>
            <center>
                <div className="signup-box">
                    <h2>SignUp-Page</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Id:</th>
                                    <td><input type="text" name="id" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={formData.id} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Name:</th>
                                    <td><input type="text" name="name" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={formData.name} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Email:</th>
                                    <td><input type="email" name="email" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={formData.email} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Phone Number:</th>
                                    <td><input type="tel" name="phone" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={formData.phone} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Address:</th>
                                    <td><textarea name="address" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={formData.address} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>D.O.B:</th>
                                    <td><input type="date" name="dob" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={formData.dob} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Course:</th>
                                    <td><input type="text" name="course" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={formData.course} onChange={handleInput} /></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td><button style={{ backgroundColor: 'green', color: 'white', borderRadius: '5px', width: '80px', height: '35px' }}>Submit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </center>
            {valid &&
                <center><p style={{ color: 'green' }}>Signed-Up successfully</p></center>
            }
        </>
    )
}
export default SignUp;
