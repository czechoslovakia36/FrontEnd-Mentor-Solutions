import { useState,createContext } from "react";


const AdviceContext = createContext();


// const [user,setUser]= useState(0)


export const AdviceProvider = ({children}) => {
    return <AdviceContext.Provider  value="5">
        {children}
    </AdviceContext.Provider>
}


export default AdviceContext