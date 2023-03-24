
import React from 'react';

import validate from '../helper/validateData';

import ChoosePlan from './ChoosePlan';

import { Link } from 'react-router-dom';

const SelectPlan = () => {
       
    return (

        

        <>
        <div className='main-container flex justify-center align-center'>
            <div className='container flex  pad-2'>
                {/* [Left Part] */}
                <div className='w-30   color-white flex bg-image justify-center'>
                       <div className='w-80   flex flex-col pad-1'>
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
                                          <div className='flex circle text-center justify-center align-center  bg-light-blue font-bold'>
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

        <div className='flex flex-col justify-between w-80 ml-100'>
                <div className='flex  flex-col w-100 ml-100   color-marine-blue  '> {/*Parent*/}
                    <div className=' red-green w-100 flex  flex-col'>
                        
                        
                        <div >
                            <div className='header'>
                            <h1>Select your plan</h1>
                            <span style={{color:'grey'}}>You have option of monthly or yearly billing</span>
                        </div>
                        {/* Select Option */}
                     <ChoosePlan/>
                            
                                
                    </div>
                       
                        
                       
                      
                      
                       
                    

                        {/* <span className='block font-xxl fw-700 self-center'>Personal info</span> */}
                        

                    </div>

                  
                   

                    
                </div>


                <div className='flex flex-row justify-between'>
                    <div className='w-100'>
                    <button onClick={validate} className='btn '><Link to="/" className='linkbutton' >Go Back</Link></button>
  
                    </div>
                <div className='mr-100 self-end'>
                            <button onClick={validate} className='btn '><Link to="/addon" className='linkbutton' >Next</Link></button>
                    </div>

                </div>
                 
               
                </div>
                
            </div>
        </div>
           
        </>
    );
}

export default SelectPlan;
