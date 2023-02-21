import { createContext,useReducer,useState } from "react";
import axios, { Axios } from 'axios'

import dictionaryReducer from "./DictionaryReducer";
const DictionaryContext = createContext()


// const DICTIONARY_URL= process.env.DICTIONARY_URL

// const DICTIONARY_URL= "https://api.dictionaryapi.dev/api/v2/entries/en/"


axios.defaults.baseURL= "https://api.dictionaryapi.dev/api/v2/entries/en/"

export const DictionaryProvider = ({children }) => {



    const[result,setResult]= useState(false)

    const[response,setResponse]= useState(null)

    const [word,setWord]= useState('')

    const [phonetic,setPhonetic]= useState('')

    const [definitions,setDefinitions]= useState([]);

    const [synonyms,setSynonyms]= useState([]);

    const [definitionsVerb,setDefinitionsVerb]= useState([])

    const [url,setUrl]= useState('')

    const [audioUrl,setAudioUrl]= useState('')

    





   

    // Get details of the words from the api

    const searchWord = async (text) =>{

        var audioUrl;
        var definitionVerb;

        try {
            const params= text
            const response = await axios.get(`/${params}`)


            let [response1, response2]= response.data


            let {word,phonetic,phonetics,meanings,sourceUrls}= response1


            if (phonetics[2]===undefined){
                audioUrl=phonetics[1]['audio']
            }
            else{
                audioUrl=phonetics[2]['audio']
            }

            let [noun,verb,interjection]= meanings


            if(verb===undefined) {
                let{meanings}= response2
                definitionVerb=meanings[0]['definitions']
                
            }
            else{
                let {definitions:NewVerb,synonyms:synonymsVerb}= verb
                definitionVerb=NewVerb
               
            }


            

           
           

            let {definitions,synonyms}=noun

    
            if (response.status==200){
                    
                // console.log(response.data)

                setAudioUrl(audioUrl)

                setUrl(sourceUrls[0])

                  
                setDefinitionsVerb(definitionVerb)

                setWord(word)
              
                setResult(true)

                setPhonetic(phonetic)

                setDefinitions(definitions)

                setSynonyms(synonyms)

                
                
                

                  
           
            
               
            
            
            }
            
        } catch (error) {
            console.log(error)
        }

        // const params= new URLSearchParams({
        //     word:text
        // })
      
        
        
        
    
}
        return <DictionaryContext.Provider  value={
            {searchWord,result,response,word,phonetic,setResult,definitions,synonyms,definitionsVerb,url,audioUrl}}>
        {children}
        </DictionaryContext.Provider>

}


export default DictionaryContext