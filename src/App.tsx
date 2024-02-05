import { useState } from 'react'
import { Filter } from './components/Filter.tsx'
import { Box, Text, VStack, Divider, } from "@chakra-ui/react"
import Slate from './components/Slate.tsx'
import Total from './components/Total.tsx'
import NewTodo from './components/NewTodo.tsx'
import GetTodos from './components/GetTodos.tsx'

// import './App.css'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <VStack mt={8} spacing='8' >
       <Filter />
       {/* <List h={'30px'} /> */}
       <Slate  style={'300px'} />
       <Total />
       <NewTodo />
       <GetTodos />
    </VStack>
  )
}

export default App
