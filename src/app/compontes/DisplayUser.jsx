"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

const DisplayUser = () => {

    const userData = useSelector((data) => data.users)
    const dispatach = useDispatch("")
 
    return (
        <div>
            {
               userData && userData.map((item) => (
                    <div className="bg-sky-500 p-2 d-flex">
                    <h1>{item.name}</h1>
                    <button onClick={() => dispatach(removeUser(item.id))}>Remove</button>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayUser;