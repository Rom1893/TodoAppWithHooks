import React from 'react'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todosApp.map(todo => (
                    <>
                       <Todo 
                       id={todo.id} 
                       task={todo.task} 
                       key={todo.id} 
                       completed={todo.completed} 
                       removeTodo={props.removeTodo}
                       toggleTodo={props.toggleTodo}
                       />
                        <Divider/>
                    </>
                ))

                }
            </List>
        </Paper>
    )
}
