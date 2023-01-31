const initialState = {byRating:0,price:0};
const filterReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SORT_BY_PRICE':
            return {...state,sort:action.payload}
        case 'SEARCH_BY_NAME':
            return {...state,searchQuery:action.payload}
        case 'BY_RATING':
                return {...state,byRating:action.payload}
        case 'CLEAR_FILTER':
            return {sort:'',byRating:0,price:0}
        case 'BY_PRICE':
            return {...state,price:action.payload}
        default:
            return state;
    }
}

export default filterReducer