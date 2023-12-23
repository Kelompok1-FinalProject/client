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
        <div className="container bg-danger p-3 rounded ">
          {pesanan.statusBayar === "Belum Bayar" ? (
            <>
              <h1 className="fw-bold">Lakukan Pembayaran</h1>
              <h4>Menunggu Pembayaran ...</h4>
              <h4>Silahkan Menuju Kasir Untuk Membayar</h4>
              <Button onClick={handleConfirmClick} disabled>
                Selesai
              </Button>
            </>
          ) : (
            <>
              <h1 className="fw-bold">Pembayaran Berhasil!</h1>
              <h4>Pesanan Sedang Diproses ...</h4>
              <h4>Silahkan Menunggu Pesanan Anda Di Tempat</h4>
              <Button onClick={handleConfirmClick}>Selesai</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Confirm;
