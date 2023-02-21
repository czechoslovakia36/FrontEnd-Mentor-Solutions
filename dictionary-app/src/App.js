// importing components
import Search from './components/Search'
import Searchbox from './components/Searchbox';
import DictionaryContext, { DictionaryProvider } from './context/DictionaryContext';

import { useContext } from 'react';


import SearchResult from './components/SearchResult';





function App() {

  // let {result} = useContext(DictionaryContext)

  // console.log('app',result)




  return (
   <>
   <DictionaryProvider>

        <Search/>
        <Searchbox/>

  
      
      
       
        
        
        
      <SearchResult/>
   </DictionaryProvider>
  
  
   </>
  );
}

export default App;
