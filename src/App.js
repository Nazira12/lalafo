import { useEffect, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import Header from "./components/header/Header"
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ErrorBlock from "./components/errorBlock/ErrorBlock";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="*" element={<ErrorBlock text="Page not found" />} />
    </Routes>  
    </div>
  );
}

export default App;
