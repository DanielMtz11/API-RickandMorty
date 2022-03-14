import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({residents}) => {


    // const Prev= ()=>{
    //     console.log("Prev")
    // }
    // const Next= ()=>{
    //     console.log("next")
    // }



    // const dataApi = residents?.map( resident =>{
    //     return <ResidentInfo residentUrl ={resident}  key={resident}/>
    // })



    // const itemsPage = 4;
    // const [dataFromApi, setDataFromApi]= useState(residents);


    // const [items, setItems] =useState(residents?.splice(0,itemsPage))
    // console.log(items);

    return (

        <>

        <p className='ResidentsP'>Residents</p>

        <ul  className='Residents'>
            {

            // dataApi 
                residents?.map(resident =>(
                    // <p>{resident}</p>
                    <ResidentInfo residentUrl ={resident}  key={resident}/>
                    // <ResidentInfo residentUrl={resident}/>
                    ))

                }
        </ul>

        {/* <section className='btns'>
            <button onClick={Prev}>Prev</button>
            <button onClick={Next}>Next</button>
        </section> */}
                </>
    );
};

export default ResidentList;