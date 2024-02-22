import { Button } from 'react-bootstrap'
import {useContext, useState} from 'react'
import ListContext from '../context/ListContext.ts'

type todoItem = {
    id: string;
    title: string;
    todo: boolean
}

type responseTodo = todoItem & { [key: string]: any }


function GetTodos() {

    const value = useContext(ListContext)

  return (
    <>
        <Button style={{ backgroundColor: "blue" }} onClick={() => value.useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10')} >
            Get todos
        </Button>
    </>
  )
}

export default GetTodos
