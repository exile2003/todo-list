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
    <div className="d-flex justify-content-center" >
        <Button style={{ backgroundColor: "blue", width: '130px' }} onClick={() => value.useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10')} >
            Get todos
        </Button>
    </div>
  )
}

export default GetTodos
