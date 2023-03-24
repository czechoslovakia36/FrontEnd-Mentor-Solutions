import React from 'react';

import { useEffect } from 'react';

import validate from '../helper/validateData';

import { Link } from 'react-router-dom';

import '../assets/css/global.css'

import '../assets/css/addon.css'

import { useState } from 'react';


import { useContext } from 'react';

import stepsContext from '../Context/stepsContext/StepContext'



const AddOn = () => {

    // const {initialStep} = useContext(stepsContext);

    let addOns= new Array();


     function handleOnChange(e){


        

        if(e.target.checked===true){
            if (!(addOns.includes(e.target.value))){
                addOns.push(e.target.value)
            }
        }

        if(e.target.checked===false){
            addOns.pop(e.target.value)
        }
        
    
      

        console.log(addOns.sort())

    }

    return (
        <>
    
         <div className='main-container flex justify-center align-center'>
            <div className=' container flex  pad-2'>
                {/* [Left Part] */}
                <div className='w-30  color-white flex bg-image justify-center'>
                       <div className='w-80  flex flex-col pad-1'>
                                <div className='step'>
                                    <div className='flex align-center'>
                                          <div className='flex circle text-center justify-center align-center '>
                                               <p className='block'>1</p>
                                               
                                               
                                          </div>
                                          <div className='margin-20px'><span className='color-light-blue font-small'>STEP 1 </span><br></br><span className='fw-700 mt-10 block'>YOUR INFO</span></div>
                                    </div>
                                 
                                </div>
                                <div className='step'>
                                    <div className='flex align-center'>
                                          <div className='flex circle text-center justify-center align-center '>
                                               <p className='block'>2</p>
                                               
                                               
                                          </div>
                                          <div className='margin-20px'><span className='color-light-blue font-small'>STEP 2 </span><br></br><span className='fw-700 mt-10 block'>SELECT PLAN</span></div>
                                    </div>
                                 
                                </div>
                                <div className='step'>
                                    <div className='flex align-center'>
                                          <div className='flex circle text-center justify-center align-center  bg-light-blue font-bold '>
                                               <p className='block'>3</p>
                                               
                                               
                                          </div>
                                          <div className='margin-20px'><span className='color-light-blue font-small'>STEP 3 </span><br></br><span className='fw-700 mt-10 block'>ADD-ONS</span></div>
                                    </div>
                                 
                                </div>
                                <div className='step'>
                                    <div className='flex align-center'>
                                          <div className='flex circle text-center justify-center align-center '>
                                               <p className='block'>4</p>
                                               
                                               
                                          </div>
                                          <div className='margin-20px'><span className='color-light-blue font-small'>STEP 4 </span><br></br><span className='fw-700 mt-10 block'>SUMMARY</span></div>
                                    </div>
                                 
                                </div>
                               
                          
                       </div>
                </div>
                {/* [Right Part] */}
                <div className='w-80 ml-100  flex flex-col color-marine-blue justify-between  '>
                         {/* Right Upper  */}
                         <div> 
                         <div className='header'>
                                <h1>Pick add-ons</h1>
                                <span style={{color:'grey'}}>Add-ons helps enhance your gaming experience.</span>
                            </div>
                                {/* Multi select  */}
                            <div >
                                <div className='flex flex-col  w-80'>
                                    <div className='selectbox flex flex-row justify-between align-center mt-10'>
                                               {/* 1st */}
                                                <div className='flex align-center '>
                                                    <input  className=" mr-20 checkbox"  onChange={handleOnChange}  type='checkbox' id="onlineservice" name="onlineservice" value="1"/>
                                                        
                                                    <div>
                                                    <p> <span className='color-marine-blue font-large font-bold'>Online Service</span> <br></br><span className='color-grey'>Access to multiplayer games</span></p>
                                                        </div> 
                                                </div>

                                                <div>
                                                    <span>+$1/mo</span>
                                                </div>

                                    
                                              
                                            
                                                 
                                          
                                         
                                    </div>
                                    <div className='selectbox flex flex-row justify-between align-center mt-20'>
                                               {/* 2nd */}
                                                <div className='flex align-center'>
                                                    <input  className="test-red mr-20 checkbox"   onChange={handleOnChange}  type='checkbox' id="largestorage" name="largestorage" value="2"/>
                                                        
                                                    <div>
                                                    <p> <span className='color-marine-blue font-large font-bold'>Large storage</span> <br></br><span className='color-grey'>Extra 1TB of cloud save</span></p>
                                                        </div> 
                                                </div>

                                                <div>
                                                    <span>+$2/mo</span>
                                                </div>

                                    
                                              
                                            
                                                 
                                          
                                         
                                    </div>
                                    <div className='selectbox flex flex-row justify-between align-center mt-30'>
                                               {/* 3rd */}
                                                <div className='flex align-center '>
                                                    <input height="100" width="38" className=" mr-20 checkbox"  onChange={handleOnChange}   type='checkbox' id="customizeprofile" name="customizeprofile" value="3"/>
                                                        
                                                    <div>
                                                    <p> <span className='color-marine-blue font-large font-bold'>Customizable profile</span> <br></br><span className='color-grey'>Custom theme on your profile</span></p>
                                                        </div> 
                                                </div>

                                                <div>
                                                    <span>+$2/mo</span>
                                                </div>

                                    
                                              
                                            
                                                 
                                          
                                         
                                    </div>

                                    
                                    
                               
                                 

                                </div>

                   
                            </div>
                         </div>

                        {/* Right Lower */}
                         <div>
                         <div className='flex flex-row justify-between align-end'>
                    <div className='w-100'>
                    <button onClick={validate} className='btn '><Link to="/selectplan" className='linkbutton' >Go Back</Link></button>
  
                    </div>
                <div className='mr-100 self-end'>
                            <button onClick={validate} className='btn '><Link to="/summary" className='linkbutton' >Next</Link></button>
                    </div>
                </div>
                         </div>


                         



                       

                </div>

                
             
            </div>
        </div>
        </>
    );
}

export default AddOn;
