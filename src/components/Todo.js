import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

export default function Todo({ id, task, completed, removeTodo, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={completed} onClick={()=>toggleTodo(id)} />
      <ListItemText style={{textDecoration: completed && "line-through"}}>
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Edit"  onClick={()=>removeTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
