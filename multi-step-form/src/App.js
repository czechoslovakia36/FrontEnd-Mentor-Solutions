


import YourInfo from './components/YourInfo';

import SelectPlan from './components/SelectPlan';
import ChoosePlan from './components/ChoosePlan';

function App() {

  let value=3

  switch(value){
    case 1:
      return (
        <>
        <YourInfo/>
        </>
       
      );
    case 2:
      return (
        <>
        <SelectPlan/>
        </>
 

      )
    case 3:
      return (
        <>
        <ChoosePlan/>
        </>
      )
}
}

export default App;
