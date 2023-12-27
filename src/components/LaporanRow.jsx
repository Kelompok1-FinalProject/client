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
          <td className="px-2 py-2" style={{ width: "5%" }}>
            {no}
          </td>
          <td className="px-2 py-2" style={{ width: "25%" }}>
            {name}
          </td>
          <td className="px-2 py-2" style={{ width: "20%" }}>
            Rp. {formattedPemasukkan}
          </td>
          <td className="px-2 py-2" style={{ width: "20%" }}>
            Rp. {formattedModal}
          </td>
          <td className="px-2 py-2" style={{ width: "20%" }}>
            Rp. {formattedLaba}
          </td>
        </tr>
      </thead>
    </>
  );
}

export default LaporanRow;
