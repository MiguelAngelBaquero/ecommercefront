import { useContext } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import Card from "../../components/Card/Card.jsx";
import ProductDetail from "../../components/ProductDetail/ProductDetail.jsx";
import { ShoppingCartContext } from "../../context/Context";

function Home() {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    const itemsToRender = context.filteredItems;
    if (itemsToRender?.length > 0) {
      return itemsToRender?.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <p>No results found</p>;
    }
  };
  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="search"
        value={context.searchByTitle ? context.searchByTitle : ""}
        placeholder="Search products"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
