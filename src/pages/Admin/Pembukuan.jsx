import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getLaporan } from "../../utils/server";
import PembukuanList from "../../components/PembukuanList";
import back from "../../icon/back.png";
import backHover from "../../icon/backHover.png";
import { useNavigate } from "react-router-dom";

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
      <img
        src={isHoveredBack ? backHover : back}
        className={`border border-primary rounded rounded-circle m-3 fixed-top bg-secondary ${
          isHoveredBack === false ? "hoveredBack" : ""
        }`}
        alt="Profile"
        width="40"
        height="40"
        onMouseEnter={handleMouseEnterBack}
        onMouseLeave={handleMouseLeaveBack}
        onClick={handleBackClick}
      />
      <h1 className="text-dark fw-bold">Ringkasan Pembukuan Customer</h1>
      <div className="d-flex justify-content-between text-dark">
        <div className="d-flex justify-content-between mx-2">
          <h3 className="px-2">Urutkan Berdasarkan : </h3>
          <Form.Group className="col-s-2 text-start">
            <Form.Select
              onChange={(event) => {
                const value = event.target.value;
                setFilter(value);
              }}
              type="text"
              required
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
      <div>
        <table className="table table-striped">
          <thead>
            <tr className="table-primary fw-bold">
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
