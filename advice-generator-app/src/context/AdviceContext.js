import { useState,createContext, useEffect } from "react";


export const AdviceContext = createContext();





export const AdviceProvider = ({children}) => {

    const[advice,setAdvice]=useState("")

    const [count,setCount]= useState(0)

    useEffect(() => {
        fetchAdvice();
    },[])

    const fetchAdvice = async () => {
        const response = await fetch('https://api.adviceslip.com/advice')
        if(response.status==200){
            setCount(count+1)
        }
        const data=  await  response.json()
        const advice= data["slip"]["advice"]

        setAdvice(advice)
        

    }

    

        // const increment = () => {
        //     // console.log("i was called")
        //     setCount(count+1)

        // }
    return <AdviceContext.Provider  value={{count,fetchAdvice,advice}}>
        {children}
    </AdviceContext.Provider>
}


export default AdviceContext