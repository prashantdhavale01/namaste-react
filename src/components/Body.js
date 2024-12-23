import {resObjList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

import {useState} from 'react'

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resObjList);

  return(
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Food / Hotel" />
        <button type="button">Search</button>
        <button type="button" onClick={()=>{
          let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.2);
            
            setListOfRestaurant(filteredList);
          }}>Top Rated Restaurant</button>
      </div>
      <div className="card-container">
        {
          listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
          )
        }
      </div>
    </div>
  );
}

export default Body;