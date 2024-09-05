import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";

import AdminDashboard from "../Admin/Dashboard/AdminDashboard";

import { useSelector } from "react-redux";

import CreateRestaurantForm from "../Admin/AddRestaurants/CreateRestaurantForm";
import AdminRouters from "./AdminRouters";

const Routers = () => {
  const { auth } = useSelector((store) => store);

  return (
    <>
   
    <Routes>
      
      <Route
        path="/admin/restaurant/*"
        element={<AdminRouters/>}
      />
      <Route
        path="/admin"
        element={<AdminDashboard/>}
      />
      <Route path="/*" element={<CustomerRoutes />} />
    </Routes>
    </>
    
  );
};

export default Routers;
