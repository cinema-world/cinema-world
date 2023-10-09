import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function Cards(props) {
    let [show, setShow] = useState(false);

    let handleShow = () => setShow(!show);
    let handleSaveToLocalStorage = () => {
      let saveItem = [];
  
      if (localStorage.getItem("favorite")) {
        saveItem = JSON.parse(localStorage.getItem("favorite"));
      }
  
      let data = {
        name: props.title,
        image: props.image,
        // description: props.description,
      };
      saveItem.push(data);
  
      let stringData = JSON.stringify(saveItem);
      localStorage.setItem("favorite", stringData);
    };
    return (
        <>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.genre}
          </Card.Text>
          
          <Card.Text>
            Rating: {props.rating}
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>Show Description</Button>
          <Button variant="primary" onClick={handleSaveToLocalStorage}>ADD Favorite</Button>
        </Card.Body>
     
      
        
      </Card>


      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default Cards;