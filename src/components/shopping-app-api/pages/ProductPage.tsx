import { useDispatch, useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import ProductCard from "../components/ProductCard";
import AuthLayout from "../components/layouts/AuthLayout";
import Notification from "../components/Notification";
import { useEffect } from "react";
import { notificationActions } from "../store/notification-slice";
import { fetchCartData, sendCartData } from "../store/cart-actions";

const productList = [
  {
    id: 1,
    name: "Sunglasses",
    price: 50,
  },
  {
    id: 2,
    name: "T-shirt",
    price: 50,
  },
  {
    id: 3,
    name: "Pants",
    price: 50,
  },
  {
    id: 4,
    name: "Shoes",
    price: 150,
  },
];

let isFirstRender = true;

const ProductPage = () => {
  const dispatch = useDispatch();
  const notification = useSelector(
    (state: any) => state.notification.notification
  );
  const cart = useSelector((state: any) => state.cart);
  const { itemsList } = useSelector((state: any) => state.cart);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let total = 0;
  // eslint-disable-next-line array-callback-return
  itemsList.map((item: { totalPrice: number }) => {
    total += item.totalPrice;
  });

  useEffect(() => {
    // @ts-expect-error
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    // METHOD 1
    // const sendCartItem = async () => {
    //   // send state as sending request
    //   // // METHOD A
    //   // dispatch(
    //   //   notificationActions.showNotification({
    //   //     open: true,
    //   //     message: "Sending...",
    //   //     type: "info",
    //   //   })
    //   // );

    //   const res = await fetch(
    //     "https://redux-store-95982-default-rtdb.firebaseio.com/cartItems.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   const data = await res.json();

    //   // send state as request is successfull
    //   dispatch(
    //     notificationActions.showNotification({
    //       open: true,
    //       message: "Successfully added",
    //       type: "success",
    //     })
    //   );
    // };

    // sendCartItem().catch((err) => {
    //   // send state as error
    //   dispatch(
    //     notificationActions.showNotification({
    //       open: true,
    //       message: "Something went wrong!",
    //       type: "warning",
    //     })
    //   );
    //   //
    // });

    if (cart.changed) {
      // another method
      // @ts-expect-error
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <AuthLayout>
      <main className="pb-10">
        {notification.show && (
          <Notification
            type={"notification.type"}
            message={notification.message}
          />
        )}
        <h1 className="text-xl font-bold">Product List</h1>
        <div className="mt-5" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <br />
        {/* <div>
          <p>Items: {totalQty}</p>
          <p>Total Price: {total}</p>
          <div className="mt-4" />
        </div> */}

        {itemsList.length > 0 && (
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <CartItems />
            </div>
            <div className="mt-6 w-full md:w-1/2 ">
              <h5 className="px-2 py-1 bg-slate-600 text-sm italic text-gray-200 border border-slate-500 rounded-md rounded-b-none shadow-slate-900 shadow-md">
                data
              </h5>
              <pre className="p-2 text-xs bg-black text-gray-300 overflow-y-auto max-h-[315px] border border-t-0 border-slate-600 rounded-b shadow-slate-900 shadow-md">
                {JSON.stringify(itemsList, null, "\t")}
              </pre>
              {/* <pre className="bg-gray-200 p-5 my-3 hidden">
                {JSON.stringify(itemsList, null, 2)}
              </pre> */}
            </div>
          </div>
        )}
      </main>
    </AuthLayout>
  );
};

export default ProductPage;
