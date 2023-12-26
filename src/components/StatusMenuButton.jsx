import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import view from "../icon/public.png";
import hide from "../icon/private.png";

function StatusMenuButton({ index, status, id, onPrivatePublic }) {
  return (
    <Button
      variant="light"
      className="m-1 rounded rounded-circle p-0"
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
      <img
        src={status === "public" ? view : hide}
        alt="Profile"
        width="50"
        height="50"
      />
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
