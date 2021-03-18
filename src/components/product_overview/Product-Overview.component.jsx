const ProductOverview = ({ product }) => {
  return (
    <>
      <div className="rounded overflow-hidden m-auto">
        <img src={product.url} alt={product.name} />
      </div>
      <div className="m-auto">
        <h1 className="text-2xl uppercase font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <div className="flex justify-end">
          <p>${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
