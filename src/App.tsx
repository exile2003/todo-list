import { useState, useContext, useId, useEffect } from 'react'
import { Filter } from './components/Filter.tsx'
import { Box, Text, VStack, Divider, } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import Slate from './components/Slate.tsx'
import Total from './components/Total.tsx'
import NewTodo from './components/NewTodo.tsx'
import GetTodos from './components/GetTodos.tsx'
import ListContext from './context/ListContext.ts'

type todoItem = {
 // id: string;
  title: string;
  completed: boolean
}

function App() {
  
  //const value = useContext(ListContext)

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [list, setList] = useState([{
    id: '0',
    title: 'Learn JS',
    todo: false
  },
  {
    id: '1',
    title: 'Learn React',
    todo: true
  }])
/*
  const useFetch = () => {
    
   // const [data, setData] = useState(list);
   useEffect(() => {
    (async() => {
        try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        if(!res.ok) throw new Error('Faild to fetch! Try again.');
        addData(await res.json());
        
      } catch(error) {
        console.log("error = ", error.message);
        setError({message: error.message})
      } finally {
        setLoading(false)
      }
    })
     
   }, [error, list])
   
  return { loading, error }
   
  }
*/

const useFetch = async (URL:string) => {
    
      setLoading(true)
      setError('')

       try {
       const res = await fetch(URL);
       if(!res.ok) throw new Error('Faild to fetch! Try again.');
       addData(await res.json());
       
     } catch(error: any) {
       console.log("error = ", error.message);
       setError(error.message)
     } finally {
       setLoading(false)
     }  
 }

 const useLoading = () => {
  return {loading, error}
 }

  const addData = (data: {title: string, completed: boolean}[]) => {
    const newList = data.map((item: {title: string, completed: boolean}) => ({ id: nanoid(), title: item.title, todo: item.completed }) );
    setList(newList)
  }

  const togleTodo = (itemId: string) => {
//  const newList = list.map((item) => item.id === itemId ? setList([...list, {...item, todo: !item.todo}])  : setList([...list,{...item}]));
    const newList = list.map(item => item.id === itemId ? {...item, todo: !item.todo}  : item);

    //console.log(newList)
    setList(newList) 
  }

  const addTodo = (data: string) => {
    const todoId = nanoid();
    //const newList = [...list, { id: Math.floor(Math.random()*1000000), title: data, todo: false}];
    const newList = [...list, { id: todoId, title: data, todo: false}];
    setList(newList);

  }

  const [filter, setFilter] = useState('all');

  const useFilter = (value: string|null) => {
    if (value) setFilter(value);
    return filter
  }
  
  


  return (
    <ListContext.Provider value={{todos: list, togleTodo, addTodo, useFilter, useFetch, useLoading}} >
       <VStack mt={8} spacing='8' >
       <Filter />
       <Slate />
       <Total />
       <NewTodo />
       <GetTodos />
    </VStack>
    </ListContext.Provider>
   
  )
}

export default App

