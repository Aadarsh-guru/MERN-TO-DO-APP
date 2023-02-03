import React from 'react'
import ToDoForm from './ToDoForm';
import Todos from './Todos';

const Home = () => {
  return (
    <div>
        <ToDoForm/>
        <Todos/>
    </div>
  )
}

export default Home