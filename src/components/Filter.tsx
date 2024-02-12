import { Box, Text, Stack, Button } from "@chakra-ui/react"
import {useContext} from 'react'
import ListContext from '../context/ListContext.ts'



export const Filter = () => {

    const value = useContext(ListContext)

    //let currentTodos = value.todos;

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
        <Stack spacing='10px' direction='row' >
         
                <Button bg='teal.400' onClick = {getAll} >All</Button>
                <Button onClick = {getNotCompleted} >Not completed</Button>
                <Button onClick = {getCompleted} >Completed</Button>
                        
        </Stack>
    )

    
}

