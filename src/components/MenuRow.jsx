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
    <tr className="align-middle">
      <td className="w-25">
        <img src={gambar} alt="My Image" className="img-thumbnail w-25" />
      </td>
      <td>{name}</td>
      <td>Rp. {harga}</td>
      <td className="justify-content-evenly">
        <button className="btn-warning rounded-pill mx-3">Publikasi</button>
        <button className="btn-info rounded-pill mx-3">Edit</button>
        {role === "Owner" ? (
          <DeleteButton index={index} id={id} onDelete={onDelete}/>
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
