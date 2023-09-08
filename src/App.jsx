import React from 'react';
import DataProvider from './DataProvider';
import Home from './Home';


function App() {
  return (<>
<DataProvider>
    <Home/>
</DataProvider>
    </>
  )
}
export default App;
