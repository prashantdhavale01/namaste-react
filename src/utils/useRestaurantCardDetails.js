import { useEffect, useState } from "react";
import { RESTAURANT_CARD_DETAILS_API } from "./constant";

const useRestaurantCardDetails = (restId) => {
  
  const [restInfo, setRestInfo] = useState(null);

  useEffect(()=>{
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_CARD_DETAILS_API+restId);
    const json = await data.json();
    setRestInfo(json.data);
  }

  return restInfo;
}

export default useRestaurantCardDetails;