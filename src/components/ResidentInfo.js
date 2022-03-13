import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

const ResidentInfo = ({residentUrl}) => {

    const [recident, setRecident]= useState({});

    useEffect(()=> {
            axios.get(residentUrl)
            .then((res)=>{setRecident(res.data)
                        console.log(res.data)})
    },[])
    return (
        <li className='flex'>

            <div>
            <img  className='ResidentImg' src={recident.image} alt="" />
            </div>
            <div className='ResidentsInfo'>
           <h2>{recident.name}</h2> 
            <p> {recident?.status}</p>
                <p className='p-diferent'>origin </p>
                <p>{recident.origin?.name}</p>
                <p className='p-diferent'>episodes where appear </p>
                <p> {recident.episode?.length}</p>

            </div>
            
        </li>
        

    );
};

export default ResidentInfo;