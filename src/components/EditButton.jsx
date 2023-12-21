import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import hapus from "../assets/delete.png";

function EditButton({ index, id }) {
  const navigate = useNavigate();
  return (
    <Button
      variant="dark"
      className="btn-outline-danger fs-6"
      onClick={() => navigate(`/homeadmin/menu/edit/${id}`)}
    >
      Edit
    </Button>
  );
}

EditButton.protoTypes = {
  index: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onPrivatePublic: PropTypes.func.isRequired,
};

export { EditButton };
