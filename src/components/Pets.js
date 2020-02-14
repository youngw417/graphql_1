import React from 'react';
import PetDetails from './PetDetails';

const Pets = ({pets})=> {
    return(
        <div className='row'>
            { pets && pets.map((pet,index) => {
                return (
                <div className = "col s12 m6">
                <PetDetails key={index} pet={pet}/>
                </div>)
            })}
        </div>
    )
}

export default Pets;