import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
 

  return (
    <>
    <div className="main">
      <div className="box">Box 1</div>
      <div className="box">Box 2</div>
      <div className="box">Box 3</div>
      <div className="box">Box 4</div>
      <div className="box">
        <div className="subbox">hello sass</div>
      </div>
    </div> 
    <div className="box">new box</div>
    
    </>
  )
}

export default App
