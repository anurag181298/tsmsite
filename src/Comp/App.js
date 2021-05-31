import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import C from './Comp/C';
import B from './Comp/B';
import A from './Comp/A';
// import A from './Comp/A';
// import B from './Comp/B';
// import C from './Comp/C';


const FName  = createContext();
const LName  = createContext();


function App() {
 
  return (<> 
  <FName.Provider value={"Death"}> 
  <LName.Provider value={"DEasto"}>

  <B/>
  </LName.Provider>

  </FName.Provider >
  <A />
  {/* <A />
    <B />
    <C /> */}
    </>
    )
}

export default App;
export {FName ,LName};
