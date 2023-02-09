import { useState,createContext,useReducer } from "react";

import  adviceReducer from './AdviceReducer';
const AdviceContext= createContext();





export const AdviceProvider = ({children}) => {

    const initialState= {
        advice:"",
        count:0

    }

    const [state,dispatch]= useReducer(adviceReducer,initialState);



    const getAdvice = async () => {
        const response= await fetch("https://api.adviceslip.com/advice")
        let advice= response["slip"].advice

        dispatch({
            type:'GET_ADVICE',
            payload:advice
        })

    } 

    const counter= () => dispatch({type:'INCREMENT_COUNT'})


    return <AdviceContext.Provider value= {{
        getAdvice,
        counter

    }}>
        {children}
     </AdviceContext.Provider>   
}


export default AdviceContext