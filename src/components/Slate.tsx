import { Checkbox, HStack, Stack } from '@chakra-ui/react'
import {useContext} from 'react'
import ListContext from '../context/ListContext.tsx'



function Slate() {
  
    const value = useContext(ListContext)

    const Todo = ({id, title, todo, togleTodo}: any ) => {

        return (
            <HStack spacing={4} key={id}>
                {
                    //<Checkbox isChecked={todo} onChange={() => togleTodo(id)} />
                
                todo ? <input type="checkbox" onChange={() => {togleTodo(id); console.log(id, todo)}}  checked />
                     : <input type="checkbox" onChange={() => {togleTodo(id); console.log(id, todo)}}  />
                
                }
                <h3>{title}</h3>
            </HStack>
        )     
    }
  
    return (
    <Stack minH={'300px'}>
        {/* {console.log(value)} */}
        {value.todos.map(item => <Todo key = {item.id} {...item} togleTodo = {value.togleTodo} />)}
    </Stack>
    
  )
}

export default Slate