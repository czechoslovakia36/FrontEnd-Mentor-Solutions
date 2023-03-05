

import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import YourInfo from './components/YourInfo';

import SelectPlan from './components/SelectPlan';
import ChoosePlan from './components/ChoosePlan';

import AddOn from './components/AddOn'


export default function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<YourInfo />}> </Route>
              <Route exact path="selectplan" element={<SelectPlan />}></Route>
              <Route  exact path="chooseplan" element={<ChoosePlan/>}></Route>
              <Route  exact path="addon" element={<AddOn/>}></Route>

             
       
      </Routes>
    </BrowserRouter>
  )
}


