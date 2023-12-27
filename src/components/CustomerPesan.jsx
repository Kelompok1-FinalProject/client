import React, { useEffect, useState } from "react";
import moment from "moment";
import { DeleteButton } from "./DeleteButton";
import { StatusMenuButton } from "./StatusMenuButton";
import { EditButton } from "./EditButton";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { PesanButton } from "./PesanButton";
import info from "../icon/info.png";
import CustomerRow from "./CustomerRow";
import Modal from "react-modal";

function CustomerPesan({
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
  transaksi,
  createdAt,
  onUpdatePesan,
}) {
  const [transaksis, setTransaksis] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const formattedCreatedAt = moment(createdAt).format("DD MMM YYYY HH:mm");
  const formattedTotalPembayaran = totalPembayaran.toLocaleString();
  useEffect(() => {
    setTransaksis(transaksi);
  }, []);
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
          <CustomerRow transaksi={transaksis} bayar={totalPembayaran} />
          <div className="d-flex justify-content-end">
            <Button
              variant="danger"
              className="fs-4 rounded rounded-pill shadow"
              onClick={() => setModalIsOpen(false)}
            >
              Kembali
            </Button>
          </div>
        </Modal>
      </td>
      <td>{noMeja}</td>
      <td>Rp. {formattedTotalPembayaran}</td>
      <td>{payment}</td>
      <td>
        <td>{formattedCreatedAt}</td>
      </td>
      <td>
        <PesanButton
          id={id}
          statusPesanan={statusPesanan}
          onUpdatePesan={onUpdatePesan}
        />
      </td>
    </tr>
  );
}

CustomerPesan.propTypes = {
  no: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string, // Children is not always present
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  gambar: PropTypes.string.isRequired,
  harga: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CustomerPesan;
