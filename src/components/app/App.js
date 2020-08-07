import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "../footer/Footer";
import CartView from "../cartView/CartView";
import NavBar from "../navBar/NavBar";
import ProductDetails from "../productDetails/ProductDetails";
import UserProfile from "../userProfile/UserProfile";
import Shop from "../shop/Shop";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavBar />
          <Route path="/" exact render={(props) => <Shop {...props} />} />
          <Route
            path="/product-details"
            render={(props) => <ProductDetails {...props} />}
          />
          <Route path="/cart" render={(props) => <CartView {...props} />} />
          <Route
            path="/user-profile"
            render={(props) => <UserProfile {...props} />}
          />
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
