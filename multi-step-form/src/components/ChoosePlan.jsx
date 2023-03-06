import React from 'react';
import { useEffect } from 'react';

import '../assets/css/ChoosePlan.css'


import  '../assets/css/ToggleSwitch.css'






const ChoosePlan = () => {

    let arcade, advanced , pro ;

    function handleChange(e){
        // console.log(e.target.checked)

        if(e.target.checked===false){
           
            // Monthly

            arcade=`<span class='color-marine-blue font-large font-bold'>Arcade</span> <br><span class="color-grey font-small">$9/mo</span>`
            advanced=`<span class='color-marine-blue font-large font-bold'>Advanced</span> <br><span class="color-grey font-small">$12/mo</span>`
            pro=`<span class='color-marine-blue font-large font-bold'>Pro</span> <br><span class="color-grey font-small">$15/mo</span>`

            document.getElementById('arcade-data').innerHTML=arcade
            document.getElementById('advanced-data').innerHTML=advanced
            document.getElementById('pro-data').innerHTML=pro
          

        }

        else{

            // yearly 

            arcade=`<span class='color-marine-blue font-large font-bold'>Arcade</span> <br><span class='color-grey font-small'>$90/yr</span>  <br><span class='color-marine-blue'>2 months free</span>`
            advanced=`<span class='color-marine-blue font-large font-bold'>Advanced</span> <br><span class='color-grey font-small'>$120/yr</span>  <br><span class='color-marine-blue'>2 months free</span>`
            pro= `<span class='color-marine-blue font-large font-bold'>Pro</span> <br><span class='color-grey font-small'>$150/yr</span>  <br><span class='color-marine-blue'>2 months free</span>`
        
            document.getElementById('arcade-data').innerHTML=arcade
            document.getElementById('advanced-data').innerHTML=advanced
            document.getElementById('pro-data').innerHTML=pro
          
        }
    }

    console.log(arcade)
    

    useEffect(()=>{
      
        let divTag= Array.from(document.getElementsByClassName('sub-container'));

        divTag.map(tag=>{
           tag.onclick = () =>{
            let indexOfSelected =divTag.indexOf(tag)
            
            tag.classList.add('selected')

            
            for(let i=0;i<divTag.length;i++){
                if(i!=indexOfSelected){
                    divTag[i].classList.remove('selected')
                }
            }
        


           }
        })



        
    } 
    ,[])


   


    return (
        <>
        <div className='container2 flex flex-col'>

        <div className='sub-container2 flex align-center '>
        
            <div className='sub-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
                <div id="arcade-data"><span className='color-marine-blue font-large font-bold'>Arcade</span> <br></br> <span className="color-grey font-small">$9/mo</span></div>
            </div>
            <div className='sub-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
            <div id='advanced-data'><span className='color-marine-blue font-large font-bold'>Advanced</span> <br></br> <span className="color-grey font-small">$12/mo</span></div>

            </div>
            <div className='sub-container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
            <div id="pro-data"><span className='color-marine-blue font-large font-bold'>Pro</span> <br></br> <span className="color-grey font-small">$15/mo</span></div>

            </div>
        
        </div>
{/* Toggler button */}
      
                    <div  className=' flex  w-100 align-center mt-30' >
                       
                    
                        
                        <div className='toggle flex justify-center align-center'>
                            <div className='font-large font-bold text-center'>Monthly</div>
                            <input className='toggleswitch' onChange={handleChange} type="checkbox" id="switch" /><label id="label" for="switch">Toggle</label>
                            <div className='font-large font-bold text-center'>Yearly</div>
                        </div>
                   
            
                    

                   
                    </div>
            
        </div>
        
        
       
       
        </>
    );


}

export default ChoosePlan;
