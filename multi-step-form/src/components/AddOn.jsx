import React from 'react';

import validate from '../helper/validateData';

import { Link } from 'react-router-dom';

import '../assets/css/global.css'

const AddOn = () => {
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
                <div className='test-green w-80 ml-100  flex flex-col color-marine-blue  '>
                            <div className='header'>
                                <h1>Pick add-ons</h1>
                                <span style={{color:'grey'}}>Add-ons helps enhance your gaming experience.</span>
                            </div>
                                {/* Multi select  */}
                            <div >
                                <div className='flex flex-col test-red w-80'>
                                    <div className='flex flex-row justify-between align-center'>
                                                <div className='flex '>
                                                    <input  className="test-red mr-20 checkbox" type='checkbox' id="onlineservice" name="onlineservice" value="1"/>
                                                <div>
                                                <p> <span className='color-marine-blue font-large font-bold'>Online Service</span> <br></br><span className='color-grey'>Access to multiplayer games</span></p>
                                                    </div> 
                                                </div>

                                                <div>
                                                    <span>+$1/mo</span>
                                                </div>
                                            
                                                 
                                          
                                         
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
