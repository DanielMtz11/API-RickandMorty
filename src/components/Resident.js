import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Resident = ({residentUrl}) => {

    const [recident, setRecident]= useState({});

    useEffect(()=> {
            axios.get(residentUrl)
            .then((res)=>{setRecident(res.data)
                        console.log(res.data)})
    },[])
    return (
        <li>
            {recident.name}
            <img src={recident.image} alt="" />
            
        </li>
        

    );
};

export default Resident;