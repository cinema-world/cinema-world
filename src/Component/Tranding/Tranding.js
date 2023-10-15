import { useEffect, useState } from "react";
import CardsComponent from "../Card/Card";
// import NavBar from "../NavBar/NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Tranding.css";

function Tranding() {
  let [movies, setMovies] = useState([]);
  let [showError, setShowError] = useState(false);

  let getMovieData = async () => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0b4c1cb477msh330f6bb7e4c4bb3p1f6c45jsn127c9c9cb982",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  let handleSearchInput = (e) => {
    e.preventDefault();
    let getValue = e.target.search.value;
    const filterItems = movies.filter((item) => {
      return item.title.toLowerCase().includes(getValue.toLowerCase());
    });
    if (filterItems.length > 0) {
      setMovies(filterItems);
    } else {
      setShowError(true);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <>
      <Form className="d-flex" onSubmit={handleSearchInput} style={{margin:"50px 100px 30px 100px" }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="search"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
      <div className="trend_div">
        {showError ? (
          <a href="/trend_movie">
            Not found the result try another one! <br />{" "}
          </a>
        ) : (
          movies.map((movie, index) => {
            return (
              <CardsComponent
                key={index}
                id={movie.id}
                title={movie.title}
                description={movie.description}
                image={movie.image}
                genre={movie.genre[0]}
                rating={movie.rating}
                location={"Trending"}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default Tranding;