import { useSelector } from "react-redux";
import ProductPage from "../components/shopping-app/pages/ProductPage";
import Login from "../components/shopping-app/pages/Login";

const ShoppingApp = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  // EXAMPLE
  // const cartItems = useSelector((state: any) => state.cart.itemsList);
  // const { itemsList, totalQty } = useSelector((state: any) => state.cart);

  // const addToCart = () => {
  //   console.log("first");
  //   dispatch(
  //     cartActions.addToCart({
  //       name: "item1",
  //       id: 1,
  //       price: 5,
  //     })
  //   );
  // };

  if (isLoggedIn) return <ProductPage />;

  return <Login />;
};

export default ShoppingApp;
