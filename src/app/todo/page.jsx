"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../redux/slice';

const page = () => {
    const dispatch = useDispatch("")
    const userData = useSelector((data)=> data )

    console.log(userData)
   
    return (
        <div>
            <h1>User Data Loading Successfully for another Compontis</h1>
            <button onClick={() =>dispatch(fetchApi())}>Log User</button>

            {/* {
               userData.length && userData.map(item =>{
                    <>
                    <h1>{item.name}</h1>
                    </>
                })
            } */}


            {
                userData.length && userData.map((item) =>{
                    <>
                    <h1>{item.name}</h1>
                    </>
                })
            }
        </div>
    );
};

export default page;