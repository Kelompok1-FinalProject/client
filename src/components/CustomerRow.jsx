import TransaksiTabel from "./TransaksiTabel";

function CustomerRow(props) {
  const { transaksi, bayar } = props;

  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th>No</th>
            <th>Name Menu</th>
            <th>Jumlah Order</th>
            <th>Total Pembayaran</th>
          </tr>
        </thead>
        {transaksi.map((transaksi, index) => (
          <TransaksiTabel
            key={transaksi.id}
            no={index + 1}
            index={index}
            id={transaksi.id}
            name={transaksi.nameMenu}
            jumlahOrder={transaksi.jumlahOrder}
            totalPembayaran={transaksi.totalPembayaran}
          />
        ))}
      </table>
      <div className="d-flex justify-content-between mx-5 my-3">
        <h2 className="p-2">TOTAL</h2>
        <div className="rounded rounded-pill border p-2 fs-3 fw-bold bg-warning">
          Rp. {bayar}
        </div>
      </div>
    </>
  );
}

export default CustomerRow;
