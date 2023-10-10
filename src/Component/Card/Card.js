import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import './Card.css';

function Cards(props) {
  // console.log(props);
    let [show, setShow] = useState(false);
    let location = props.location;
    let handleShow = () => setShow(!show);

    let handleSaveToLocalStorage = () => {
      let saveItem = [];
      console.log(saveItem);
      if (localStorage.getItem("favorites_movies")) {
        saveItem = JSON.parse(localStorage.getItem("favorites_movies"));
      }
  
      let data = {
        name: props.title,
        image: props.image,
        description: props.description,
        genre:props.genre,
        rating: props.rating
      };
      saveItem.push(data);
  
      let stringData = JSON.stringify(saveItem);
      localStorage.setItem("favorites_movies", stringData);

    };
    return (
        <>

        <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body className="card">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          Genre: {props.genre}
          </Card.Text>
          
          <Card.Text>
            Rating: {props.rating}
          </Card.Text>
          <div className="button mt-auto" style={{gap: "10px", display: "grid"}}>
          {location === "Trending" ? (
            <>
            <Button variant="primary" onClick={handleShow}>Show Description</Button>
              <Button onClick={handleSaveToLocalStorage}>Add to Favorite</Button>
            </>
          ) : null}
          {location === "Favorite" ? (
            <>
              <Button onClick={handleShow}>Show Description</Button>
              <Button onClick={props.handleDeleteFromLocalStorage}>
                Delete
              </Button>
            </>
          ) : null}
        </div>
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