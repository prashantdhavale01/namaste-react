import { useState } from "react";
import ItemList from "./ItemList"

const RestaurantCategory = ({data, isOpen, setShowIndex, dummy}) => {
  
  const toggleAccordion = () => {
    setShowIndex();
  };

  return(
    <div className="flex justify-center p-1">
      <div className="text-left w-3/6 bg-[#fff] p-4 border border-solid border-[#ddd] rounded-sm">
        <div onClick={toggleAccordion} className="flex cursor-pointer justify-between">
          <span>
            <strong>{data?.title} ({data?.itemCards?.length})</strong>
          </span>
          <span className="text-right">
            {isOpen ? '⬆️' : '⬇️'}
          </span>
        </div>
        {isOpen && <ItemList items={data?.itemCards}/> }
      </div>
    </div>
  )
}

export default RestaurantCategory;