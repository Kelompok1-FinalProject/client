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
  onPrivatePublic,
  role,
  status,
}) {
  return (
    <tr>
      <td>
        <img src={gambar} height="100" width="100" alt={gambar} />
      </td>
      <td>{name}</td>
      <td>Rp. {harga}</td>
      <td>
        <button
          onClick={() => {
            const newStatus = status === "public" ? "private" : "public";
            onPrivatePublic(id, newStatus);
          }}
        >
          {status}
        </button>
        {role === "Owner" ? <button>Edit</button> : <></>}
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
