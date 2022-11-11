import React from 'react'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';

export default function TodoList(props) {
    if(props.todosApp.length)
    return (
         <Paper>
            <List>
                {props.todosApp.map((todo, i) => (
                    <>
                       <Todo 
                       id={todo.id} 
                       task={todo.task} 
                       key={todo.id} 
                       completed={todo.completed} 
                       removeTodo={props.removeTodo}
                       toggleTodo={props.toggleTodo}ç
                       editTodo={props.editTodo}
                       />
                        {i < props.todosApp.length-1 && <Divider/>}
                    </>
                ))

                }
            </List>
        </Paper>
    )
    return null
}
