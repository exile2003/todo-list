// import { Checkbox, HStack, Stack, Text, Box } from '@chakra-ui/react'
import { Stack, Form } from 'react-bootstrap'
import {useContext} from 'react'
import ListContext from '../context/ListContext.ts'

const Todo = ({id, title, todo, togleTodo}: any ) => {

        return (
            <Stack direction="horizontal" gap={3} key={id} >
                
                    <Form.Check size={'sm'} checked={todo} onChange={() => togleTodo(id)} />
                    <div>{title}</div>
                    {
                        // todo ? <input type="checkbox" checked={true} style={{transform: 'scale(1.5)'}} onChange={() => togleTodo(id)} />
                        //      : <input type="checkbox" checked={false} style={{transform: 'scale(1.5)'}} onChange={() => togleTodo(id)} />
                    }              
            </Stack>
        )     
    }

const Slate = () => {
      
    const value = useContext(ListContext)

    const {loading, error} = value.useLoading();

    console.log("loading = ", loading);
    console.log("error = ", error);


    const completedOrNot = value.useFilter(null);

    //console.log("filter", completedOrNot);

    let currentTodos;

    switch(completedOrNot) {
        case ('completed'): currentTodos = value.todos.filter(item => item.todo === true); //console.log("switch-completed"); 
            break;
        case ('notcompleted'): currentTodos = value.todos.filter(item => item.todo === false); //console.log("switch-notcompleted"); 
            break;
        default: currentTodos = value.todos; //console.log("switch-all");
    }

    //console.log("currentTodos", currentTodos)
    //currentTodos = value.todos;

    if(loading) return(<div className="d-flex justify-content-center" >Loading...</div>);
    if(error) return(
        <div className="d-flex justify-content-center" >{JSON.stringify(error, null, 2)}</div>
    )
    

    return (
    <>
     {/* {
        (loading)&&(<h1>Loading...</h1>)
    }{   
    
        (error)&& (
            //console.log("error = ", error.message);
            <pre>{JSON.stringify(error.message, null, 2)}</pre>
        )
    }  */}
    
    <Stack gap={3} style={{ minHeight: '300px', marginLeft: '30%' }} >
        {/* {console.log(value)} */}
        {currentTodos.map(item => <Todo key = {item.id} {...item} togleTodo = {value.togleTodo} />)}
    </Stack>
    </>
   
    
  )
}

export default Slate