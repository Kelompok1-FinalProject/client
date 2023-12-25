import React from "react";
import moment from "moment";
import { DeleteButton } from "./DeleteButton";
import { StatusMenuButton } from "./StatusMenuButton";
import { EditButton } from "./EditButton";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { BayarButton } from "./BayarButton";

function CustomerBayar({
  key,
  no,
  index,
  id,
  name,
  noMeja,
  payment,
  statusBayar,
  statusPesanan,
  totalLaba,
  totalPembayaran,
  createdAt,
  onUpdateBayar,
}) {
  const formattedCreatedAt = moment(createdAt).format("DD MMM YYYY HH:mm");
  return (
    <tr>
      <td>{no}</td>
      <td>{name}</td>
      <td>{noMeja}</td>
      <td>{totalPembayaran}</td>
      <td>{payment}</td>
      <td>
        <td>{formattedCreatedAt}</td>
      </td>
      <td>
        <BayarButton
          id={id}
          statusBayar={statusBayar}
          onUpdateBayar={onUpdateBayar}
        />
      </td>
    </tr>
  );
}

CustomerBayar.propTypes = {
  no: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string, // Children is not always present
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  gambar: PropTypes.string.isRequired,
  harga: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CustomerBayar;
