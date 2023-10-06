import { useEffect, useState } from "react";
import CardsComponent from "../Card/Card";


function Tranding() {
  let [movies, setMovies] = useState([]);
console.log(movies);
  let getMovieData = async () => {

    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eefbee0a44msh65cbf17ffd926b4p1eaddfjsn52051de9998c',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    setMovies(result);
	console.log(result.data);
} catch (error) {
	console.log(error);
}
  };

  useEffect(() => {
    getMovieData();
  },[]);
  return (
    <>

       {movies.map((movie, index) => {
        return (
        <CardsComponent
        key={index}
        id={movie.id}
        title={movie.title}
        description={movie.description}
        image={movie.image}
        genre={movie.genre[0]}
        rating={movie.rating}
        />
        )
       })
       }
    </>
  );
}

export default Tranding;
