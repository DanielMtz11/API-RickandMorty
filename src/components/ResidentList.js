import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({residents}) => {
    
    return (
        <ul>
            {

                residents?.map(resident =>(
                        // <p>{resident}</p> 
                        <ResidentInfo residentUrl ={resident}  key={resident}/>
                        // <ResidentInfo residentUrl={resident}/>
                ))
                
            }
        </ul>
    );
};

export default ResidentList;