import PembukuanRow from "./PembukuanRow";
function PembukuanList(props) {
  const { customer } = props;

  return (
    <>
      {customer.map((customer, index) => (
        <PembukuanRow
          key={customer.id}
          no={index + 1}
          index={index}
          id={customer.id}
          name={customer.name}
          noMeja={customer.noMeja}
          payment={customer.payment}
          statusBayar={customer.statusBayar}
          statusPesanan={customer.statusPesanan}
          totalLaba={customer.totalLaba}
          totalPembayaran={customer.totalPembayaran}
          createdAt={customer.createdAt}
          laporan={customer.Laporans}
        />
      ))}
    </>
  );
}

export default PembukuanList;
