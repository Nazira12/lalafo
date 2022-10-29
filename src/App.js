import { useEffect, useState } from "react";
import { Routes, Route, } from "react-router-dom";
import "./App.css"
import Header from "./components/header/Header"
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import ErrorBlock from "./components/errorBlock/ErrorBlock";
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import CreateAdPage from "./pages/createAdPage/CreateAdPage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from "./api/Api";
import {store} from "./redux/index"
import PublicRoute from "./components/routes/PublicRoute";
import PrivateRoute from "./components/routes/PrivateRoute";


function App() {
  const [housesArray, setHousesArray ]= useState([])
  const [isLoading, setLoading]= useState(true)
  
  useEffect(() => {
    Api.getHouses()
    .finally(()=>{
        setLoading(false)
    })
    .then((res) => {
        console.log(res)
        setHousesArray(res.data)
        
    })
}, [])   

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage isLoading={isLoading} housesArray={housesArray} />}/>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/login" element={
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
      }/>
      <Route path="/dashboard" element={
      <PrivateRoute>
        <DashboardPage isLoading={isLoading} housesArray={housesArray}/>
      </PrivateRoute>
      }/>
      <Route path="/create-ad" element={
       <PrivateRoute>
        <CreateAdPage /> 
       </PrivateRoute> 
      } />
      <Route path="*" element={<ErrorBlock text="Page not found" />} />
    </Routes> 
    <ToastContainer /> 
    </div>
  );
}

export default App;
