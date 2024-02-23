import { createContext } from 'react'


interface TodoContextType {
    todos: {
        id: string|null;
        title: string|null;
        todo: boolean|null;
    }[];
    togleTodo: (arg: string) => void;
    addTodo: (arg: string) => void;
    useFilter: (arg: string|null) => string|null;
    useFetch: (arg: string) => void;
    useLoading: () => {loading: boolean, error: string};
}

const nope = () => {};

const ListContext = createContext<TodoContextType>({ 
    todos:[{
        id: null,
        title: null,
        todo: null,
    }], 
   togleTodo: nope,
   addTodo: nope,
   useFilter: (value) => value,
   useFetch: () => {},
   useLoading: () => ({ loading: true, error: '' })
})

export default ListContext