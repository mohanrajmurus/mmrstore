const initialState = null


const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'SET_USER':
            return {userName : action.payload.displayName,
                email: action.payload.email,
                photoUrl: action.payload.photoURL,
                phoneNumber: action.payload.phoneNumber
            };
        case 'REMOVE_USER':
            return null;
        default:
            return state;
    }
}

export default userReducer;