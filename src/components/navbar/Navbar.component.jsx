import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-400 shadow-md text-white px-2 md:p-0">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/">
          <img src="/assets/logo.svg" alt="serverless" />
        </Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="about" className="ml-3 md:ml-6">
            About
          </Link>
          <Link to="products" className="ml-3 md:ml-6">
            Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
