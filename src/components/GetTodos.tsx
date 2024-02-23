import { Button } from '@chakra-ui/react'
import { useContext } from 'react'
import ListContext from '../context/ListContext.ts'

function GetTodos() {

    const value = useContext(ListContext)

  return (
        <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => value.useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10')} >
            Get todos
        </Button>
  )
}

export default GetTodos
