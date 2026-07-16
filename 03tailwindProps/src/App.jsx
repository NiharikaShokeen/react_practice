import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card2 from './components/Card'


/* eslint-disable @next/next/no-img-element */
function App() {
  let myobj = {
    username: "Niharika",
    age: 20
  }
  let arr = [2,6,8]
  return (
    <>
    <h1 className= 'bg-green-300'>Tailwind css and props</h1>
    <Card2 username="cruel summer" startt ="its beginning"/>
    <Card2 />
    </>
  );
}


export default App
