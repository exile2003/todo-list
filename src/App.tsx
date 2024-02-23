import { useState } from 'react'
import { Filter } from './components/Filter.tsx'
import { VStack } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import Slate from './components/Slate.tsx'
import Total from './components/Total.tsx'
import NewTodo from './components/NewTodo.tsx'
import GetTodos from './components/GetTodos.tsx'
import ListContext from './context/ListContext.ts'

function App() {
  
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
    const newList = list.map(item => item.id === itemId ? {...item, todo: !item.todo}  : item);
    setList(newList) 
  }

  const addTodo = (data: string) => {
    const todoId = nanoid();
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

