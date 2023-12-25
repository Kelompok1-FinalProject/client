import React from "react";
import Login from "./pages/Admin/Login";
import Register from "./pages/Admin/Register";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import MenuAdmin from "./pages/Admin/MenuAdmin";
import AddMenu from "./pages/Admin/AddMenu";
import EditMenu from "./pages/Admin/EditMenu";
import Customer from "./pages/Admin/Customer";
import AddCustomer from "./pages/Customer/AddCustomer";
import Home from "./pages/Customer/Home";
import Menu from "./pages/Customer/Menu";
import Payment from "./pages/Customer/Payment";
import Confirm from "./pages/Customer/Confirm";
import "./App.css";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "./utils/server";
import Pembukuan from "./pages/Admin/Pembukuan";

function NeedLoginAdmin() {
  let auth = getAccessToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}
function NeedCreateCustomer() {
  let auth = getAccessToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<NeedLoginAdmin />}>
          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/homeadmin/menu" element={<MenuAdmin />} />
          <Route path="/homeadmin/menu/add" element={<AddMenu />} />
          <Route path="/homeadmin/menu/edit/:id" element={<EditMenu />} />
          <Route path="/homeadmin/customer" element={<Customer />} />
          <Route path="/homeadmin/pembukuan" element={<Pembukuan />} />
        </Route>
        <Route path="/" element={<AddCustomer />} />
        <Route element={<NeedCreateCustomer />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/menu" element={<Menu />} />
          <Route path="/home/payment" element={<Payment />} />
          <Route path="/home/payment/confirm" element={<Confirm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
