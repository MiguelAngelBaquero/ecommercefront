import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/Context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shoppi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              context.setSearchByCategory();
              context.setSearchByTitle("");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => {
              context.setSearchByCategory("clothes");
              context.setSearchByTitle("");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => {
              context.setSearchByCategory("electronics");
              context.setSearchByTitle("");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            onClick={() => {
              context.setSearchByCategory("furniture");
              context.setSearchByTitle("");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => {
              context.setSearchByCategory("toys");
              context.setSearchByTitle("");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => {
              context.setSearchByCategory("others");
              context.setSearchByTitle("");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">migue_uio93@hotmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            onClick={() => context.setSearchByTitle("")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            onClick={() => context.setSearchByTitle("")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            onClick={() => context.setSearchByTitle("")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign out
          </NavLink>
        </li>
        <li
          className="flex flex-row justify-center items-centers cursor-pointer"
          onClick={() => {
            context.openCheckoutSideMenu();
            context.closeProductDetail();
          }}
        >
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          {context.counter}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
