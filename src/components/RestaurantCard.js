import {IMAGE_CDN_URL} from "../utils/constant";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name, avgRatingString, cuisines, costForTwo, deliveryTime, cloudinaryImageId} = resData.info; 
  return(
    <div className="card">
      <img className="card-image" src={IMAGE_CDN_URL+cloudinaryImageId} height="220" />
      <h3>{name}</h3>
      <div>{avgRatingString} • {deliveryTime} mins</div>
      <div>{cuisines.join(', ')}</div>
      <div>{costForTwo}</div>
    </div>
  );
}

export default RestaurantCard;