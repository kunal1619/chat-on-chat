import React from 'react'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import { Route } from 'react-router-dom'
import "./App.css"

const App = () => {
  return (
    <div className='App'>
   <Route path={'/'} component={HomePage} exact/>
   <Route path={'/chat'} component={ChatPage}/>
    </div>
  )
}

export default App

// forntend is running on port 3000 and backend on 5000 so to use api from backend in frontend setup a proxy in package.json ("proxy" : "http://127.0.0.1:5000")

