import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({residents}) => {
    
    return (

        <>

        <p className='ResidentsP'>Residents</p>

        <ul  className='Residents'>
            {
                
                residents?.map(resident =>(
                    // <p>{resident}</p> 
                    <ResidentInfo residentUrl ={resident}  key={resident}/>
                    // <ResidentInfo residentUrl={resident}/>
                    ))
                    
                }
        </ul>
                </>
    );
};

export default ResidentList;