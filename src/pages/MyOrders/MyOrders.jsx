import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import OrdersCard from "../../components/OrdersCard/OrdersCard.jsx";
import { ShoppingCartContext } from "../../context/Context.jsx";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
            date={order.date}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
