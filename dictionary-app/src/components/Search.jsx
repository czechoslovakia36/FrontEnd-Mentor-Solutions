import React from 'react'
import '../App.css'

// Importing Component
import {RxDividerVertical} from 'react-icons/rx'
import Dropdown from './Dropdown';
import Toggle from './Toggle';



import { BiBook, BiNoEntry } from "react-icons/bi";
import {BsMoon} from "react-icons/bs";

// IconContext

import { IconContext } from 'react-icons';





export default function search() {
  return (
<div className="container">
    
    <div className="sub-container">
        <div><BiBook size="50px" /></div>  
        
    </div>
    <div className='sub-container'>
      <div><Dropdown/></div>
     <div style={{'fontSize':'1.5rem'}}><RxDividerVertical/></div> 
     <Toggle/>
     <IconContext.Provider value={{size:"1.2em"}}>
     <BsMoon/>
     </IconContext.Provider>
     
    </div>

</div>

  )
}
