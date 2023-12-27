import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import hapus from "../icon/delete.png";
import hapusHover from "../icon/deleteHover.png";

function DeleteButton({ index, id, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Button
      variant="light"
      className={`m-1 border border-danger rounded rounded-circle p-0 ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        Swal.fire({
          title: "Apakah Anda yakin?",
          text: "Anda tidak dapat mengembalikan Delete yang telah dihapus!",
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
      }}
    >
      <img
        src={isHovered ? hapusHover : hapus}
        alt="Profile"
        width="50"
        height="50"
      />
    </Button>
  );
}

DeleteButton.protoTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { DeleteButton };
