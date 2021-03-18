import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.page";
import About from "./pages/about.page";
import ProductOutlet from "./pages/product-outlet.page";
import Product from "./pages/product.page";
import Navbar from "./components/navbar/Navbar.component";
import ProductDetail from "./pages/product-detail.page";

function App() {
  return (
    <div className="bg-gray-100 text-gray-700 min-h-screen">
      <Navbar />
      <div className="container mx-auto my-10 px-2  md:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductOutlet />}>
            <Route path="/" element={<Product />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
