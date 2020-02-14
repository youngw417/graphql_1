


export default (state, action) => {

    switch(action.type) {
        case 'GET_PETS':
            return {
               
                pets: action.payload
            };
        case 'ADD_PET':
            return {
                pets: [...state.pets, action.payload]
            }
        default:
            return state;

    }

}