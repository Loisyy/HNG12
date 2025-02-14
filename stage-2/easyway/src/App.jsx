import { useState } from 'react'
import {Header} from './components/Header'
import { TicketGenerator } from './components/TicketGenerator'
import './App.css'

function App() {
  return (
    <main>
      <Header/>
      <div className="container">
        <h1 className='gradient-text'>EasyWay Generate Ticket </h1>
      <TicketGenerator/>
      </div>
    </main>
  )
}
  

export default App
