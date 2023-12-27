import React, { useEffect, useState } from "react";
import moment from "moment";
import { DeleteButton } from "./DeleteButton";
import { StatusMenuButton } from "./StatusMenuButton";
import { EditButton } from "./EditButton";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { BayarButton } from "./BayarButton";
import Modal from "react-modal";
import LaporanList from "./LaporanList";

function PembukuanRow({
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
  laporan,
}) {
  const [laporans, setLaporans] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setLaporans(laporan);
  }, []);

  const formattedCreatedAt = moment(createdAt).format("DD MMM YYYY");
  const formattedTotalPembayaran = totalPembayaran.toLocaleString();
  const formattedTotalLaba = totalLaba.toLocaleString();
  const modal = (totalPembayaran - totalLaba).toLocaleString();
  return (
    <>
      <tr>
        <td>{no}</td>
        <td>{name}</td>
        <td>Rp. {formattedTotalPembayaran}</td>
        <td>Rp. {modal}</td>
        <td>Rp. {formattedTotalLaba}</td>
        <td>{formattedCreatedAt}</td>
        <td>
          <Button
            variant="danger"
            className="btn-outline-light fs-4 rounded-pill py-2 px-3"
            onClick={() => setModalIsOpen(true)}
            style={{
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            Detail Pesanan
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
            <h1>Detail Pesanan</h1>
            <LaporanList laporan={laporans} />
            <div className="d-flex justify-content-end">
              <Button
                variant="danger"
                className="btn-outline-light fs-4 rounded-pill py-2 px-3"
                onClick={() => setModalIsOpen(false)}
                style={{
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                Kembali
              </Button>
            </div>
          </Modal>
        </td>
      </tr>
    </>
  );
}

PembukuanRow.propTypes = {
  no: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string, // Children is not always present
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  gambar: PropTypes.string.isRequired,
  harga: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PembukuanRow;
