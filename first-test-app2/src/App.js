import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Category from "./pages/Category";
import TermsAndConditions from "./pages/TermsAndConditions";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import "./utils/utility-classes.css";
import Product from "./pages/Product";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route exact path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
          <Route path="/category/:categoryName" element={<Category/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </div>
    );
  }
}

export default App;

