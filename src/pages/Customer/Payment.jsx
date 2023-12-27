import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updatePayment } from "../../utils/server";
import "../../App.css";
import { ButtonKembali } from "../../components/ButtonKembali";

function Payment() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("Cash");
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleConfirmClick = async () => {
    const response = await updatePayment(selectedPayment);
    if (!response.error) {
      navigate("/home/payment/confirm");
    }
  };
  const handleBackClick = () => {
    navigate("/home/menu");
  };

  return (
    <div className="bgAll">
      <ButtonKembali handleBackClick={handleBackClick} />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="p-5 mx-5 card bg-body-tertiary">
          <div className="container p-4 rounded">
            <h1 className="mb-4 mt-2 text-dark fw-bold">
              Pilih Metode Pembayaran
            </h1>
            <div className="m-5">
              <div className="m-3">
                <input
                  type="radio"
                  className="visually-hidden"
                  name="options"
                  id="option1"
                  autoComplete="off"
                  value="Cash"
                  checked={selectedPayment === "Cash"}
                  onChange={handlePaymentChange}
                />
                <label
                  className={`px-5 btn btn-outline-warning btn-lg btn-block rounded-pill text-dark border ${
                    selectedPayment === "Cash" ? "active" : ""
                  }`}
                  htmlFor="option1"
                >
                  CASH
                </label>
              </div>
              <div className="m-3">
                <input
                  type="radio"
                  className="visually-hidden"
                  name="options"
                  id="option2"
                  autoComplete="off"
                  value="Qris"
                  checked={selectedPayment === "Qris"}
                  onChange={handlePaymentChange}
                />
                <label
                  className={`px-5 btn btn-outline-warning btn-lg btn-block rounded-pill text-dark border ${
                    selectedPayment === "Qris" ? "active" : ""
                  }`}
                  htmlFor="option2"
                >
                  QRIS
                </label>
              </div>
              <div className="m-3">
                <input
                  type="radio"
                  className="visually-hidden"
                  name="options"
                  id="option3"
                  autoComplete="off"
                  value="Transfer"
                  checked={selectedPayment === "Transfer"}
                  onChange={handlePaymentChange}
                />
                <label
                  className={`px-4 btn btn-outline-warning btn-lg btn-block rounded-pill text-dark border ${
                    selectedPayment === "Transfer" ? "active" : ""
                  }`}
                  htmlFor="option3"
                >
                  TRANSFER
                </label>
              </div>
            </div>
            <div className="m-3">
              <Button
                onClick={handleConfirmClick}
                className={`fw-bold px-5 btn btn-outline-danger btn-lg btn-block rounded-pill text-dark border ${
                  selectedPayment === "OK" ? "active" : ""
                }`}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
