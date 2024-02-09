import { Box, Text, Stack, Button } from "@chakra-ui/react"


export const Filter = () => {

    const getAll = () => {

    }

    const getNotCompleted = () => {

    }

    const getCompleted = () => {

    }

    return (
        <Stack spacing='10px' direction='row' >
         
                <Button bg='teal.400' onClick = {getAll} >All</Button>
                <Button onClick = {getNotCompleted} >Not completed</Button>
                <Button onClick = {getCompleted} >Completed</Button>
                        
        </Stack>
    )
}