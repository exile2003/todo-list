import {useContext, useState} from 'react'
import ListContext from '../context/ListContext.ts'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input
} from '@chakra-ui/react'


    
function NewTodo() {

  const value = useContext(ListContext)

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [data, setData] = useState("")


  const openForm = () => {
    setIsFormVisible(true);
  };

  const saveData = () => {
    setIsFormVisible(false);
    value.addTodo(data);
    setData("");
  };

  const closeForm = () => {
    setIsFormVisible(false);
    setData("");
  };


  return (
    <>
    <Button colorScheme="teal" onClick={openForm} >
        Add new todo
    </Button>
           
    <Drawer isOpen={isFormVisible} placement="right" onClose={closeForm}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create new todo</DrawerHeader>

          <DrawerBody>
            <Input
              placeholder="Type here..."
              onChange={(e) => setData(e.target.value)}
              autoFocus
            />
            <br /><br />
             <Button variant="outline" ml={'36%'} onClick={closeForm}>
              Cancel
            </Button>
            <Button colorScheme="blue" ml= {5} onClick={saveData}>
              Save
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
)}

export default NewTodo