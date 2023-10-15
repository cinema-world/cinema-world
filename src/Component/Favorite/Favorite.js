import CardComponent from "../Card/Card";
import { useEffect, useState } from "react";
import "./Favorite.css";
import { useAuth0 } from "@auth0/auth0-react";

function Favorite() {
  let { isAuthenticated, user } = useAuth0();
  console.log(user);

  let getItemFromLocalStorage = localStorage.getItem("favorites_movies");
  let favoriteCopy = JSON.parse(getItemFromLocalStorage);

  const [favoriteData, setFavoriteData] = useState([favoriteCopy]);

  let handleDeleteFromLocalStorage = (deleteItems) => {
    favoriteCopy.splice(deleteItems, 1);
    let favorite = [...favoriteCopy];
    setFavoriteData(favorite);
    let storedData = JSON.stringify(favorite);
    localStorage.setItem("favorites_movies", storedData);
  };

  function filterByEmail() {
    // console.log(isAuthenticated)
    if (isAuthenticated) {
      let filteredData = favoriteCopy.filter(function (item) {
        return user.email === item.email;
      });
      setFavoriteData(filteredData);
    }
  }
  useEffect(()=> {
    filterByEmail()
  },[])
  // useEffect(() => {
  //   const getItemFromLocalStorage = localStorage.getItem("favorites_movies");
  //   if (getItemFromLocalStorage) {
  //     const favoriteCopy = JSON.parse(getItemFromLocalStorage);
  //     if (isAuthenticated) {
  //       const filteredData = favoriteCopy.filter((item) => user.email === item.email);
  //       setFavoriteData(filteredData);
  //     } else {
  //       setFavoriteData(favoriteCopy);
  //     }
  //   }
  // }, [isAuthenticated, user.email]);

  // const handleDeleteFromLocalStorage = (itemName) => {
  //   const updatedFavorites = favoriteData.filter((item) => item.name !== itemName);
  //   setFavoriteData(updatedFavorites);
  //   localStorage.setItem("favorites_movies", JSON.stringify(updatedFavorites));
  // };

  return (
    <>
      <h2>Favorite Items</h2>
      <div className="favorite_div">
        {isAuthenticated && favoriteData.length !== 0 ? (
          favoriteData.map((item, index) => {
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
                  handleDeleteFromLocalStorage(item.name)
                }
                email={user.email}
                showDelete={false}
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
