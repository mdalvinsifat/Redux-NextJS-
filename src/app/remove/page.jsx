"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

const page = () => {
    const dispatch = useDispatch()
    const userData  = useSelector((data) => data.users)
    return (
        <div>
            <h1>Remove Page </h1>
          {
            userData.map(item =>(
                <>
                <h1>{item.name}</h1>
                <button onClick={() => dispatch(removeUser(item.id))}>Remove User</button>
                </>
                
            ))
          }
        </div>
    );
};

export default page;