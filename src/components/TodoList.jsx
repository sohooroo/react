import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const TodoList = () => {

    const [todos, setTodos]=useState([])
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)
    const [keyword, setKeyword]=useState('')

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            setTodos(res.data.slice(0,5))
            console.log(res.data)

            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setError('데이터를 가져오지 못했습니다')
            setLoading(false)
        })

    },[])



    return (
        <div>
            <h2>Todo list</h2>
            <ul>
                {todos.map((todo)=>
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TodoList