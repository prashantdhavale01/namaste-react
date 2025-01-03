const ShimmerRestaurantCard = () => {
  return(
    <div className="flex flex-wrap pt-14">
      {Array(20).fill("").map((_, index) => (
        <div key={index} className="p-1 m-2 w-[250px] h-[340px] border border-solid whitespace-nowrap overflow-hidden overflow-ellipsis border-[#ddd]">
          <div className="h-56 w-full bg-[#f5f5f5]"></div>
          <div className="h-6 mt-2 bg-[#f5f5f5]"></div>
          <div className="h-4 mt-2 bg-[#f5f5f5]"></div>
          <div className="h-4 mt-2 bg-[#f5f5f5]"></div>
          <div className="h-4 mt-2 bg-[#f5f5f5]"></div>
        </div>
      ))}
    </div>
  );
}

export default ShimmerRestaurantCard;