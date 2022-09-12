import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

const tableHeader = ["#", "Name", "Price", "Quantity", "Sub-total"];

const CartItems = () => {
  const cartItems = useSelector((state: any) => state.cart.itemsList);
  const dispatch = useDispatch();

  const decrementItem = (id: number) => {
    dispatch(cartActions.removeFromCart(id));
    return;
  };

  const incrementItem = (name: any, id: any, price: any) => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Your Cart</h1>
      <div className="mt-5" />
      <table className=" whitespace-pre overflow-x-scroll table-auto xtable-fixed w-full md:w-[95%] text-center">
        <thead>
          <tr>
            {tableHeader.map((item, i) => (
              <th key={i} className="border px-4 py-2">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item: any, i: number) => (
            <tr key={i}>
              <td className="border px-4 py-2">{i + 1}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2">
                <button
                  className="px-2 bg-slate-200 rounded-lg font-semibold"
                  onClick={() => decrementItem(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="px-2 bg-slate-200 rounded-lg font-semibold"
                  onClick={() => incrementItem(item.name, item.id, item.price)}
                >
                  +
                </button>
              </td>
              <td className="border px-4 py-2">{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
