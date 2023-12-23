import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updatePayment } from "../../utils/server";

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

  return (
    <>
      <div className="p-5 mx-5">
        <div className="container bg-danger p-3 rounded ">
          <h1>Payment</h1>
          <div className="">
            <div className="m-3">
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option1"
                autoComplete="off"
                value="Cash"
                checked={selectedPayment === "Cash"}
                onChange={handlePaymentChange}
              />
              <label className="btn btn-primary" htmlFor="option1">
                CASH
              </label>
            </div>
            <div className="m-3">
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option2"
                autoComplete="off"
                value="Qris"
                checked={selectedPayment === "Qris"}
                onChange={handlePaymentChange}
              />
              <label className="btn btn-primary" htmlFor="option2">
                QRIS
              </label>
            </div>
            <div className="m-3">
              <input
                type="radio"
                className="btn-check"
                name="options"
                id="option3"
                autoComplete="off"
                value="Transfer"
                checked={selectedPayment === "Transfer"}
                onChange={handlePaymentChange}
              />
              <label className="btn btn-primary" htmlFor="option3">
                TRANSFER
              </label>
            </div>
          </div>
          <Button onClick={handleConfirmClick}>OK</Button>
        </div>
      </div>
    </>
  );
}

export default Payment;
