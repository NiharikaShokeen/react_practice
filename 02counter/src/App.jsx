import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
  let [counter, setCounter] = useState(10)

  const addValue = () => {
    setCounter(counter + 1)    // Both calls use the same value of `counter` captured during this render. If counter is 5, both become setCounter(6). React batches the updates, so the final value is 6.
    setCounter(counter + 1)

    setCounter(prevCounter => prevCounter +1)    //Each updater function receives the latest state, including updates from previous setCounter calls in the same batch. So if counter starts at 5, the final value becomes 7.

    setCounter(prevCounter => prevCounter +1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>learning react hooks</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick = {addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}>
        Remove value {counter}
      </button>
    </>
  )
}

export default App
