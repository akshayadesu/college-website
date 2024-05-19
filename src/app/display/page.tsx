'use client';
import { User } from './types';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from "axios";
import { IoArrowBackCircle } from "react-icons/io5";

interface UserCardProps {
    user: User; 
}
const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
};

const Display = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Getting data");
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                console.log(response.data);
                setData(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="back-box">
                <div className='back-logo'>
                    <Link href="/"><IoArrowBackCircle style={{ fontSize: '2em' }} /></Link>
                </div>
                <h1 style={{marginLeft:'10px'}}>Users Details</h1>
            </div>
            <div>
                <div className="user-grid">
                    {data.slice(0, 25).map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Display;
