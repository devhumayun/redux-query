import React from 'react'
import { useGetTodosQuery } from '../api/apiSlice'

const Todo = () => {

    const { data } = useGetTodosQuery()

    console.log(data);
    
  return (
    <div>
       Todos
    </div>
  )
}

export default Todo
