import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
// import hapus from "../assets/delete.png";

function StatusMenuButton({ index, status, id, onPrivatePublic }) {
  return (
    <Button
      variant="dark"
      className="btn-outline-danger fs-6"
      onClick={() => {
        const newStatus = status === "public" ? "private" : "public";
        Swal.fire({
          title: `Apakah Anda mem-${newStatus} menu?`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: `Ya, ${newStatus}!`,
          cancelButtonText: "Batal",
        }).then((result) => {
          if (result.isConfirmed) {
            onPrivatePublic(id, newStatus);
          }
        });
      }}
    >
      {status}
    </Button>
  );
}

StatusMenuButton.protoTypes = {
  index: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onPrivatePublic: PropTypes.func.isRequired,
};

export { StatusMenuButton };
