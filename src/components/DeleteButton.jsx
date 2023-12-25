import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
// import hapus from "../assets/delete.png";

function DeleteButton({ index, id, onDelete }) {
  return (
    <Button
      variant="dark"
      className="btn-outline-danger fs-6"
      onClick={() => {
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
      }}
    >
      {/* <img src={hapus} alt="Profile" width="25" height="25" /> */}
      Hapus
    </Button>
  );
}

DeleteButton.protoTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { DeleteButton };
