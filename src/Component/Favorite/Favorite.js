import CardComponent from "../Card/Card";
import { useEffect, useState } from "react";
import "./Favorite.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Favorite() {
  let { isAuthenticated, user } = useAuth0();
  const notify = () => toast.warn("The Movie has been delete it!");

  console.log(user);

  let getItemFromLocalStorage = localStorage.getItem("favorites_movies");
  let favoriteCopy = JSON.parse(getItemFromLocalStorage);

  const [favoriteData, setFavoriteData] = useState(favoriteCopy);

  let handleDeleteFromLocalStorage = (deleteItems) => {
    favoriteCopy.splice(deleteItems, 1);
    let favorite = [...favoriteCopy];
    setFavoriteData(favorite);
    let storedData = JSON.stringify(favorite);
    localStorage.setItem("favorites_movies", storedData);
    notify();
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

  return (
    <>
    <ToastContainer />
      <h2 style={{textAlign: "center", margin: "50px"}}>Favorite Items</h2>
      <div className="favorite_div">
        {isAuthenticated && favoriteData.length !== 0 ? (
          favoriteData.map((item, index) => {
            return (
              <CardComponent
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                genre={item.genre}
                rating={item.rating}
                location={"Favorite"}
                handleDeleteFromLocalStorage={() =>
                  handleDeleteFromLocalStorage(item.index)
                }
                email={user.email}
                showDelete={true}
                showFavorites={false}
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
