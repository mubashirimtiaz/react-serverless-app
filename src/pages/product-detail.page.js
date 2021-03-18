import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductOverview from "../components/product_overview/Product-Overview.component";
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();
  const { id } = useParams();
  const handleNavigation = () => {
    router("/", { replace: true });
  };
  useEffect(() => {
    setIsLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/airtable?id=${id}`);
        const data = await response.json();
        return data;
      } catch (err) {
        setError(true);
      }
    };
    fetchProduct().then((product) => {
      setProduct(product);
      setIsLoading(false);
    });
  }, [id]);

  if ((!isLoading && !isError && !product) || isLoading) {
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
      <button
        onClick={handleNavigation}
        className="mb-4 text-blue-500 hover:text-blue-600"
      >
        Go back to Home
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:container sm:mx-auto">
        <ProductOverview product={product} />
      </div>
    </>
  );
};
export default ProductDetail;
