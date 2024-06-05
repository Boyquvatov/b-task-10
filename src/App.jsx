import React from 'react'
import { Header } from './components'
import { Outlet } from 'react-router-dom'
import "./App.css"
const App = () => {
  return (
    <div className='app'>
      <div className="head">
      <Header/>
      </div>
      <main className="farqi_yoq" >
      <Outlet/>
      </main>
    </div>
  )
}

export default App
