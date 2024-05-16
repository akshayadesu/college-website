'use client';
import React, { useState } from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import Link from 'next/link';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    const handleUname=(e)=>{
        setUsername(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    } 
    const handleSubmit=(e)=>{
        e.preventDefault();
        let formIsValid = true;
        let errors = {};
        if (!username) {
            formIsValid = false;
            errors.username = 'Username is required';
        }
        if (!password) {
            formIsValid = false;
            errors.password = 'Password is required';
        }
        setErrors(errors);
        if (formIsValid) {
            console.log('Username:', username);
            console.log('Password:', password);
        }
    }
    return (
        <div>
            <div className='back-logo'><Link href="/"><IoArrowBackCircle style={{ fontSize: '2em' }} /></Link></div>
            <center>
            <div className='login-box' style={{marginTop:'30px'}}>
                <form action="" className='login-form' onSubmit={handleSubmit}>
                    <h3 style={{textAlign:'center'}}>LOGIN-FORM</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Username:</th>
                                <td><input type="text" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={username} onChange={handleUname} />
                                {errors.username && <div style={{ color: 'red', fontSize: '12px' }}>{errors.username}</div>}</td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Password :</th>
                                <td><input type="password" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={password} onChange={handlePassword} />
                                {errors.password && <div style={{ color: 'red', fontSize: '12px' }}>{errors.password}</div>}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td><button style={{ backgroundColor: 'green', color: 'white', borderRadius: '5px', width: '80px', height: '35px' }}>Login</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            </center>
            
        </div>
    );
};

export default Login;