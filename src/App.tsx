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

  const togleTodo = (itemId: number) => {
//    const newList = list.map((item) => item.id === itemId ? setList([...list, {...item, todo: !item.todo}])  : setList([...list,{...item}]));
    let newList = list.map(item => item.id === itemId ? {...item, todo: !item.todo}  : item);
    console.log(newList)
    setList(newList) 
  }

  const callForm = () => {
    
  }

  const [list, setList] = useState([{
    id: 0,
    title: 'Learn JS',
    todo: false
  },
  {
    id: 1,
    title: 'Learn React',
    todo: true
  }])


  return (
    <ListContext.Provider value={{todos: list, togleTodo}} >
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
