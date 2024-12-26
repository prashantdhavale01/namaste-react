import { useParams } from "react-router";
import { IMAGE_CDN_URL, RESTAURANT_RECOMMENDED_IMAGE } from "../utils/constant"
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import useRestaurantCardDetails from "../utils/useRestaurantCardDetails";


const RestaurantCardDetails = () => {

  const {restId} = useParams();
  
  //Custom Hook
  const restInfo = useRestaurantCardDetails(restId);

  const cardInfo = restInfo?.cards[2]?.card?.card?.info;
  const recommendedCards = restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[1]?.card?.card?.itemCards;
  console.log(restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards);

  if(restInfo === null){ return <ShimmerRestaurantCard />};

  return(
    <div>
      <div className="flex justify-center bg-[#f5f5f5] p-2">
        <div className="text-left w-2/4 bg-[#fff] p-2 border border-solid border-[#ddd]">
          <img className="h-80 w-full object-cover" src={IMAGE_CDN_URL+cardInfo?.cloudinaryImageId} />
          <div><strong>{cardInfo?.name}</strong></div>
          <div>{cardInfo?.costForTwoMessage} - {cardInfo?.avgRatingString}</div>
          <div>{cardInfo?.locality}, {cardInfo?.city}</div>
        </div>
      </div>
      <div className="flex justify-center bg-[#f5f5f5] p-2">
        <div className="text-left w-2/4 bg-[#fff] p-5 border border-solid border-[#ddd]">
          <div><strong>Recommended ({recommendedCards?.length})</strong></div>
          {
            recommendedCards?.map((item) => (
              <div key={item?.card?.info?.id} className="flex justify-between p-3 mt-2 border border-solid border-[#ddd]">
                <div className="pr-2">
                  <div>{item?.card?.info?.isVeg ? "V - " : "N - "} <strong>{item?.card?.info?.name}</strong></div>
                  <div>&#8377; {item?.card?.info?.defaultPrice / 100}</div>
                  <div>☆ {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})</div>
                  <div>{item?.card?.info?.description}</div>
                </div>
                <div>
                  <div><img className="h-[100] mw-[120] object-cover" src={RESTAURANT_RECOMMENDED_IMAGE+item?.card?.info?.imageId} /></div>
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