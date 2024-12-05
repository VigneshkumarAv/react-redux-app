import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeView from './features/cake/CakeView'
import IcecreamView from './features/icecream/IcecreamView'
import UserView from './features/user/UserView'

function App() {
  const [count, setCount] = useState(0)
  const a = {name: "vignesh", age: 24, desc: "developer"}
  const b = {name: "v", age: 14, desc: "dev"}
console.log({...a,...b});
const num = [1, 5, 15, 20];
  const [numbers, setNumbers] = useState(num);
  const handleSort = () => {
    setNumbers(numbers.sort((a, b) => (a > b ? b - a : a - b)));
  };
  console.log("out", numbers);
  return (
    <>
    <button onClick={handleSort}>sort</button>
      <p>{numbers}</p>
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </>
  )
}

export default App
