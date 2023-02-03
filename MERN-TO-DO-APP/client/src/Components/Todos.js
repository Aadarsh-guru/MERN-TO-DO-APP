import React from 'react'
import { useEffect, useState } from 'react'
import { getTodos } from '../services/api'
import Todo from './Todo'

const Todos = () => {

    const [todo, setTodo] = useState([])

    const getAllTodo = async () => {
       const response = await getTodos()
       setTodo(response.data)
    }

    useEffect(() => { getAllTodo() }, [todo])

    return (
        <div>
            <article>
                {
                    todo.map((todo) => {
                        return <Todo key={todo._id} todo={todo} />
                    })
                }
            </article>
        </div>
    )
}

export default Todos