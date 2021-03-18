import { useState, useEffect } from "react";
import ProductList from "../components/product_list/Product-List.component";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/airtable");
        const data = response.json();
        return data;
      } catch (err) {
        setError(true);
      }
    };
    fetchProducts().then((products) => {
      setProducts(products);
      setIsLoading(false);
    });
  }, []);
  if ((!isLoading && !isError && products.length <= 0) || isLoading) {
    return (
      <div className="container mx-auto text-center">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto text-center">
        <p className="text-2xl">Something went wrong!</p>
      </div>
    );
  }
  return (
    <>
      <ProductList products={products} navigation={true} />
    </>
  );
};

export default Product;
