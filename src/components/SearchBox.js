import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const SearchBox = ({setUbication}) => {

    const [ SearchByID, setSearchByID] =useState('')

    const Loking = ()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${SearchByID}`)
        .then((res)=>{setUbication(res.data)
                        console.log(res.data)})

    }


    return (
        <div>
            <input type="text"
            onChange={e =>setSearchByID(e.target.value)} 
            value={SearchByID}/>

            <button onClick={Loking}>SearchByID</button>
            
            <p>{SearchByID.name}</p>
        </div>
    );
};

export default SearchBox;