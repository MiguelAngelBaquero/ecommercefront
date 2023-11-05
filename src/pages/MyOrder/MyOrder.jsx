import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import OrderCard from "../../components/OrderCard/OrderCard.jsx";
import { ShoppingCartContext } from "../../context/Context.jsx";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;
  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
      <div className="flex justify-between items-center w-80">
        <p className="font-light text-2xl">Total: </p>
        <p className="font-medium text-2xl">
          ${context.order?.[index]?.totalPrice}
        </p>
      </div>
    </Layout>
  );
}

export default MyOrder;
