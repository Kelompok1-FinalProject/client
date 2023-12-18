import React from "react";
import { DeleteButton } from "./DeleteButton";
import PropTypes from "prop-types";

function MenuRow({
  no,
  name,
  children,
  id,
  index,
  gambar,
  harga,
  onDelete,
  role,
}) {
  return (
    <tr>
      <td>
        <img src={gambar} alt="My Image" />
      </td>
      <td>{name}</td>
      <td>Rp. {harga}</td>
      <td>
        <button>a</button>
        {role === "Owner" ? (
          <DeleteButton index={index} id={id} onDelete={onDelete} />
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
}

MenuRow.propTypes = {
  no: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string, // Children is not always present
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  gambar: PropTypes.string.isRequired,
  harga: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MenuRow;
