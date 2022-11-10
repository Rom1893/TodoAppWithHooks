import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import useToggle from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {

  const [isEditing, toggle] = useToggle(false)

  return (
    <ListItem style={{height: "64px"}}>
      {isEditing ? <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEdit={toggle}/> :
        <>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{ textDecoration: completed && "line-through" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  )
}
