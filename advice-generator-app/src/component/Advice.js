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

    const {count,increment} = useContext(AdviceContext);
   
    return(
       <>
       <ToastContainer
       position='top-center'
       autoClose={2000}
       
       />
        <div className='h-3/5 flex flex-col justify-center items-center '>
    <div className='gap-12 bg rounded-xl w-5/12 flex flex-col justify-center items-center h-96 '>
        <p className="text-neon"> Advice #{count}</p>
        <div>
          <p className='text-center'>"It is easy to sit up and take notice ,what's difficult is getting up and taking action"</p>
        </div>
        <div>
           <img src ={divider} className="w-96" />
        </div>
    </div>
    <div className='flex flex-row justify-center items-center bg-neon -mt-8 w-16 h-16 rounded-full'>
       <button onClick={increment}> <img id="diceIcon" src={diceIcon} /></button>
    </div>
       
    </div>
    </>
    )
  
}