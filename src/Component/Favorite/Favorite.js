import CardComponent from '../Card/Card';
import { useEffect, useState } from 'react';
import './Favorite.css';
import { useAuth0 } from '@auth0/auth0-react';

function Favorite() {

  let { isAuthenticated, user } = useAuth0()
  console.log(user)

  // const [favoriteData, setFavoriteData] = useState([]);

  // let getItemFromLocalStorage = () => {
  //   const getDataFromLocal = JSON.parse(localStorage.getItem("favorites_movies"));

  //   if (getDataFromLocal) {
  //     setFavoriteData(getDataFromLocal);
  //   }
  // };

  let getItemFromLocalStorage = localStorage.getItem("favorites");
  let favoriteCopy = JSON.parse(getItemFromLocalStorage);
  const [favoriteData, setFavoriteData] = useState([favoriteCopy]);


  let handleDeleteFromLocalStorage = (deleteItems) => {
    favoriteCopy.splice(deleteItems, 1);
    let favorite = [...favoriteCopy];
    setFavoriteData(favorite);
    let storedData = JSON.stringify(favorite);
    localStorage.setItem("favorites_movies", storedData);

  }





  // let handleDeleteFromLocalStorage = (deleteItems) => {
  //   const favoriteCopy = [...favoriteData];
  //   const itemIndex = favoriteCopy.findIndex(
  //     (item) => item.name === deleteItems
  //   );

  //   if (itemIndex !== -1) {
  //     favoriteCopy.splice(itemIndex, 1);
  //     setFavoriteData(favoriteCopy);
  //     localStorage.setItem("favorites_movies", JSON.stringify(favoriteCopy));
  //   }
  // };


  function filterByEmail() {
    console.log(isAuthenticated)
    if (isAuthenticated) {
      let filteredData = favoriteCopy.filter(function (item) {
        return user.email === item.email
      })
      setFavoriteData(filteredData)
    }
  }

  // useEffect(() => {
  //   getItemFromLocalStorage()
  // }, []);

  useEffect(function () { filterByEmail() }, []);

  return (
    <>
      <h2>Favorite Items</h2>
      <div className="favorite_div">
        {isAuthenticated && favoriteData.length !== 0 
          ? (favoriteData.map((item, index) => {
            return (
              <CardComponent
                key={index}
                image={item.image}
                title={item.name}
                description={item.description}
                genre={item.genre}
                rating={item.rating}
                location={"Favorite"}
                handleDeleteFromLocalStorage={() =>
                  handleDeleteFromLocalStorage(item.name)}
                email={user.email}
                showDelete={true}
              />
            );
          })
         ) : (
          <h1>Add some Favorite Movies, Please</h1>
        )}
      </div>
    </>
  );
}

export default Favorite;