import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { updateStatusBayar } from "../utils/server";
// import hapus from "../assets/delete.png";

function BayarButton({ statusBayar, id, onUpdateBayar }) {
  return (
    <>
      <Button
        variant="primary"
        className="fs-6 btn-danger fw-bold"
        onClick={() => {
          Swal.fire({
            title: "Konfirmasi Status Pembayaran?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Ya!`,
            cancelButtonText: "Batal",
          }).then((result) => {
            if (result.isConfirmed) {
              onUpdateBayar(id, "Done");
            }
          });
        }}
      >
        {statusBayar}
      </Button>
    </>
  );
}

BayarButton.protoTypes = {
  statusBayar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export { BayarButton };
