import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import Swal from "sweetalert2";

function LaporanRow({ key, no, index, id, name, laba, modal, pemasukan }) {
  const formattedPemasukkan = pemasukan.toLocaleString();
  const formattedModal = modal.toLocaleString();
  const formattedLaba = laba.toLocaleString();
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
            Rp. {formattedPemasukkan}
          </td>
          <td className="px-3" scope="col">
            Rp. {formattedModal}
          </td>
          <td className="px-3" scope="col">
            Rp. {formattedLaba}
          </td>
        </tr>
      </thead>
    </>
  );
}

export default LaporanRow;
