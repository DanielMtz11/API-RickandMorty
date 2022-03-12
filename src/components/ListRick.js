import React from 'react';
import Resident from './Resident';

const ListRick = ({residents}) => {
    
    return (
        <ul>
            {

                residents?.map(resident =>(
                        // <p>{resident}</p> 
                        <Resident residentUrl ={resident}  key={resident}/>
                        // <Resident residentUrl={resident}/>
                ))
                
            }
        </ul>
    );
};

export default ListRick;