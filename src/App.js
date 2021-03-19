import React from 'react';
import './App.css';
// import Routers from "./config/routers";
// import { Online, Offline } from "react-detect-offline";
// import OffLineComp from "./components/offLineComp";
import { Provider } from "react-redux";
import { store } from "./config/store";
import ToDo from './components/toDo';



function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Offline> <OffLineComp/> </Offline>
        <Online> <Routers/> </Online> */}

        <ToDo/> 
      

        
      </div>
    </Provider>  
    
  );
}

export default App;
