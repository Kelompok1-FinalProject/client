import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Admin/Login";
import Register from "./pages/Admin/Register";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import MenuAdmin from "./pages/Admin/MenuAdmin";
import "./App.css";
import { Routes, Route, useLocation, Navigate, Outlet } from "react-router-dom";
import { getAccessToken } from "./utils/server";
import AddMenu from "./pages/Admin/AddMenu";

function NeedLogin() {
  let auth = getAccessToken();
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<NeedLogin />}>
          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/homeadmin/menu" element={<MenuAdmin />} />
          <Route path="/homeadmin/menu/add" element={<AddMenu />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
