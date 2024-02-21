
import {useContext, useState} from 'react'
import ListContext from '../context/ListContext.ts'
import {FormControl, Input, Popover, PopoverContent, PopoverBody} from '@chakra-ui/react'
//import { color } from 'framer-motion';
import { Offcanvas, Button, Form, InputGroup} from 'react-bootstrap';

    
function NewTodo() {

  const value = useContext(ListContext)

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(true)
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
    <Button style={{ backgroundColor: "teal" }} color="white" onClick={openForm} >
        Add new todo
    </Button>
    {/* {isFormVisible && (
        <div>
          <Popover 
            isOpen={isEditing}
            onOpen={() => setIsEditing(true)}
            onClose={() => setIsEditing(false)}
            closeOnBlur={false}
            isLazy
            lazyBehavior='keepMounted'
          
          >
            <PopoverContent>
                <PopoverBody>
                    <h1>Create new todo</h1>
                    <br />
                    <Input id="inputTitle" type="text" name="title" placeholder="Type here..." onChange={(e) => setData(e.target.value)}/>
                    <br /><br />           
                    <Button bgColor="teal" color="white" onClick={closeForm} >
                        Save
                    </Button>
                </PopoverBody>
            </PopoverContent>
            
          </Popover>
        </div>
      )} */}

    <Offcanvas show={isFormVisible} onHide={closeForm} placement="end" >
      <Offcanvas.Header closeButton >
           <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
            <h3>Create new todo</h3>
            <br />
            <Form.Control id="inputTitle" type="text" name="title" placeholder="Type here..." onChange={(e) => setData(e.target.value)}/>
            <br /><br />
            <Button color="white" onClick={saveData} >
              Save
            </Button>
      </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}

export default NewTodo
