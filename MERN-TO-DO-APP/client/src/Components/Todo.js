import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteTodo } from '../services/api'

const Todo = ({ todo }) => {

  const navigate = useNavigate()

  return (
    <>
      <h6 className='task'>
        <span>{todo.todo}</span>
        <span>
          <i className="bi bi-trash3-fill icon" onClick={() => deleteTodo(todo._id)} ></i>
        </span>
        <span>
          <i className="bi bi-pen icon" onClick={()=>navigate(`/edit/${todo._id}`)} ></i>
        </span>
      </h6>
    </>
  )
}

export default Todo