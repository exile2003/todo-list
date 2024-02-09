
import {useContext, useState} from 'react'
import ListContext from '../context/ListContext.ts'
import {Button, FormControl, Input} from '@chakra-ui/react'
import { color } from 'framer-motion';

    
function NewTodo() {

  const value = useContext(ListContext)

  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };


  return (
    <>
    <Button bgColor="teal" color="white" onClick={openForm} >
        NewTodo
    </Button>
    {isFormVisible && (
        <div>
          <FormControl 
            style={{
                borderWidth: "2px",
                borderColor: "gray.300",
                borderRadius: "8px",
            }}
          >
            <h1>Create new todo</h1>
            <br />
            <Input type="text" name="title" placeholder="Type here..." />
            <br /><br />           
            <Button bgColor="teal" color="white" onClick={closeForm} >
                Save
            </Button>
          </FormControl>
        </div>
      )}
    </>
  )
}

export default NewTodo