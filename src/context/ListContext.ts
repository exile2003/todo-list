import {createContext} from 'react'

const nope = () => {};

const ListContext = createContext({ 
    todos:[{
        id: null,
        title: null,
        todo: null,
     //   togleTodo: nope
    }], 
   togleTodo: nope
})


export default ListContext