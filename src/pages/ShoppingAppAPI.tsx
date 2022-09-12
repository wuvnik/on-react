import { useSelector } from "react-redux";
import Login from "../components/shopping-app-api/pages/Login";
import ProductPage from "../components/shopping-app-api/pages/ProductPage";

const ShoppingAppAPI = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  if (isLoggedIn) return <ProductPage />;

  return <Login />;
};

export default ShoppingAppAPI;
