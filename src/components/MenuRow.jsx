import React from "react";
import { DeleteButton } from "./DeleteButton";
import { StatusMenuButton } from "./StatusMenuButton";
import { EditButton } from "./EditButton";
import PropTypes from "prop-types";

function MenuRow({
  no,
  name,
  children,
  id,
  index,
  gambar,
  harga,
  status,
  onDelete,
  onPrivatePublic,
  role,
}) {
  return (
    <tr>
      <td>
        <img
          src={gambar}
          alt="My Image"
          width={90}
          height={90}
          className="rounded shadow"
        />
      </td>
      <td>{name}</td>
      <td>Rp. {harga}</td>
      <td>
        <StatusMenuButton
          index={index}
          id={id}
          onPrivatePublic={onPrivatePublic}
          status={status}
        />
        {role === "Owner" ? <EditButton index={index} id={id} /> : <></>}
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
