import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick"; // Import Slider dari react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../fontAwesome";
import "../../App.css";


function Home() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/home/menu");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Aktifkan autoplay
    autoplaySpeed: 2000, // Atur kecepatan autoplay dalam milidetik
  };

  return (
    <>
    <div className="bgAll p-5">
      <div className="carousel mx-auto mb-5 w-75 border border-bottom-0">
        
      <div>
          <Slider {...settings}>
            <div>
              <img className="carousel-image" src="https://i.imgur.com/XMeSkEi.png" alt="Nasi Goreng" />
            </div>
            <div>
              <img className="carousel-image" src="https://i.imgur.com/7VpYXV9.png" alt="Burger" />
            </div>
            <div>
              <img className="carousel-image" src="https://i.imgur.com/Mog4ZYm.png" alt="Es Cendol" />
            </div>
          </Slider>
        </div>
       
       </div>
        <div className="">  
        <Button onClick={handleMenuClick} className="btn-warning p-3 border"><FontAwesomeIcon icon="fa-utensils" size="5x" color="white"/></Button>
        </div>
    </div>
    </>
  );
}

export default Home;
