import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import edit from "../icon/edit.png";
import editHover from "../icon/editHover.png";

function EditButton({ index, id }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();
  return (
    <Button
      variant="light"
      className={`m-1 border border-primary rounded rounded-circle p-0 ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/homeadmin/menu/edit/${id}`)}
    >
      <img
        src={isHovered ? editHover : edit}
        alt="Profile"
        width="50"
        height="50"
      />
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
