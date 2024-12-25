import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMAGE_CDN_URL, RESTAURANT_RECOMMENDED_IMAGE, RESTAURANT_CARD_DETAILS_API} from "../utils/constant"
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";


const RestaurantCardDetails = () => {

  const {restId} = useParams();
  const [restInfo, setRestInfo] = useState(null);
  
  useEffect(()=>{
    fetchMenu()
  }, []);
  
  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_CARD_DETAILS_API+restId);
    const json = await data.json();
    setRestInfo(json.data);
  }
  const cardInfo = restInfo?.cards[2]?.card?.card?.info;
  const recommendedCards = restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[1]?.card?.card?.itemCards;
  console.log(restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards);

  if(restInfo === null){ return <ShimmerRestaurantCard />};

  return(
    <div>
      <div className="restaurant-card-details">
        <div className="content">
          <img className="card-image" src={IMAGE_CDN_URL+cardInfo?.cloudinaryImageId} height={260} width={'100%'} style={{objectFit:'cover'}} />
          <div><strong>{cardInfo?.name}</strong></div>
          <div>{cardInfo?.costForTwoMessage} - {cardInfo?.avgRatingString}</div>
          <div>{cardInfo?.locality}, {cardInfo?.city}</div>
        </div>
      </div>
      <div className="restaurant-card-details">
        <div className="content">
          <div><strong>Recommended ({recommendedCards?.length})</strong></div>
          {
            recommendedCards?.map((item) => (
              <div key={item?.card?.info?.id} className="recommended-list">
                <div>
                  <div>{item?.card?.info?.isVeg ? "V - " : "N - "} <strong>{item?.card?.info?.name}</strong></div>
                  <div>&#8377; {item?.card?.info?.defaultPrice / 100}</div>
                  <div>☆ {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})</div>
                  <div>{item?.card?.info?.description}</div>
                </div>
                <div>
                  <div><img className="card-image" src={RESTAURANT_RECOMMENDED_IMAGE+item?.card?.info?.imageId} height={100} width={120} style={{objectFit:'cover'}} /></div>
                  <div>Customizable</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default RestaurantCardDetails;