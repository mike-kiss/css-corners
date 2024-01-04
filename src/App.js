import React from 'react'
import { Routes } from './Routes'
import './App.css'
import { LessonsMenu } from './components/LessonsMenu'

function App() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <button
          onClick={() => {
            setMenuIsOpen(!menuIsOpen)
          }}
        >
          menu
        </button>
        <LessonsMenu isOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      </header>
      <Routes />
    </div>
  )
}

export default App
