import { Link } from "react-router-dom";
const ProductItem = ({ product }) => {
  const {
    id,
    name,
    image: { url },
    price,
    navigation,
  } = product;
  return (
    <div className="flex flex-col shadow-md rounded overflow-hidden">
      {navigation ? (
        <Link to={`${id}`}>
          <img src={url} alt={name} />
        </Link>
      ) : (
        <img src={url} alt={name} />
      )}

      <div className="p-3 flex justify-between items-center my-auto">
        <h3 className="uppercase text-xl">{name}</h3>
        <p>
          <span className="text-xl text-gray-500">$</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
