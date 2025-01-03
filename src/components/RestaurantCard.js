import { useContext } from "react";
import {IMAGE_CDN_URL} from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {

  const {resData} = props;
  const {name, avgRatingString, cuisines, costForTwo, deliveryTime, cloudinaryImageId} = resData.info; 
  const {loggedUser} = useContext(UserContext);

  return(
    <div className="p-1 m-2 w-[250px] h-[360px] border border-solid whitespace-nowrap overflow-hidden overflow-ellipsis border-[#ddd] hover:cursor-pointer hover:border-[#333]">
      <img className="h-56 w-full object-cover" src={IMAGE_CDN_URL+cloudinaryImageId} height="220" />
      <div className="text-lg font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">{name}</div>
      <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">{avgRatingString} • {deliveryTime} mins</div>
      <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">{cuisines.join(', ')}</div>
      <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">{costForTwo}</div>
      <div className="whitespace-nowrap overflow-hidden overflow-ellipsis font-bold">{loggedUser}</div>
    </div>
  );
}

export default RestaurantCard;