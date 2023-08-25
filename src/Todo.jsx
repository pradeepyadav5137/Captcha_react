import React, { useState } from 'react'

function Todo() {

    const [InputValue, setValue] = useState("")
    const [tasks ,setTasks]= useState([])

    function handleSubmits(shardha){
        shardha.preventDefault();
        setTasks([...tasks , InputValue])
        setValue("")
    }

    return (
        <>
            <form onSubmit={handleSubmits}>
                <input type="text" value={InputValue} placeholder='Enter your task' onChange={(e) => setValue(e.target.value)} />
                <button type='submit'>Add Task</button>
            </form>

            <ul>
                {tasks.map((tasks ,index) =>{
                   return (
                    <li key={index}>
                        {editMode === index ? (
                                <>
                                    <input
                                        type="text"
                                        value={InputValue}
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                    <button onClick={() => handleSubmits}>Save</button>
                                </>
                            ) : (
                                <>
                                    {tasks}
                                    <button onClick={() => handleEditClick(index)}>Edit</button>
                                </>
                            )}
                    </li>
                   )
                   })}
                   
            </ul>
        </>

    )
}

export default Todo