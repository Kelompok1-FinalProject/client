import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import CustomerList from "../../components/CustomerList";
import {
  getCustomer,
  getCustomerWaitingList,
  getLaporan,
  updateStatusBayar,
  updateStatusPesanan,
} from "../../utils/server";
import PembukuanList from "../../components/PembukuanList";

function Pembukuan() {
  const [filter, setFilter] = useState("semua");
  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState([]);
  const [laporan, setLaporan] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    getLaporan()
      .then((result) => {
        const data = result.data;
        setCustomer(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <h1>Ringkasan Pembukuan Customer</h1>
      <div className="d-flex justify-content-between mx-auto" style={{ maxWidth: '1200px', marginTop: '20px' }}>
        <div className="d-flex justify-content-between">
          <h3>Urutkan Berdasarkan : </h3>
          <Form.Group className="col-s-2 text-start">
            <Form.Select
              onChange={(event) => {
                const value = event.target.value;
                setFilter(value);
              }}
              type="text"
              required
              style={{ borderRadius: '20px' }}
            >
              <option value="semua">Semua</option>
              <option value={new Date()}>Hari Ini</option>
              <option value={new Date()}>Bulan Ini</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div>
          <input
            type="text"
            onChange={(event) => {
              handleChangeSearch(event);
            }}
            value={search}
            className="rounded rounded-pill bcustomer px-3"
            placeholder="Cari Customer..."
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <table className="table table-striped table-bordered table-hover" style={{ width: '91%', fontSize: '23px', marginBottom: '20px' }}>  
          <thead>
            <tr style={{ fontWeight: 'bold' }}>
              <td>No</td>
              <td>Nama Pembeli</td>
              <td>Pemasukan</td>
              <td>Modal</td>
              <td>Laba</td>
              <td>Tanggal</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <PembukuanList customer={customer} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Pembukuan;
