import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
// import hapus from "../assets/delete.png";

function DeleteButton({ index, id, onDelete }) {
  return (
    <Button
      variant="white"
      className="btn-danger fs-4 rounded-pill py-2"
      onClick={() => onDelete(id)}
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
