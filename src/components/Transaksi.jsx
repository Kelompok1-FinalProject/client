import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import TransaksiRow from "./TransaksiRow";
import { text } from "express";

function Transaksi(props) {
  const { jumlahPesanan, bayar, order } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-between">
          <h1 className="mx-5">TOTAL</h1>
          <h1>{jumlahPesanan} Pesanan</h1>
        </div>
        <div className="d-flex justify-content-between">
          <h1 className="mx-5">Rp. {bayar}</h1>
          <Button
            variant="dark"
            className="btn-outline-danger fs-4"
            onClick={() => setModalIsOpen(true)}
          >
            Buat Pesanan
          </Button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Example Modal"
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
              content: {
                width: "80%", // Atur lebar modal
                height: "80%", // Atur tinggi modal
                margin: "auto", // Agar modal berada di tengah layar
              },
            }}
          >
            <h1>Rincian Pesanan</h1>
            {order.map((order, index) => (
              <TransaksiRow
                key={order.id}
                no={index + 1}
                index={index}
                id={order.id}
                name={order.nameMenu}
                menuId={order.menuId}
                jumlahOrder={order.jumlahOrder}
                totalPembayaran={order.totalPembayaran}
              ></TransaksiRow>
            ))}
            <Button
              variant="dark"
              className="btn-outline-danger fs-4"
              onClick={() => setModalIsOpen(false)}
            >
              Kembali
            </Button>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Transaksi;
