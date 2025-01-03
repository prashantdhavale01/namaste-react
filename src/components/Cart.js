import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearItem = () => {
    dispatch(clearItem());
  }

  return(
    <div>
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      <div className="text-center p-2">
        <button onClick={handleClearItem} type="button" className="bg-black text-white rounded-lg p-2">Clear Cart</button>
      </div>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}
export default Cart;