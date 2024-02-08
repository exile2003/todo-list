import { useState, useContext } from 'react'
import { Filter } from './components/Filter.tsx'
import { Box, Text, VStack, Divider, } from "@chakra-ui/react"
import Slate from './components/Slate.tsx'
import Total from './components/Total.tsx'
import NewTodo from './components/NewTodo.tsx'
import GetTodos from './components/GetTodos.tsx'
import ListContext from './context/ListContext.ts'


function App() {
  
  const value = useContext(ListContext)

  const togleTodo = (itemId) => {
    list.map(item => item.id === itemId ? setList([...list], [[item: id]:{...item, [item.todo]: !item.todo}]) : setList([...list]) )
  }

  const [list, setList] = useState([{
    id: 0,
    title: 'Learn JS',
    todo: false,
    togleTodo
  },
  {
    id: 1,
    title: 'Learn React',
    todo: true,
    togleTodo
  }])

  return (
    <ListContext.Provider value={list} >
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
