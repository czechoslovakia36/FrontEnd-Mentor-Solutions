import React, { useState,useContext } from 'react';

import '../assets/css/searchbox.css'


// Importing Icons
import {BiSearchAlt2} from 'react-icons/bi'
import {CiSearch} from 'react-icons/ci'

import DictionaryContext from '../context/DictionaryContext'

import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Searchbox = () => {

    

    const {searchWord,result,setResult}= useContext(DictionaryContext);
    

    const[text,setText]= useState('')

    
    const handleChange = (e) => {
        console.log(e.target.value)
        setText(e.target.value)

      
    }

 const handleSubmit= (e) =>{
    e.preventDefault()

    if(text===''){
        toast.error("Please Enter a Word ")
    }
    else{
        
        searchWord(text)
        setText('')
    }

 }  


    return (

        
       <div className='container2'>
             <ToastContainer 
            
             />

    <form onSubmit={handleSubmit}>
    <input  type="text" 
       placeholder='Search a Word'
       value={text}
       onChange={handleChange}
     
       />


     
    <span> <CiSearch/></span>

   
        
        
    </form> 

    
       </div>
    );
}

export default Searchbox;
