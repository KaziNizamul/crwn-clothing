import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/Hompage.component";
import ShopPage from "./pages/ShopPage/Shoppage.component";
import SignInAndSignUp from "./pages/SignIn-and-SignUp/signIn-and-signUp.component";

import Header from "../src/components/header/header.component";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
