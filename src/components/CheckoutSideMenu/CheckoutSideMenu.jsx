import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutSideMenu.css";
import OrderCard from "../OrderCard/OrderCard.jsx";
import { totalPrice, getCurrentDate } from "../../utils/utils.js";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartContext } from "../../context/Context";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const addQuantity = (id) => {
    const productIndex = context.cartProducts.findIndex(
      (product) => product.id == id
    );
    let newCartProducts = [];
    if (productIndex >= 0) {
      newCartProducts = [...context.cartProducts];
      newCartProducts[productIndex].quantity += 1;
    }
    context.setCartProducts(newCartProducts);
  };
  const lowerQuantity = (id) => {
    const productIndex = context.cartProducts.findIndex(
      (product) => product.id == id
    );
    let newCartProducts = [];
    if (productIndex >= 0) {
      newCartProducts = [...context.cartProducts];
      if (newCartProducts[productIndex].quantity > 1) {
        newCartProducts[productIndex].quantity -= 1;
      }
    }
    context.setCartProducts(newCartProducts);
  };
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
    context.setCounter(context.counter - 1);
  };
  const handleCheckout = () => {
    const orderToAdd = {
      date: getCurrentDate(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    if (orderToAdd.totalProducts > 0 && context.counter > 0) {
      context.setOrder([...context.order, orderToAdd]);
      context.setCartProducts([]);
      context.setCounter(0);
      context.closeCheckoutSideMenu();
      navigate("/my-orders/last");
    } else {
      alert("Add one item into the cart at least.");
    }
  };
  return (
    <aside
      className={`${
        context.isCheckoutSideOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            quantity={product.quantity}
            addQuantity={addQuantity}
            lowerQuantity={lowerQuantity}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total: </span>
          <span className="font-medium text-2xl">
            $ {totalPrice(context.cartProducts)}
          </span>
        </p>
        <button
          type="button"
          className="w-full bg-black text-white rounded-lg py-3"
          onClick={() => {
            handleCheckout();
          }}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
