import React from "react";
import LaporanRow from "./LaporanRow";

function LaporanList(props) {
  const { laporan } = props;

  return (
    <div className="d-flex justify-content-center">
      <table className="table text-center my-3" style={{ width: "60%" }}>
        <thead>
          <tr>
            <th className="px-2 py-2" style={{ width: "5%" }}>
              No
            </th>
            <th className="px-2 py-2" style={{ width: "25%" }}>
              Name Menu
            </th>
            <th className="px-2 py-2" style={{ width: "20%" }}>
              Pemasukan
            </th>
            <th className="px-2 py-2" style={{ width: "20%" }}>
              Modal
            </th>
            <th className="px-2 py-2" style={{ width: "20%" }}>
              Laba
            </th>
          </tr>
        </thead>
        {laporan.map((item, index) => (
          <LaporanRow
            key={item.id}
            no={index + 1}
            name={item.nameMenu}
            pemasukan={item.pemasukan}
            modal={item.modal}
            laba={item.laba}
          />
        ))}
      </table>
    </div>
  );
}

export default LaporanList;
