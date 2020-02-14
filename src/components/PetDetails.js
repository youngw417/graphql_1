import React from 'react';

const PetDetails = ({pet}) => {

    return(
  
    <div className="card">
        <div className="card-image">
          <img src={pet.img} alt="pet" />
          <span className="card-title">{pet.name}</span>
        </div>
        <div className="card-content">
          <p>Pet Type: {pet.type}</p>
        </div>
        
    </div>
            
            
    
    )
}

export default PetDetails;