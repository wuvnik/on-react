import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import ProductCard from "../components/ProductCard";
import AuthLayout from "../components/layouts/AuthLayout";

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

const ProductPage = () => {
  const { itemsList } = useSelector((state: any) => state.cart);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let total = 0;
  // eslint-disable-next-line array-callback-return
  itemsList.map((item: { totalPrice: number }) => {
    total += item.totalPrice;
  });

  return (
    <AuthLayout>
      <main className="pb-10">
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
