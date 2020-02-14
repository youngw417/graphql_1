import React, {useState } from 'react';



const initialState = {
    name: '',
    type: '',
    image: ''
}

const PetForm = ({addPet})=> {

    const [pet, setPet] = useState(initialState);

    const handleChange = (e)=> {
        e.preventDefault();
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }
    console.log(pet.img)

const onSubmit = (e) => {
    e.preventDefault();  
    addPet(pet);
    setPet(initialState);
}


    return(
    <div>

        <form className="col s12">
            <div className='row'>
                <div className="input-field">
                    <input id="name" name="name" value ={pet.name} type="text" onChange={handleChange} />
                    <label htmlFor="name" className='green-text'>Name</label>
                </div>
        
            </div>
            
            <div className='row'>
                <div className ="input-field">
                    <select value={pet.type} className="browser-default" name="type" onChange={handleChange}>
                    <option value='' disabled selected>Choose your option</option>
                    <option value='dog'>Dog</option>
                    <option value='cat'>Cat</option>
                
                    </select>
                    {/* <label>Materialize Select</label> */}
                </div>   
            </div>
            <div className="row">
                <div className="input-field">
                    <input id="img" type="text" name="img" value={pet.img} onChange={handleChange} />
                    <label htmlFor="img" className='green-text'>Image</label>
                </div>
            </div>
            <div className='row'>
                <a href="#!" onClick={onSubmit} className="waves-effect green waves-light btn right" >Submit</a>
            </div>
            
      
        </form>
    </div>
    )
}

export default PetForm;