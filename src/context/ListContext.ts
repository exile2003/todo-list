import {createContext} from 'react'


interface TodoContextType {
    todos: {
        id: string|null;
        title: string|null;
        todo: boolean|null;
    }[];
    togleTodo: (arg: string) => void;
    addTodo: (arg: string) => void;
    useFilter: (arg: string|null) => string|null;
}

//const nope = (arg: number) => {};

const ListContext = createContext<TodoContextType>({ 
    todos:[{
        id: null,
        title: null,
        todo: null,
     //   togleTodo: nope
    }], 
   togleTodo: () => {},
   addTodo: () => {},
   useFilter: (value) => value,
})

export default ListContext