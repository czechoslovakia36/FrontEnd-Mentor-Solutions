import React from 'react';

import '../assets/css/searchresult.css'

import { useContext } from 'react';


// Importing ICONS
import {BsPlay} from 'react-icons/bs'
import {HiOutlineExternalLink}  from 'react-icons/hi'


import { IconContext } from 'react-icons';

// Importing DictionaryContext

import DictionaryContext from '../context/DictionaryContext';


// Importing Helper Functions

import { playAudio } from '../helper/playAudio';

const SearchResult = () => {

    const url = 'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3'

    let arrayOfMeanings=['(etc. A set of keys used to operate typewriter,computer etc.)','a musical instrument that is played by means of a keyboard','a board on which keys for locks are hung']

    let arrayOfVerb=['to enter (data, text, etc.) by means of a keyboard']

    const {result}=  useContext(DictionaryContext);

    
    if(!result) {
        return (

        
            <div className='container-searchresult'>
                {/* First */}
                <div className='flex-row space-between align-center'>
                    <div className='flex-col'>
                         <span className='font-large' style={{display:'block'}}>Keyboard</span>
                         <span className='block font-medium font-purple-dark'>/'ki:bo:d/</span>
                    </div>
                
                   
                    <span onClick={(e)=>playAudio(url)} id="play-button" className='circle flex-col align-center just-center'>
                        <IconContext.Provider value={{size:"2em", color:"purple"}}>
                                <BsPlay/>
                        </IconContext.Provider>
                        
                    </span>
                </div>
                {/* 2nd  */}
                <div className='flex-row'>
                    <p className='font-normal font-family-galado'> Noun</p>
                    <hr></hr>
                    
                </div>
    
                {/* Third */}
    
                <div className='flex-col'>
                    <p className='font-normal font-grey'>Meaning</p>
                    <div className='ml-40'>
                   
                        <ul>
                            {arrayOfMeanings.map(meaning => 
                            <li className='meaning'>{meaning}</li>
                            )}
                        </ul>
                    </div>
    
                </div>
    
                {/* 4th */}
            
                <div className='flex-row' style={{gap:'30px'}}>
                    <p className='font-normal font-grey'>Synonyms</p>
                    <p className='font-normal font-purple-dark'>electronic keyboard</p>
    
                            
                </div>
    
                {/* 5th */}
                <div className='flex-row' style={{marginTop:'20px'}}>
                    <p className='font-normal font-family-galado'> verb</p>
                    <hr></hr>
                    
                </div>
    
                {/* 6th */}
    
                <div className='flex-col'>
                    <p className='font-normal font-grey'>Meaning</p>
                    <div className='ml-40'>
                   
                        <ul>
                            {arrayOfVerb.map(meaning => 
                            <li className='meaning'>{meaning}</li>
                            )}
                        </ul>
                    </div>
    
                </div>
    
                <hr style={{marginTop:"20px"}}></hr>
    
    
                {/* 7th */}
    
                <div className='flex-row' style={{gap:'30px', marginTop:'30px'}}>
    
                    <p className='font-small font-grey'>Source</p>
                    <p className='font-small'><a href="https://en.wiktionary.org/wiki/keyboard">https://en.wiktionary.org/wiki/keyboard</a><span className='align-center ml-5' style={{display:'inline-flex'}}><HiOutlineExternalLink/></span></p>
                    
                            
                </div>
    
    
                
            </div>
        );
    }
       
    

    }
    

    

export default SearchResult;
