
import './App.css';
import './index.css'

import Advice from './component/Advice';

import { AdviceProvider } from './context/AdviceContext.js';



function App() {

  



  return (
  
           <AdviceProvider>

<Advice></Advice>
           </AdviceProvider>
              
            
           
         
  )
}

export default App;
