"use client"
import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addUser } from '../redux/slice';
import Link from 'next/link';
const AddUser = () => {
    const [name , setName ] = useState("")

    const dispatch = useDispatch()

    const UserDispatch = () =>{
        dispatch(addUser(name))
    }
    
    return (
        <div className='bg-black text-white p-6'>
            <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)}   />
            <button onClick={UserDispatch}>Add User</button>
            <Link href={"/remove"}>
                View Remove User 
            </Link>
        </div>
    );
};

export default AddUser;