import React from 'react'
import { useState } from 'react'
import { saveTodo } from '../services/api'

const ToDoForm = () => {

    const [text, setText] = useState({})

    const onFormSubmit = async(e) => {
        setText('') 
        e.preventDefault()
        await saveTodo(text)
    }

    return (
        <div>
            <div className="row text-center mb-5">
                <h2><b>Add New ToDo</b></h2>
            </div>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder='Enter new ToDo' className='input' name='todo' onChange={(e)=>setText({...text,[e.target.name]:e.target.value})}/>
            </form>
        </div>
    )
}

export default ToDoForm