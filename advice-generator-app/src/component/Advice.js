import React from 'react'

import '../App.css'

import divider from '../assets/images/pattern-divider-mobile.svg'
import diceIcon from '../assets/images/icon-dice.svg'
import { ToastContainer } from 'react-toastify'


import AdviceContext from '../context/AdviceContext.js'
import { useContext } from 'react'




// Imports
// import getAdvice from '../helper/requestCall'

export default function Advice(){

    const {count,fetchAdvice,advice} = useContext(AdviceContext);
   
    return(
       <>
       <ToastContainer
       position='top-center'
       autoClose={2000}
       
       />
        <div className='h-2/5 flex flex-col justify-center items-center mt-8 '>
    <div className='gap-9 bg rounded-xl w-5/12 flex flex-col justify-center items-center h-96 '>
        <p className="text-neon fonts"> ADVICE #{count}</p>
        <div>
          <p className='text-center fonts mb-7 ' style={{color:'white'}}>"{advice}"</p>
        </div>
        <div>
           <img src ={divider} className="w-96 -mt-9" />
        </div>
    </div>
    <div className='flex flex-row justify-center items-center bg-neon -mt-2 w-12 h-16 rounded-full'>
       <button onClick={fetchAdvice}> <img id="diceIcon" src={diceIcon} /></button>
    </div>
       
    </div>
    </>
    )
  
}