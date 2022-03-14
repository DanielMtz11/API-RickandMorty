import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect} from 'react';

const ResidentInfo = ({residentUrl}) => {

    const [recident, setRecident]= useState({});

    useEffect(()=> {
            axios.get(residentUrl)
            .then((res)=>{setRecident(res.data)
                        // console.log(res.data)
                    })
    },[residentUrl])


    if(recident?.status==="Alive"){

        return(
            <li className='flex'>

            <div>
            <img  className='ResidentImg' src={recident.image} alt="" />
            </div>
            <div className='ResidentsInfo'>
            <h2>{recident.name}</h2> 
            <p> <span className='circle' style={ {background: "#379956"} }></span> {recident?.status}</p>
                <p className='p-diferent'>origin </p>
                <p>{recident.origin?.name}</p>
                <p className='p-diferent'>episodes where appear </p>
                <p> {recident.episode?.length}</p>

            </div>
            
        </li>

        )
        }

        if(recident?.status === "Dead"){
            return(
                <li className='flex'>

                <div>
                <img  className='ResidentImg' src={recident.image} alt="" />
                </div>
                <div className='ResidentsInfo'>
                <h2>{recident.name}</h2> 
                <p> <span className='circle' style={ {background: "tomato"} }></span> {recident?.status}</p>
                    <p className='p-diferent'>origin </p>
                    <p>{recident.origin?.name}</p>
                    <p className='p-diferent'>episodes where appear </p>
                    <p> {recident.episode?.length}</p>
    
                </div>
                
            </li>    

            )
        }

    return (
        <li className='flex'>

            <div>
            <img  className='ResidentImg' src={recident.image} alt="" />
            </div>
            <div className='ResidentsInfo'>
            <h2>{recident.name}</h2> 
            <p> <span className='circle' style={ {background: "rgb(27, 24, 24)"} }></span> {recident?.status}</p>
                <p className='p-diferent'>origin </p>
                <p>{recident.origin?.name}</p>
                <p className='p-diferent'>episodes where appear </p>
                <p> {recident.episode?.length}</p>

            </div>
            
        </li>
        

    );
};

export default ResidentInfo;