import React from 'react';

const Toggle = () => {

  
  const handleToggle= () => {
    let element= document.body;
    element.classList.toggle('dark-mode')
  }

    return (
        <div className="flex justify-center">
  <div className="form-check form-switch">
    <input id="toggle" onClick={handleToggle} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-purple-500 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  
  </div>
        </div>
    );
}

export default Toggle;
