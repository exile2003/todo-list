import {Button, } from '@chakra-ui/react'
import {useContext, useState} from 'react'
import ListContext from '../context/ListContext.ts'

function GetTodos() {

    const value = useContext(ListContext)

    const getData = async (URL) => {
        let res = await fetch(URL);
        res = await res.json();
        console.log(res)
        value.addData(res);
    }

  return (
    <>
        <Button bgColor="blue" color="white" onClick={() => getData('https://jsonplaceholder.typicode.com/todos?_limit=10')} >
            Get todos
        </Button>
    </>
  )
}

export default GetTodos