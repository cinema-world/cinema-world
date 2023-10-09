import CardComponent from '../Card/Card';
import {useEffect, useState} from 'react';

function Favorite() {
    const [favoriteData, setFavoriteData] = useState([]);

    let getItemFromLocalStorage = () => {
        const getDataFromLocal = JSON.parse(localStorage.getItem("favorites_movies"));
    
        if (getDataFromLocal) {
          setFavoriteData(getDataFromLocal);
        }
      };

      let handleDeleteFromLocalStorage = (deleteItems) => {
        const favoriteCopy = [...favoriteData];
        const itemIndex = favoriteCopy.findIndex(
          (item) => item.name === deleteItems
        );
    
        if (itemIndex !== -1) {
          favoriteCopy.splice(itemIndex, 1);
          setFavoriteData(favoriteCopy);
          localStorage.setItem("favorites_movies", JSON.stringify(favoriteCopy));
        }
      };

      useEffect (()=> {
        getItemFromLocalStorage()
      }, []);
    return (
        <>
        <h2>Favorite Items</h2>
      <div className="favorite_div">
        {favoriteData.length !== 0 ? (
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
                handleDeleteFromLocalStorage(item.name)}
              />
            );
          })
        ) : (
          <h1>Add some Favorite Movies, Pleas</h1>
        )}
      </div>
        </>
    )
}

export default Favorite;