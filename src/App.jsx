import { useState } from 'react'
import './App.css'
import Selection from './components/Selection'

function App() {
  

  return (
    <>
      <main className='bg-image'>
        <div className='container flex-col'>

          <div className="welcome">
            <h1>welcome to lotr info</h1>
          </div>
          
          <Selection />

        </div>
      </main>
    </>
  )
}

export default App
