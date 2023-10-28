import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Items added to shopping cart (counter)
  const [counter, setCounter] = useState(0);
  // Verifies if the Product Detail should be shown or not
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  // Verifies if the Checkout Side Menu should be shown or not
  const [isCheckoutSideOpen, setIsCheckoutSideOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideOpen(false);
  // Displays a product in Product Detail
  const [productToShow, setProductToShow] = useState({});
  // Adds products to the shopping cart
  const [cartProducts, setCartProducts] = useState([]);
  // Shopping Cart Order
  const [order, setOrder] = useState([]);
  // Get products
  const [items, setItems] = useState(null);
  // Filtered items by search
  const [filteredItems, setFilteredItems] = useState(null);
  // Search products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  // Fetch API
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  // Filter products by title
  const filteredItemsByTitle = (items, searchByTitle) =>
    items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  // Set filtered products to render
  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
