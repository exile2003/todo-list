import { Stack, Button } from "@chakra-ui/react"
import {useContext} from 'react'
import ListContext from '../context/ListContext.ts'

export const Filter = () => {

    const value = useContext(ListContext)

    const getAll = () => {
        value.useFilter('all')
    }

    const getNotCompleted = () => {
        value.useFilter('notcompleted')
    }

    const getCompleted = () => {
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

