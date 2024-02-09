import {createContext} from 'react'


interface TodoContextType {
    todos: {
        id: null|number;
        title: null|string;
        todo: null|boolean;
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