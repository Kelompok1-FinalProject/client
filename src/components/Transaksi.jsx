import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import TransaksiRow from "./TransaksiRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Transaksi(props) {
  const navigate = useNavigate();
  const { jumlahPesanan, bayar, noMeja, order, onDelete, onUpdate } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function onPesanHandler() {
    Swal.fire({
      title: "Konfirmasi Pesanan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/home/payment");
      }
    });
  }

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
            <h1 className="text-center">Rincian Pesanan</h1>
            <div className="mx-5">
              <table className="table text-center">
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
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                  />
                ))}
              </table>
            </div>
            <div className="d-flex justify-content-between mx-5 my-3">
              <h2 className="p-2">TOTAL</h2>
              <div className="rounded rounded-pill border border-2 border-black p-2 fs-3 fw-bold">
                Rp. {bayar}
              </div>
            </div>
            <div className="text-center">
              {noMeja === 99 ? <h2>Bawa Pulang</h2> : <h2>Meja {noMeja}</h2>}
            </div>
            <div className="d-flex justify-content-center mb-3">
              <Button
                variant="danger"
                className="fs-3 rounded rounded-pill"
                onClick={() => {
                  onPesanHandler();
                }}
              >
                Pesan
              </Button>
            </div>
            <div className="d-flex justify-content-end">
              <Button
                variant="dark"
                className="btn-outline-danger fs-4"
                onClick={() => setModalIsOpen(false)}
              >
                Kembali
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Transaksi;
