import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ProductCard = ({ name, id, price }: any) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="flex flex-col items-center p-3 border shadow-sm rounded-md">
      <div className="w-32 h-32 bg-slate-200 rounded"></div>
      <p>{name}</p>
      <p>${price}</p>
      <button
        className="mt-5 flex px-4 bg-gray-600 rounded text-white"
        onClick={addItemToCart}
      >
        Buy this
      </button>
    </div>
  );
};

export default ProductCard;
