import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import SignUp from "../signUp/SignUp";
import SignIn from "../signIn/SignIn";
import Footer from "../footer/Footer";
import CartView from "../cartView/CartView";
import NavBar from "../navBar/NavBar";
import ProductDetails from "../productDetails/ProductDetails";
import UserProfile from "../userProfile/UserProfile";
import Shop from "../shop/Shop";
import Checkout from "../checkout/Checkout";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Route path="/" exact render={(props) => <Shop {...props} />} />
        <Route path="/signup" render={(props) => <SignUp {...props} />} />
        <Route path="/signin" render={(props) => <SignIn {...props} />} />
        <Route
          path="/product-details"
          render={(props) => <ProductDetails {...props} />}
        />
        <Route path="/cart" render={(props) => <CartView {...props} />} />
        <Route path="/checkout" render={(props) => <Checkout {...props} />} />
        <Route
          path="/user-profile"
          render={(props) => <UserProfile {...props} />}
        />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
