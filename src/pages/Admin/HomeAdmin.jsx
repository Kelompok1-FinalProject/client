import React, { useEffect, useState } from "react";
import { deleteAccessToken, deleteRole, getRole } from "../../utils/server";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import menuIcon from "../../icon/menu.png";
import pembukuanIcon from "../../icon/report.png";
import customerIcon from "../../icon/customer.png";
import logout from "../../icon/logout.png";
import "../../App.css";

function HomeAdmin() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [isHoveredMenu, setIsHoveredMenu] = useState(false);
  const [isHoveredReport, setIsHoveredReport] = useState(false);
  const [isHoveredCustomer, setIsHoveredCustomer] = useState(false);
  const [isHoveredBack, setIsHoveredBack] = useState(false);

  const handleMouseEnterLogout = () => {
    setIsHoveredBack(true);
  };
  const handleMouseLeaveLogout = () => {
    setIsHoveredBack(false);
  };

  const handleMouseEnterMenu = () => {
    setIsHoveredMenu(true);
  };
  const handleMouseLeaveMenu = () => {
    setIsHoveredMenu(false);
  };

  const handleMouseEnterReport = () => {
    setIsHoveredReport(true);
  };
  const handleMouseLeaveReport = () => {
    setIsHoveredReport(false);
  };

  const handleMouseEnterCustomer = () => {
    setIsHoveredCustomer(true);
  };
  const handleMouseLeaveCustomer = () => {
    setIsHoveredCustomer(false);
  };

  useEffect(() => {
    const role = getRole();
    setUserRole(role);
  }, []);

  const handleMenuAdminClick = () => {
    navigate("/homeadmin/menu");
  };

  const handleCustomerAdminClick = () => {
    navigate("/homeadmin/customer");
  };

  const handlePembukuanAdminClick = () => {
    navigate("/homeadmin/pembukuan");
  };

  const handleLogoutClick = () => {
    deleteAccessToken();
    deleteRole();
    navigate("/login");
  };

  return (
    <>
    <div className="bgSecond p-5">
      
      <Button
        variant="danger"
        className={`btn btn-outline-danger rounded rounded-pill py-0 px-1 fs-5 m-3 position-fixed top-0 end-0 ${
          isHoveredBack ? "hoveredBack" : ""
        }`}
        onMouseEnter={handleMouseEnterLogout}
        onMouseLeave={handleMouseLeaveLogout}
        onClick={handleLogoutClick}
      >
        <img src={logout} alt="Profile" width="40" height="40" />
        {isHoveredBack ? <span>Logout</span> : <></>}
      </Button>
      <div>
        <img
          src="https://i.imgur.com/UGQiraA.png"
          alt="Logo"
          width={300}
          className="mt-4 p-1 shadow rounded rounded-circle img-fluid hover-zoom"
        />
      </div>
      <div className="d-flex justify-content-evenly m-5 p-5">
        <Button
          className="col-3 mb-1 btn-outline-primary p-3 fs-1 fw-bold rounded-pill text-light"
          variant="light"
          type="submit"
          onClick={handleMenuAdminClick}
          onMouseEnter={handleMouseEnterMenu}
          onMouseLeave={handleMouseLeaveMenu}
          style={{
            transition: "transform 0.3s ease", // Adjust the duration and easing as needed
            transform: isHoveredMenu ? "scale(1.1)" : "scale(1)",
          }}
        >
          {isHoveredMenu ? (
            <span>Menu</span>
          ) : (
            <img src={menuIcon} width={80} alt="menu" />
          )}
        </Button>
        {userRole === "Owner" ? (
          <Button
            className="col-3 mb-1 btn-outline-primary p-3 fs-1 fw-bold rounded-pill text-light"
            variant="light"
            type="submit"
            onClick={handlePembukuanAdminClick}
            onMouseEnter={handleMouseEnterReport}
            onMouseLeave={handleMouseLeaveReport}
            style={{
              transition: "transform 0.3s ease", // Adjust the duration and easing as needed
              transform: isHoveredReport ? "scale(1.1)" : "scale(1)",
            }}
          >
            {isHoveredReport ? (
              <span>Pembukuan</span>
            ) : (
              <img src={pembukuanIcon} width={80} alt="menu" />
            )}
          </Button>
        ) : (
          <></>
        )}
        <Button
          className="col-3 mb-1 btn-outline-primary p-3 fs-1 fw-bold rounded-pill text-light"
          variant="light"
          type="submit"
          onClick={handleCustomerAdminClick}
          onMouseEnter={handleMouseEnterCustomer}
          onMouseLeave={handleMouseLeaveCustomer}
          style={{
            transition: "transform 0.3s ease", // Adjust the duration and easing as needed
            transform: isHoveredCustomer ? "scale(1.1)" : "scale(1)",
          }}
        >
          {isHoveredCustomer ? (
            <span>Customer</span>
          ) : (
            <img src={customerIcon} width={80} alt="menu" />
          )}
        </Button>
      </div>
      </div>
    </>
  );
}

export default HomeAdmin;
