import React, { useEffect, useState } from "react";
import { getAccessToken, getRole } from "../../utils/server";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomeAdmin() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const role = getRole();
    setUserRole(role);
  }, []);

  const handleMenuAdminClick = () => {
    navigate("/homeadmin/menu");
  };

  return (
    <>
      <div>
        <img src="https://i.imgur.com/UGQiraA.png" alt="Logo" className=" w-25 p-5" />
      </div>
      <div className="d-flex justify-content-evenly m-5 p-5">
        <Button
          className="col-3 mb-1 btn-outline-primary p-5 fs-1 fw-bold rounded-pill text-dark"
          variant="light"
          type="submit"
          onClick={handleMenuAdminClick}
        >
          Menu          
        </Button>
        {userRole === "Owner" ? (
          <Button
            className="col-3 mb-1 btn-outline-primary fs-1 fw-bold rounded-pill text-dark"
            variant="light"
            type="submit"
          >
            Ringkasan Pembukuan
          </Button>
        ) : (
          <></>
        )}
        <Button
          className="col-3 mb-1 btn-outline-primary fs-1 fw-bold rounded-pill text-dark"
          variant="light"
          type="submit"
        >
          Ringkasan Customer
        </Button>
      </div>
    </>
  );
}

export default HomeAdmin;
