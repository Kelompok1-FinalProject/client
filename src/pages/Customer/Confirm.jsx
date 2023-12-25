import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteAccessToken, getCustomerId } from "../../utils/server";

function Confirm() {
  const navigate = useNavigate();

  const [pesanan, setPesanan] = useState({});

  const handleConfirmClick = async () => {
    deleteAccessToken();
    navigate("/");
  };

  useEffect(() => {
    getCustomerId()
      .then((result) => {
        const data = result.data;
        setPesanan(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [pesanan]);

  return (
    <>
      <div className="p-5 mx-5">
        <div className="container vh-75 bg-light p-3 rounded">
          {pesanan.statusBayar === "Belum Bayar" ? (
            <>
              <div className="w-75 m-auto">
                <img
                  src="https://i.imgur.com/UGQiraA.png"
                  alt="Logo"
                  className="w-25 p-1 border border-dark border-2 rounded rounded-circle img-fluid hover-zoom"
                />
              </div>
              <h1 className="fw-bold p-3 text-dark">Lakukan Pembayaran</h1>
              <h4 className="p-5 text-dark">Menunggu Pembayaran ...</h4>
              <h4 className="p-4 text-dark">
                Silahkan Menuju Kasir Untuk Membayar
              </h4>
              <Button onClick={handleConfirmClick} disabled>
                Selesai
              </Button>
            </>
          ) : (
            <>
              <div className="w-75 m-auto">
                <img
                  src="https://i.imgur.com/UGQiraA.png"
                  alt="Logo"
                  className="w-25 p-1 border border-dark border-2 rounded rounded-circle img-fluid hover-zoom"
                />
              </div>
              <h1 className="fw-bold p-3 text-dark">Pembayaran Berhasil!</h1>
              <h4 className="p-5 text-dark">Pesanan Sedang Diproses ...</h4>
              <h4 className="p-4 text-dark">
                Silahkan Menunggu Pesanan Anda Di Tempat
              </h4>
              <Button onClick={handleConfirmClick}>Selesai</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Confirm;
