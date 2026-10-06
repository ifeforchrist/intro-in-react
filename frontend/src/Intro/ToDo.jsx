import React, { useEffect, useState } from 'react'

const ToDo = (e) => {
  e.preventDefult
    const[task, setTask] = useState("")
    const [todos, setTodos] = useState(() =>{
      const saved = localStorage.getItem("myTodos") 
      return saved? JSON.parse(saved) : []
    })

    
    useEffect(() =>{
      localStorage.setItem("myTodos", JSON.stringify(todos))
    }, [todos])

    const addTask = () => {
      if(task.trim()  === "")
        return
      setTodos([...todos, task])
      setTask("")
    }

    const deleteTask = (indexToDelete) =>{
      setTodos(todos.filter((_, index) => index  !== indexToDelete))
    }

  return (
    <div>
        <input type="text" value={task} onChange={(e) =>setTask((e.target.value))} placeholder='enter task'/>
        <button onClick={addTask}>Add</button>

        <ul>
          {todos.map((t, i) =>
           <li key={i}>{t}<button onClick={()=>deleteTask(i)}>X</button></li>
            
           
          )}
        </ul>
    </div>
  )
}

export default ToDo