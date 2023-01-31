const initialState = []
const cartReducer = (state= initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state,{...action.payload,qty:1}];
        case 'REMOVE_FROM_CART':
            //console.log(state);
         return (state.filter(item => {
            //console.log(item.id);
            return item.id!== action.payload.id;
         }))
        case 'INCREASE_QTY':
            return (state.filter(item => item.id === action.payload.id?item.qty =action.payload.qty+1:item.qty))
            case 'DECREASE_QTY':
                return (state.filter(item => item.id === action.payload.id?item.qty =action.payload.qty -1:item.qty))
        default:
            return state
    }
}

export default cartReducer;