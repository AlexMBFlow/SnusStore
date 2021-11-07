import React from "react";
import { LayoutMain } from "./components/Layout/LayoutMain";
//import { useDispatch, useSelector } from "react-redux";
import './App.css';

function App() {
  //const dispatch = useDispatch()
  //const valueASS = useSelector(state => state.value)
  //console.log(valueASS)
  return (
    <div className="App">
      <LayoutMain/>
    </div>
  );
}

export default App;
