import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductState from "./context/ProductState";
import MostViewProduct from "./components/MostViewProduct";

function App() {
  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/product" element={<Product />}></Route>
              <Route exact path="/mostviewed/product" element={<MostViewProduct />}></Route>
            </Routes>
          </div>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
