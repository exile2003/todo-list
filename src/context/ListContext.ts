import {createContext} from 'react'


interface TodoContextType {
    todos: {
        id: number|null;
        title: string|null;
        todo: boolean|null;
    }[];
    togleTodo: (arg: number) => void;
}

//const nope = (arg: number) => {};

const ListContext = createContext<TodoContextType>({ 
    todos:[{
        id: null,
        title: null,
        todo: null,
     //   togleTodo: nope
    }], 
   togleTodo: () => {}
})


export default ListContext