import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "./Card.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cards(props) {
  console.log(props.title);
  let [show, setShow] = useState(false);

  const notify = () => toast.success("Added to favorites!");
  // const notify2 = () => toast.warn("Movies already exists in favorites!");
  const notify3 = () => toast.warn("You should to be Sign up");
  let { user, isAuthenticated } = useAuth0();

  let location = props.location;
  let handleShow = () => setShow(!show);

  // let handleSaveToLocalStorage = () => {
  //   let saveItem = [];
  //   if (localStorage.getItem("favorites_movies")) {
  //     saveItem = JSON.parse(localStorage.getItem("favorites_movies"));
  //     const movieExists = saveItem.some(item => item.id === props.id);
  
  //     if (!movieExists) {
  //       // Movie is not in the favorites, so add it
  //       saveItem.push({ ...props, email: user.email });
  //       let stringData = JSON.stringify(saveItem);
  //       localStorage.setItem("favorites_movies", stringData);
  //       notify();
  //     } else {
  //       // Movie is already in the favorites
  //       // You can handle this case, for example, by showing a message to the user
  //       notify2()
  //       console.log("Movie is already in favorites");
  //     }
  //   } else {
  //     saveItem.push({ ...props, email: user.email });
  //     let stringedData = JSON.stringify(saveItem);
  //     localStorage.setItem("favorites_movies", stringedData);
  //   }
  // };
  
  let handleSaveToLocalStorage = () => {
    let saveItem = [];
    console.log(saveItem);
    if (localStorage.getItem("favorites_movies")) {
      saveItem = JSON.parse(localStorage.getItem("favorites_movies"));
      saveItem.push({ ...props, email: user.email });
      let stringData = JSON.stringify(saveItem);
      localStorage.setItem("favorites_movies", stringData);
      notify();
    } else {
      saveItem.push({ ...props, email: user.email });
      let stringedData = JSON.stringify(saveItem);
      localStorage.setItem("favorites_movies", stringedData);
    }
  };

  return (
    <>
      <ToastContainer />
      <Card style={{ width: "20rem" }} className="card">
        <Card.Img variant="top" src={props.image} id="card-img" />
        <Card.Body className="card">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Genre: {props.genre}</Card.Text>
          <Card.Text>Rating: {props.rating}</Card.Text>
          <div
            className="button mt-auto"
            style={{ gap: "10px", display: "grid" }}
          >
            {location === "Trending" ? (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Show Description
                </Button>
                {isAuthenticated && props.showFavorites ? (
                  <Button onClick={handleSaveToLocalStorage}>
                    Add to Favorites
                  </Button>
                ) : (
                  <Button>
                    Add to Favorites
                  </Button>
                )}
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
  );
}

export default Cards;
