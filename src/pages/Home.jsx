import { useState } from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Search from "../components/Search";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Search
        search={search}
        setSearch={setSearch}
      />
      <ProductList
        search={search}
        addToCart={addToCart}
      />
      <Cart cart={cart} />
      <Footer />
    </>
  );
}

export default Home;