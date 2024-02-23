
import { Checkbox, HStack, Stack, Text } from '@chakra-ui/react'
import {useContext} from 'react'
import ListContext from '../context/ListContext.ts'

const Todo = ({id, title, todo, togleTodo}: any ) => {

        return (

            <HStack spacing={4} key={id} w={'600px'} h={'25px'} >
                {
                   <Checkbox isChecked={todo} onChange={() => togleTodo(id)} size="lg" />
                
                // todo ? <input type="checkbox" checked={true} style={{transform: 'scale(1.5)'}} onChange={() => togleTodo(id)} />
                //      : <input type="checkbox" checked={false} style={{transform: 'scale(1.5)'}} onChange={() => togleTodo(id)} />
                
                }
                    <Text >{title}</Text>
            </HStack>

        )     
    }

const Slate = () => {
      
    const value = useContext(ListContext)

    const {loading, error} = value.useLoading();

    const completedOrNot = value.useFilter(null);

    let currentTodos;

    switch(completedOrNot) {
        case ('completed'): currentTodos = value.todos.filter(item => item.todo === true); //console.log("switch-completed"); 
            break;
        case ('notcompleted'): currentTodos = value.todos.filter(item => item.todo === false); //console.log("switch-notcompleted"); 
            break;
        default: currentTodos = value.todos; //console.log("switch-all");
    }


    if(loading) return(<h5>Loading...</h5>);
    if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
 
    return (
    <>
    <Stack minH={'300px'} marginLeft="390px">

        {currentTodos.map(item => <Todo key = {item.id} {...item} togleTodo = {value.togleTodo} />)}
    </Stack>
    </>
  )
}

export default Slate