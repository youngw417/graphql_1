import React, { useState, useReducer, useEffect } from 'react';
import Pets from './Pets';
// import { Link } from 'react-router-dom';
import PetForm from './PetForm';
import Reducer from './reducer';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const MY_PETS = gql`
    query myPets{ 
        pets:{
            id
            name
            type
            img
        }
    }
  `  
// const initialState = {"pets": [
//     {
//       "name": "Waffle",
//       "type": "dog",
//       "img": "https://placedog.net/200/200",
//       "id": 2
//     },
//     {
//       "name": "pooka",
//       "type": "dog",
//       "img": "https://placedog.net/122/132",
//       "id": 3
//     },
//     {
//       "name": "batman",
//       "type": "dog",
//       "img": "https://placedog.net/540/320",
//       "id": 4
//     },
//     {
//       "name": "batman",
//       "type": "dog",
//       "img": "https://placedog.net/540/320",
//       "id": 5
//     }
//   ]}



const Home = ()=> {

    const [toggle, setToggle ] = useState(false);
    const [state, dispatch] = useReducer(Reducer, []);
    const { data, loading, error } = useQuery(MY_PETS);
    useEffect(()=> {
        dispatch({type: 'GET_PETS', payload: data.pets});
    }, [])
    
    // console.log('data', data);
    const loadForm = () => {
        setToggle(!toggle);
    }

    const addPet = (pet) => {
        dispatch({type:'ADD_PET', payload: pet})
    }
    console.log('state', state);
    return(
    
        <div className='grid-2'>
            <div className="grid-item blue-grey lighten-5" >
                <h3 className="blue-text lighten-2">Pets</h3>
                <Pets pets={state.pets} />
               
            </div>
            <div className="grid-item">
                <div onClick ={loadForm} className='btn'>Pet Form</div>
                {toggle && <PetForm addPet ={addPet} /> }
            </div>
            
        </div>

  
    )
}



export default Home;