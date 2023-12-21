import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/home/menu");
  };

  return (
    <>
      <h1>Home</h1>
      <Button onClick={handleMenuClick}>Ikon Menu</Button>
    </>
  );
}

export default Home;
