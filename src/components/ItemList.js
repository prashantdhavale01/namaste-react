import { handleImageError, isObjectEmpty, LOGO_URL, RESTAURANT_RECOMMENDED_IMAGE } from "../utils/constant"

const ItemList = ({items}) => {
  console.log(items);
  return(
    items?.map((item) => (
      <div key={item?.card?.info?.name} className="flex justify-between p-3 mt-2 border border-solid border-[#ddd] rounded-xl">
        <div className="pr-2">
          <div>{item?.card?.info?.isVeg ? "🟢 " : "🔴 "} <strong>{item?.card?.info?.name}</strong></div>
          <div>&#8377; {item?.card?.info?.price / 100}</div>
          <div>{
            isObjectEmpty(item?.card?.info?.ratings?.aggregatedRating) ? "-" : 
            (<>
              ☆ {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCount})
            </>)
          }
          </div>
          <div>{item?.card?.info?.description}</div>
        </div>
        <div>
          <div className="h-[100] w-[120] relative">
            <img className="h-full w-full object-cover border border-solid border-[#ddd] rounded-lg" src={item?.card?.info?.imageId ? (RESTAURANT_RECOMMENDED_IMAGE+item?.card?.info?.imageId) : LOGO_URL} onError={handleImageError} />
            <button type="button" className="bg-white px-3 border border-solid border-[#999] rounded-md absolute left-0 right-0 m-auto -bottom-3 w-20 font-bold text-green-700">+ Add</button>
          </div>
          <div className="text-sm text-center text-gray-500 mt-4">Customizable</div>
        </div>
      </div>
    ))
  )
}

export default ItemList;