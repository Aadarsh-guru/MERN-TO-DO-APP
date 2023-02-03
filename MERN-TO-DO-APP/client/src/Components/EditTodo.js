import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editTodo, getTodo } from '../services/api'


const EditTodo = () => {

    const [text, setText] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    const loadTodo = async()=>{
        const response = await getTodo(id)
        setText(response.data)
    }

    useEffect(()=>{loadTodo()},[])

    const onFormSubmit = async(e) => {
        e.preventDefault()
        await editTodo(id,text)
        navigate('/')
    }

    return (
        <div>
            <div className="row text-center mb-5">
                <h2><b>Edit ToDo</b></h2>
            </div>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder='Edit ToDo' value={text.todo} className='input' name='todo' onChange={(e)=>setText({...text,[e.target.name]:e.target.value})}/>
            </form>
        </div>
    )
}

export default EditTodo