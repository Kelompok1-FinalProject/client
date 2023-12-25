import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import Swal from "sweetalert2";

function TransaksiRow({
  key,
  no,
  index,
  id,
  name,
  menuId,
  jumlahOrder,
  totalPembayaran,
  onDelete,
  onUpdate,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [EditJumlah, setEditJumlah] = useState(jumlahOrder);
  const handleMinClick = () => {
    if (EditJumlah > 0) {
      setEditJumlah(EditJumlah - 1);
    }
  };
  const handlePlusClick = () => {
    setEditJumlah(EditJumlah + 1);
  };
  async function onDeleteHandler() {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak dapat mengembalikan menu yang telah dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
      }
    });
  }
  async function onUpdateHandler(event) {
    event.preventDefault();
    if (!EditJumlah == 0) {
      const response = onUpdate(id, menuId, EditJumlah);
      if (!response.error) {
        Swal.fire({
          icon: "success",
          title: "Pesanan Berhasil diupdate",
          text: `Mengupdate jumlah pesanan ${name} sebanyak ${EditJumlah}`,
        });
        setModalIsOpen(false);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Pesanan Gagal diupdate",
        text: "Tidak dapat diupdate dengan jumlah 0, sebaiknya gunakan tombol Hapus",
      });
    }
  }
  return (
    <>
      <thead>
        <tr>
          <th className="px-3" scope="col">
            {name}
          </th>
          <th className="px-3 text-end" scope="col">
            x{jumlahOrder}
          </th>
          <th className="px-3 text-end" scope="col">
            Rp. {totalPembayaran}
          </th>
          <th scope="col">
            <div className="d-flex justify-content-end">
              <Button
                variant="dark"
                className="btn-outline-danger fs-4"
                onClick={() => setModalIsOpen(true)}
              >
                Edit
              </Button>
              <Button
                variant="dark"
                className="btn-outline-danger fs-4"
                onClick={() => {
                  onDeleteHandler();
                }}
              >
                Hapus
              </Button>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              contentLabel="Example Modal"
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                content: {
                  width: "30%", // Atur lebar modal
                  height: "70%", // Atur tinggi modal
                  margin: "auto", // Agar modal berada di tengah layar
                },
              }}
            >
              <h1 className="mb-5 text-center fw-bold">Edit Pesanan</h1>
              <div>
                <h5 className="fw-bold">Nama Menu</h5>
                <h5 className="text-end">{name}</h5>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold">Jumlah Order</h5>
                <div className="d-flex justify-content-end">
                  <Button className="col-md-2 mx-1" onClick={handleMinClick}>
                    -
                  </Button>
                  <input
                    className="col-md-2 rounded mx-1 fs-5 text-center p-0 bg-light"
                    type="number"
                    value={EditJumlah}
                    onChange={(e) => setEditJumlah(Number(e.target.value))}
                    disabled
                  />
                  <Button className="col-md-2 mx-1" onClick={handlePlusClick}>
                    +
                  </Button>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="dark"
                  className="btn-outline-danger fs-6 rounded rounded-pill mb-4"
                  onClick={onUpdateHandler}
                >
                  Update
                </Button>
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  variant="dark"
                  className="btn-outline-danger fs-6 rounded rounded-pill"
                  onClick={() => setModalIsOpen(false)}
                >
                  Kembali
                </Button>
              </div>
            </Modal>
          </th>
        </tr>
      </thead>
    </>
  );
}

export default TransaksiRow;
