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
      <h1>Home Admin</h1>
      <div>
        <Button
          className="col-3 mb-1 btn-outline-primary"
          variant="light"
          type="submit"
          onClick={handleMenuAdminClick}
        >
          Ikon Menu
        </Button>
        {userRole === "Owner" ? (
          <Button
            className="col-3 mb-1 btn-outline-primary"
            variant="light"
            type="submit"
          >
            Ringkasan Pembukuan
          </Button>
        ) : (
          <></>
        )}
        <Button
          className="col-3 mb-1 btn-outline-primary"
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
