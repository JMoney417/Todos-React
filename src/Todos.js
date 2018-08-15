import React from 'react'
import Todo from './Todo'

const Todos = (props) =>
    <ol>
      {
        props.todos.map((ele, id) => {
          return <Todo 
            key={ id } 
            todo={ ele } 
            deleteTodo={() => props.deleteTodo(id)} 
            index = { id }
            saveTodo = {props.saveTodo}
            />
        })
      }
    </ol>

export default Todos
