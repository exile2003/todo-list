import { Checkbox, HStack, Stack } from '@chakra-ui/react'
import {useContext} from 'react'
import ListContext from '../context/ListContext.ts'

const Todo = ({id, title, todo, togleTodo}: any ) => {

        return (
            <HStack spacing={4} key={id}>
                {
                    //<Checkbox isChecked={todo} onChange={() => togleTodo(id)} size="lg" />
                
                todo ? <input type="checkbox" style={{transform: 'scale(1.5)'}} onChange={() => {togleTodo(id); console.log(id, todo)}}  checked />
                     : <input type="checkbox" style={{transform: 'scale(1.5)'}} onChange={() => {togleTodo(id); console.log(id, todo)}}  />
                
                }
                <h3>{title}</h3>
            </HStack>
        )     
    }

const Slate = () => {
  
    const value = useContext(ListContext)

    const filter = value.useFilter();

    console.log("filter", filter);

    let currentTodos;

    switch(filter) {
        case "completed": currentTodos = value.todos.filter(item => item.todo === true);
        case "notcompleted": currentTodos = value.todos.filter(item => item.todo === false);
        default: currentTodos = value.todos;
    }
  
    return (
    <Stack minH={'300px'}>
        {/* {console.log(value)} */}
        {currentTodos.map(item => <Todo key = {item.id} {...item} togleTodo = {value.togleTodo} />)}
    </Stack>
    
  )
}

export default Slate