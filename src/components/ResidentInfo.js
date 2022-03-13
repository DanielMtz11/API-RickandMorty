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
            <div>
            {recident.name}
            <p> {recident?.status}</p>
                <p>origin </p>
                <p>{recident.origin?.name}</p>
                <p>episodes where appear </p>
                <p> {recident.episode?.length}</p>

            </div>
            
        </li>
        

    );
};

export default ResidentInfo;