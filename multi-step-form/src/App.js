

import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import YourInfo from './components/YourInfo';

import SelectPlan from './components/SelectPlan';
import ChoosePlan from './components/ChoosePlan';

import AddOn from './components/AddOn'

import Summary from './components/Summary'





export default function App(){
  return (
    <stepProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<YourInfo />}> </Route>
              <Route exact path="selectplan" element={<SelectPlan />}></Route>
              <Route  exact path="chooseplan" element={<ChoosePlan/>}></Route>
              <Route  exact path="addon" element={<AddOn/>}></Route>
              <Route exact path="summary" element={<Summary/>}> </Route>

             
       
      </Routes>
    </BrowserRouter>
    </stepProvider>
  )
}


