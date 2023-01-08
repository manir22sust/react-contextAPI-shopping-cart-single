import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Cart } from "./components/Cart";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <div className="titleWrapper">
        <h1>useReducer Hook</h1>
      </div>
      <div className="linksWrapper">
        <Link to="/"> Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
