import ProductItem from "../product_item/Product-Item.component";

const ProductList = ({ products, navigation }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={{ ...product, navigation }} />
      ))}
    </div>
  );
};

export default ProductList;
