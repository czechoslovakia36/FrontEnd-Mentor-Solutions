const adviceReducer =(state,action) =>{
    switch(action.type){
        case 'GET_ADVICE':
                return {
                    ...state,
                    advice:action.payload
                }
        case 'INCREMENT_COUNT':
            return{
                count: state.count+1
            }
        default:
            return state
    }


}

export default adviceReducer