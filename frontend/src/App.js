import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
              <Route exact path="/" element={<Product />}></Route>
              <Route exact path="/mostviewed/product" element={<MostViewProduct />}></Route>
            </Routes>
          </div>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
