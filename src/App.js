import React, { useState } from 'react';
import CakeContainer from './CakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store'
import HooksContainer from './useSelectorHooksContainer';
import IcecreamContainer from './IcecreamContainer';
import NewCakeContainer from './NewCakeContainer';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <Provider store={store}>
        <HooksContainer/>
        <CakeContainer/>
        <IcecreamContainer/>
        <NewCakeContainer/>
      </Provider>
      





      {/* <h1>The count is {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    </div>
  );
}

export default App;
