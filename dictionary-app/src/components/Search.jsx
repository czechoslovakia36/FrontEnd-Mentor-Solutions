import React from 'react'
import '../App.css'

// Importing Component

import {RxDividerVertical} from 'react-icons/rx'

import Dropdown from './Dropdown';


import { BiBook } from "react-icons/bi";





export default function search() {
  return (
<div class="container">
    
    <div className="sub-container">
        <div><BiBook size="50px" /></div>  
        
    </div>
    <div className='sub-container'>
      <div><Dropdown/></div>
     <div style={{'font-size':'1.5rem'}}><RxDividerVertical/></div> 

    </div>
   
 
   
    
 
       
</div>
  )
}
