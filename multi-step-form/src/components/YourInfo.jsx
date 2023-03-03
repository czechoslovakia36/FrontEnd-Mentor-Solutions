import React from 'react';
import validate from '../helper/validateData';

import {Link} from 'react-router-dom'

import '../App.css'

const YourInfo = () => {

    
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
                                          <div className='flex circle text-center justify-center align-center '>
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
                <div className='  flex  flex-col w-80 ml-100  color-marine-blue  '>
                    <div className=' flex flex-col m-auto'>
                        
                        
                        <div >
                            <div className='header'>
                            <h1>Personal Info</h1>
                            <span style={{color:'grey'}}>Please provide your name,email address, and phone number</span>
                            </div>
                                <label>Name <span className='hide float-right font-bold error'>This Field is Required </span></label>
                                <input type='text' id="name"></input>
                                <label>Email Address <span className='hide float-right font-bold error'>This Field is Required </span></label>
                                <input type='text' id="email"></input>
                                <label >Phone Number  <span className='hide float-right font-bold error'>This Field is Required </span></label>
                            
                                <input type='text' id="phonenumber" placeholder='e.g. +1 234 567 890'></input>
                            
                                
                        </div>
                       
                        
                       
                      
                      
                       
                    

                        {/* <span className='block font-xxl fw-700 self-center'>Personal info</span> */}
                        

                    </div>

                  
                    
                    <div className='mr-100 self-end '>
                            
                            <button onClick={validate} className='btn '><Link to="/selectplan" className='linkbutton' onClick={validate}>Next</Link></button>
                         </div>

                    
                </div>
            </div>
        </div>
    
        </>
    );
}

export default YourInfo;
