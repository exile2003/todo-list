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
    addData: (arg: Response) => void
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
   addData: (value) => {}
})

export default ListContext