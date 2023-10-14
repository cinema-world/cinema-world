import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import './Card.css';
import { useAuth0 } from '@auth0/auth0-react';

function Cards(props) {
  // console.log(props);
  let [show, setShow] = useState(false);

  let { user, isAuthenticated } = useAuth0();

  let location = props.location;
  let handleShow = () => setShow(!show);

  let handleSaveToLocalStorage = () => {
    let saveItem = [];
    console.log(saveItem);
    if (localStorage.getItem("favorites_movies")) {
      saveItem = JSON.parse(localStorage.getItem("favorites_movies"));
      saveItem.push({ ...props, email: user.email })

      let stringData = JSON.stringify(saveItem);
      localStorage.setItem("favorites_movies", stringData);

    }

    else {

      let saveItem = [];
      saveItem.push({ ...props, email: user.email })
      let stringedData = JSON.stringify(saveItem)

      localStorage.setItem("favorites", stringedData)

    }

    let data = {
      name: props.title,
      image: props.image,
      description: props.description,
      genre: props.genre,
      rating: props.rating
    };
    saveItem.push(data);


    let stringData = JSON.stringify(saveItem);
    localStorage.setItem("favorites_movies", stringData);

  };

  return (
    <>

      <Card style={{ width: "20rem" }} className="card">
        <Card.Img variant="top" src={props.image} id="card-img" />
        <Card.Body className="card">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Genre: {props.genre}
          </Card.Text>

          <Card.Text>
            Rating: {props.rating}
          </Card.Text>
          <div className="button mt-auto" style={{ gap: "10px", display: "grid" }}>
            {location === "Trending" ? (
              <>
                <Button variant="primary" onClick={handleShow}>Show Description</Button>
                {/* <Button onClick={handleSaveToLocalStorage}>Add to Favorite</Button> */}


                {isAuthenticated && props.showFavorites ? <Button onClick={handleSaveToLocalStorage}>Add to Favorites</Button>
                  : <Button onClick={handleSaveToLocalStorage} >Add to Favorites</Button>
                }



              </>
            ) : null}
            {location === "Favorite" ? (
              <>
                <Button onClick={handleShow}>Show Description</Button>
                {/* <Button onClick={props.handleDeleteFromLocalStorage}>
                Delete
              </Button> */}

                {props.showDelete ? <Button onClick={props.handleDelete}>Delete</Button> : <Button onClick={props.handleDelete}>Delete</Button>}

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