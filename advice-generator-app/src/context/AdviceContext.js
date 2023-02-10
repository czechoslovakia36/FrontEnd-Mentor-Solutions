import { useState,createContext } from "react";


export const AdviceContext = createContext();





export const AdviceProvider = ({children}) => {
    const [count,setCount]= useState(0)

        const increment = () => {
            console.log("i was called")
            setCount(count+1)

        }
    return <AdviceContext.Provider  value={{count,increment}}>
        {children}
    </AdviceContext.Provider>
}


export default AdviceContext