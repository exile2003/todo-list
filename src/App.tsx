import { useState } from 'react'
import { Filter } from './components/Filter.tsx'
import { Box, Text, VStack, Divider } from "@chakra-ui/react"



//import './App.css'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <br />
    <hr />
    
    <VStack mt={8} spacing='8'>
       <Filter />
       
       <Divider border='px' borderColor='teal.500' w='100%' />
       <Filter />
    </VStack>
    </>
  )
}

export default App
