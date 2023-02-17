import { createContext,useReducer,useState } from "react";
import axios, { Axios } from 'axios'

import dictionaryReducer from "./DictionaryReducer";
const DictionaryContext = createContext()


// const DICTIONARY_URL= process.env.DICTIONARY_URL

// const DICTIONARY_URL= "https://api.dictionaryapi.dev/api/v2/entries/en/"


axios.defaults.baseURL= "https://api.dictionaryapi.dev/api/v2/entries/en/"

export const DictionaryProvider = ({children }) => {

    const[result,setResult]= useState()
   

    // Get details of the words from the api

    const searchWord = async (text) =>{

        // const params= new URLSearchParams({
        //     word:text
        // })
        const params= text
        const response = axios.get(`/${params}`)
        response.then(()=>{
            console.log(response)
            setResult(true)
        }
        
        )
        .catch((error)=>{
            setResult(false)
        })
}
        return <DictionaryContext.Provider  value={{searchWord,result,setResult}}>
        {children}
        </DictionaryContext.Provider>

}


export default DictionaryContext