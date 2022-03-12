import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';
import ListRick from './ListRick';


const Consumo = () => {

const [Ubication , setUbication]=useState({})

    useEffect(()=>{
        let random = Math.floor(Math.random()*126)
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then((res)=>{setUbication(res.data)
                                })


    },[])
    

    return (
        <div>
            <SearchBox setUbication = {setUbication}/>
            <p>{Ubication.name}</p>
            <ListRick residents ={Ubication.residents} />



        </div>
    );
};

export default Consumo;