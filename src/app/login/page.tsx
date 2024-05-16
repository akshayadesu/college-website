'use client';
import React, { useState } from "react";
import Link from 'next/link';
import { IoArrowBackCircle } from "react-icons/io5";
const Login = () => {
    const [uname, setUname] = useState('')
    const [pass, setPass] = useState('')
    const [valid, setValid] = useState(false);
    const handleUname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUname(e.target.value);
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
    }
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (uname.length >0 && pass.length > 0) {
            setValid(true);
            console.log(uname);
            console.log(pass);
        }
        else {
            setValid(false);
           
        }
    }
    return (
        <>
            <div className='back-logo'><Link href="/"><IoArrowBackCircle style={{ fontSize: '2em' }} /></Link></div>
            <center>
                <div className='login-box' style={{ marginTop: '30px' }}>
                    <form action="" className='login-form' onSubmit={handleSubmit}>
                        <h3 style={{ textAlign: 'center' }}>LOGIN-FORM</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Username:</th>
                                    <td><input type="text" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={uname} onChange={handleUname} />
                                    </td>
                                </tr>
                                <tr>
                                    <th style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'normal' }}>Password :</th>
                                    <td><input type="password" style={{ width: '300px', padding: '8px', fontSize: '16px' }} value={pass} onChange={handlePassword} />
                                    </td>
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
            {valid &&
                <center><p style={{ color: 'green' }}>Login successfull</p></center>
            }
        </>
    )

}
export default Login;