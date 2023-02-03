import axios from "axios";

const URL = `http://localhost`

export const getTodos = async()=>{
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log(`error while calling getTodos api`,error);
    }
}

export const saveTodo = async(data)=>{
    try {
        return await axios.post(`${URL}/add`,data)
    } catch (error) {
        console.log(`error while calling saveTodo api`,error);
    }
}

export const deleteTodo = async(id)=>{
    try {
        return await axios.delete(`${URL}/delete/${id}`)
    } catch (error) {
        console.log(`error while calling deleteTodo api`,error);
    }
}

export const getTodo = async(id)=>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(`error while calling getTodo api`,error);
    }
}

export const editTodo = async(id,data)=>{
    try {
        return await axios.put(`${URL}/edit/${id}`,data)
    } catch (error) {
        console.log(`error while calling editTodo api`,error);
    }
}

