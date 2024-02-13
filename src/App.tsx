import { useState, useContext, useId } from 'react'
import { Filter } from './components/Filter.tsx'
import { Box, Text, VStack, Divider, } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import Slate from './components/Slate.tsx'
import Total from './components/Total.tsx'
import NewTodo from './components/NewTodo.tsx'
import GetTodos from './components/GetTodos.tsx'
import ListContext from './context/ListContext.ts'


function App() {
  
  const value = useContext(ListContext)

  const addData = (data: any) => {
    const newList = data.map(item => ({ id: nanoid(), title: item.title, todo: item.completed }) );
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


  return (
    <ListContext.Provider value={{todos: list, togleTodo, addTodo, useFilter, addData}} >
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
