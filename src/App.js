import { useState } from 'react';
import './App.css';

const initialState = 1;
function App() {
  const [state, setState] = useState(initialState);
  const changeName = () => {
    setState("Ismoil")
  };
  return (
    <>
          {/* <h1>Salom {state ? "rost" : "yolgon"}</h1> */}
          <h1>Salom {state}</h1>
          {/* <button onClick={changeName}>O'zgartirish</button> */}
          <button onClick={()=>setState(state + 1)}>Counter</button>
    </>
  );
}

export default App;
