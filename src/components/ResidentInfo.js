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
        <li>
            {recident.name}
            <img src={recident.image} alt="" />
            
        </li>
        

    );
};

export default ResidentInfo;