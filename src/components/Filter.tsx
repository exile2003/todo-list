import { Stack, Button } from "react-bootstrap"
import {useContext} from 'react'
import ListContext from '../context/ListContext.ts'



export const Filter = () => {

    const value = useContext(ListContext)

    const getAll = () => {
        value.useFilter('all')
    }

    const getNotCompleted = () => {
        //currentTodos = value.todos.filter(item => item.todo === false);
        value.useFilter('notcompleted')
    }

    const getCompleted = () => {
        //currentTodos = value.todos.filter(item => item.todo === true);
        value.useFilter('completed')
    }

    return (
        <div >
            <Stack gap={2} direction='horizontal' >
            <Button style={{ backgroundColor:'teal' }} onClick = {getAll} >All</Button>
            <Button onClick = {getNotCompleted} >Not completed</Button>
            <Button onClick = {getCompleted} >Completed</Button>
            </Stack>
        </div>
       
    )

    
}

