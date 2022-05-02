import { useState } from 'react';
import './App.css';

const initialState = 'GoGoGo'
function App() {
  const [state, setState] = useState(initialState);
  const changeName = () => {
    setState("Ismoil")
  };
  return (
    <>
          {/* <h1>Salom {state ? "rost" : "yolgon"}</h1> */}
          <h1>Salom {state}</h1>
          <button onClick={changeName}>O'zgartirish</button>
    </>
  );
}

export default App;
