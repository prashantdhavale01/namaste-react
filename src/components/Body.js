import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

import {useEffect, useState} from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const onlineStatus = useOnlineStatus();

  // call after render component
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(!onlineStatus) { return(<h1>You looks offline!!! Please check your internet connection.</h1>)}

  return( listOfRestaurant?.length > 0 ? 
    (
      <div>
        <div className="p-1 text-center">
          <input className="p-1 m-2 border border-solid border-black" type="text" placeholder="Food / Hotel" value={searchTitle} onInput={(e)=>{setSearchTitle(e.currentTarget.value)}} />
          <button className="px-4 py-1 m-2 bg-slate-400" type="button" onClick={()=>{
            let searchFilterData = listOfRestaurant.filter((res)=> res?.info?.name.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase()));
            setFilteredRestaurant(searchFilterData);
          }}>Search</button>
          <button className="px-4 py-1 m-2 bg-slate-400" type="button" onClick={()=>{
            let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.2);
            setFilteredRestaurant(filteredList);
            }}>Top Rated Restaurant</button>
        </div>
        <div className="flex flex-wrap">
          {
            filteredRestaurant.map((restaurant) => 
              (
                <Link key={restaurant.info.id} to={"/Restaurant/"+restaurant.info.id} className="decoration-0">
                  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                </Link>
              )
            )
          }
        </div>
      </div>
    ) : (
      <ShimmerRestaurantCard />
    )
  );
}

export default Body;