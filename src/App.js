import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import componets
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList';
import img from './Assets/Rick.jpg'

function App() {
  const [Ubication , setUbication]=useState({})
    useEffect(()=>{
        const random = Math.floor(Math.random()*126)
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then((res)=>{setUbication(res.data)})
    },[])
   
  return (
    <div className='app'>
      <img className='img-Fond' src={img} alt="" />
      <h1 className='title'>Rick and Morty wiki</h1>
            <SearchBox setUbication = {setUbication}/>
            <LocationInfo
                name={Ubication.name}
                type={Ubication.type}
                dimension={Ubication.dimension}
                population={Ubication.residents?.length}
                />
            {/* <p>{Ubication.name}</p> */}
            <ResidentList residents ={Ubication.residents} />



        </div>

  );
}

export default App;
