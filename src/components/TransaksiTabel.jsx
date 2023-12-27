import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import Swal from "sweetalert2";

function TransaksiTabel({
  key,
  no,
  index,
  id,
  name,
  jumlahOrder,
  totalPembayaran,
}) {
  const formattedTotalPembayaran = totalPembayaran.toLocaleString();
  return (
    <>
      <thead>
        <tr>
          <td className="px-3" scope="col">
            {no}
          </td>
          <td className="px-3" scope="col">
            {name}
          </td>
          <td className="px-3" scope="col">
            x{jumlahOrder}
          </td>
          <td className="px-3" scope="col">
            Rp. {formattedTotalPembayaran}
          </td>
        </tr>
      </thead>
    </>
  );
}

export default TransaksiTabel;
