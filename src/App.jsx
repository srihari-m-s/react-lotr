import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <main className='bg-image'>
        <div className='container flex-col'>

          <div className="welcome">
            <h1>welcome to lotr info</h1>
          </div>
          
          <div className="selection">
            <button className="selector">Books</button>
            <button className="selector">Movies</button>
            <button className="selector">Characters</button>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
