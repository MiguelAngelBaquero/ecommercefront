import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../context/Context.jsx";
import Home from "../Home/Home.jsx";
import MyAccount from "../MyAccount/MyAccount.jsx";
import MyOrder from "../MyOrder/MyOrder.jsx";
import MyOrders from "../MyOrders/MyOrders.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import SignUp from "../SignUp/SignUp.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import CheckoutSideMenu from "../../components/CheckoutSideMenu/CheckoutSideMenu.jsx";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
    // Broken path / not found
    { path: "/*", element: <NotFound /> },
    // Router categories
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
