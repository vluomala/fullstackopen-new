import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Note from './components/Note'



const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {notes.map(note => 
           <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App
