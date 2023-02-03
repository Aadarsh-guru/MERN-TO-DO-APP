import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import EditTodo from './Components/EditTodo';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:id' element={<EditTodo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App