import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axiosinstance from "../fetch/Axiosinstance";

export default function ProductList({ search, addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axiosinstance();
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}