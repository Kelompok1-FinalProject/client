import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontAwesome";

function Home() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/home/menu");
  };

  return (
    <>
      <h1>Home</h1>
      <FontAwesomeIcon icon="camera" />
      <p>Ini adalah ikon kamera.</p>
      <Button onClick={handleMenuClick}>Ikon Menu</Button>
    </>
  );
}

export default Home;
