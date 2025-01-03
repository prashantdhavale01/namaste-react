import { useState } from "react";
import { useParams } from "react-router";
import { IMAGE_CDN_URL } from "../utils/constant"
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import useRestaurantCardDetails from "../utils/useRestaurantCardDetails";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantCardDetails = () => {

  const {restId} = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const toggleAccordion = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  }  
  
  //Custom Hook
  const restInfo = useRestaurantCardDetails(restId);

  const cardInfo = restInfo?.cards[2]?.card?.card?.info;
  const recommendedCards = restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards[1]?.card?.card?.itemCards;
  const categories = restInfo?.cards[4].groupedCard.cardGroupMap.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(categories);

  if(restInfo === null){ return <ShimmerRestaurantCard />};

  return(
    <div>
      <div className="flex justify-center p-2">
        <div className="text-left w-3/6 bg-[#fff] p-3 border border-solid border-[#ddd] rounded-sm">
          <img className="h-48 w-full object-cover" src={IMAGE_CDN_URL+cardInfo?.cloudinaryImageId} />
          <div className="mt-3"><strong>{cardInfo?.name}</strong></div>
          <div>{cardInfo?.costForTwoMessage} - {cardInfo?.avgRatingString}</div>
          <div>{cardInfo?.locality}, {cardInfo?.city}</div>
        </div>
      </div>

      {categories?.map((category, index) => (
        // Controlled Component
        <RestaurantCategory 
          key={category?.card.card?.title} 
          data={category?.card.card} 
          isOpen={index === showIndex && true}
          setShowIndex = {() => toggleAccordion(index)}
        />
      ))} 
        
    </div>
  );
}

export default RestaurantCardDetails;