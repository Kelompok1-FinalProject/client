import LaporanRow from "./LaporanRow";

function LaporanList(props) {
  const { laporan } = props;

  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th>No</th>
            <th>Name Menu</th>
            <th>Pemasukan</th>
            <th>Modal</th>
            <th>Laba</th>
          </tr>
        </thead>
        {laporan.map((laporan, index) => (
          <LaporanRow
            key={laporan.id}
            no={index + 1}
            index={index}
            id={laporan.id}
            name={laporan.nameMenu}
            laba={laporan.laba}
            modal={laporan.modal}
            pemasukan={laporan.pemasukan}
          />
        ))}
      </table>
    </>
  );
}

export default LaporanList;
