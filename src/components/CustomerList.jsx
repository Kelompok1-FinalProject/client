import CustomerBayar from "./CustomerBayar";
import CustomerPesan from "./CustomerPesan";
function CustomerList(props) {
  const { order, onUpdateBayar, selectedCustomer, onUpdatePesan } = props;

  return (
    <>
      {selectedCustomer === "Created" ? (
        <>
          {order.map((order, index) => (
            <CustomerBayar
              key={order.id}
              no={index + 1}
              index={index}
              id={order.id}
              name={order.name}
              noMeja={order.noMeja}
              payment={order.payment}
              statusBayar={order.statusBayar}
              statusPesanan={order.statusPesanan}
              totalLaba={order.totalLaba}
              totalPembayaran={order.totalPembayaran}
              createdAt={order.createdAt}
              transaksi={order.Transaksis}
              onUpdateBayar={onUpdateBayar}
            />
          ))}
        </>
      ) : (
        <>
          {order.map((order, index) => (
            <CustomerPesan
              key={order.id}
              no={index + 1}
              index={index}
              id={order.id}
              name={order.name}
              noMeja={order.noMeja}
              payment={order.payment}
              statusBayar={order.statusBayar}
              statusPesanan={order.statusPesanan}
              totalLaba={order.totalLaba}
              totalPembayaran={order.totalPembayaran}
              createdAt={order.createdAt}
              transaksi={order.Transaksis}
              onUpdatePesan={onUpdatePesan}
            />
          ))}
        </>
      )}
    </>
  );
}

export default CustomerList;
