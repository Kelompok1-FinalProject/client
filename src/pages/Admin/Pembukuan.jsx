import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getLaporan } from "../../utils/server";
import PembukuanList from "../../components/PembukuanList";
import back from "../../icon/back.png";
import backHover from "../../icon/backHover.png";
import { useNavigate } from "react-router-dom";
import { ButtonKembali } from "../../components/ButtonKembali";

function Pembukuan() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("semua");
  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState([]);
  const [isHoveredBack, setIsHoveredBack] = useState(false);

  const handleMouseEnterBack = () => {
    setIsHoveredBack(true);
  };
  const handleMouseLeaveBack = () => {
    setIsHoveredBack(false);
  };
  const handleBackClick = () => {
    navigate("/homeadmin");
  };

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
      <div className="bgAll">
        <ButtonKembali handleBackClick={handleBackClick} />
        <h1>Ringkasan Pembukuan Customer</h1>
        <div
          className="d-flex justify-content-between mx-auto"
          style={{ maxWidth: "1200px", marginTop: "20px" }}
        >
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
                style={{ borderRadius: "20px" }}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <table
            className="table table-striped table-bordered table-hover"
            style={{ width: "91%", fontSize: "23px", marginBottom: "20px" }}
          >
            <thead>
              <tr style={{ fontWeight: "bold" }}>
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
      </div>
    </>
  );
}

export default Pembukuan;
