
import './App.css';
import './index.css'

import Advice from './component/Advice';

import { AdviceProvider } from './context/AdviceContext';

function App() {
  return (
   
    <AdviceProvider>
          <Advice></Advice>
 
    </AdviceProvider>

    
   
   
  )
}

export default App;
