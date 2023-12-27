import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { updateStatusBayar } from "../utils/server";
// import hapus from "../assets/delete.png";

function PesanButton({ statusPesanan, id, onUpdatePesan }) {
  return (
    <>
      <Button
        variant="warning"
        className="fs-6 btn-outline-light border-warning"
        onClick={() => {
          Swal.fire({
            title: "Konfirmasi Status Pesanan?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Ya!`,
            cancelButtonText: "Batal",
          }).then((result) => {
            if (result.isConfirmed) {
              onUpdatePesan(id, "Done");
            }
          });
        }}
      >
        {statusPesanan}
      </Button>
    </>
  );
}

PesanButton.protoTypes = {
  statusBayar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export { PesanButton };
