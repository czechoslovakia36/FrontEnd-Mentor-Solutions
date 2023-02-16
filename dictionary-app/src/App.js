// importing components
import Search from './components/Search'
import Searchbox from './components/Searchbox';
import { DictionaryProvider } from './context/DictionaryContext';


import SearchResult from './components/SearchResult';


function App() {
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
