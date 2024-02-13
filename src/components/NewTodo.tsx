
import {useContext, useState} from 'react'
import ListContext from '../context/ListContext.ts'
import {Button, FormControl, Input, Popover, PopoverContent, PopoverBody} from '@chakra-ui/react'
//import { color } from 'framer-motion';

    
function NewTodo() {

  const value = useContext(ListContext)

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(true)
  const [data, setData] = useState("")

  const openForm = () => {
    setIsFormVisible(true);
  };

  const closeForm = () => {
    setIsFormVisible(false);
    console.log(data);
    value.addTodo(data)

  };


  return (
    <>
    <Button bgColor="teal" color="white" onClick={openForm} >
        NewTodo
    </Button>
    {isFormVisible && (
        <div>
          <Popover 
            isOpen={isEditing}
            onOpen={setIsEditing.on}
            onClose={setIsEditing.off}
            closeOnBlur={false}
            isLazy
            lazyBehavior='keepMounted'
          
          >
            <PopoverContent>
                <PopoverBody>
                    <h1>Create new todo</h1>
                    <br />
                    <Input type="text" name="title" placeholder="Type here..." onChange={(e) => setData(e.target.value)}/>
                    <br /><br />           
                    <Button bgColor="teal" color="white" onClick={closeForm} >
                        Save
                    </Button>
                </PopoverBody>
            </PopoverContent>
            
          </Popover>
        </div>
      )}
    </>
  )
}

export default NewTodo