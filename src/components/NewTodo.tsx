import {useContext, useState} from 'react'
import ListContext from '../context/ListContext.ts'
import { Offcanvas, Button, Form} from 'react-bootstrap';

    
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
      <Button style={{ backgroundColor: "teal" }} color="white" onClick={openForm} >
          Add new todo
      </Button>
      
      <Offcanvas show={isFormVisible} onHide={closeForm} placement="end" >
        <Offcanvas.Header closeButton >
            <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
              <h3>Create new todo</h3>
              <br />
              <Form.Control id="inputTitle" type="text" name="title" placeholder="Type here..." onChange={(e) => setData(e.target.value)}/>
              <br /><br />
              <Button style={{ backgroundColor: "teal" }} color="white" onClick={saveData} >
                Save
              </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NewTodo
