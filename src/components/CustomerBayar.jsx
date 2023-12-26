import React, { useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import { BayarButton } from "./BayarButton";
import info from "../icon/info.png";

function CustomerBayar({
  key,
  no,
  index,
  id,
  name,
  noMeja,
  payment,
  statusBayar,
  statusPesanan,
  totalLaba,
  totalPembayaran,
  createdAt,
  onUpdateBayar,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const formattedCreatedAt = moment(createdAt).format("DD MMM YYYY HH:mm");
  return (
    <tr>
      <td>{no}</td>
      <td>
        {name}
        <img
          src={info}
          className="mx-3"
          alt="Profile"
          width="30"
          height="30"
          onClick={() => setModalIsOpen(true)}
        />
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
          <h1>Detail Pesanan</h1>
          {/* <LaporanList laporan={laporans} /> */}
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
      </td>
      <td>{noMeja}</td>
      <td>{totalPembayaran}</td>
      <td>{payment}</td>
      <td>
        <td>{formattedCreatedAt}</td>
      </td>
      <td>
        <BayarButton
          id={id}
          statusBayar={statusBayar}
          onUpdateBayar={onUpdateBayar}
        />
      </td>
    </tr>
  );
}

CustomerBayar.propTypes = {
  no: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string, // Children is not always present
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  gambar: PropTypes.string.isRequired,
  harga: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CustomerBayar;
