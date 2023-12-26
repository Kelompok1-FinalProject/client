import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import CustomerList from "../../components/CustomerList";
import {
  getCustomer,
  getCustomerWaitingList,
  updateStatusBayar,
  updateStatusPesanan,
} from "../../utils/server";
import { useNavigate } from "react-router-dom";
import back from "../../icon/back.png";
import backHover from "../../icon/backHover.png";

function Customer() {
  const navigate = useNavigate();
  const [selectedCustomer, setSelectedCustomer] = useState("Created");
  const [filter, setFilter] = useState("semua");
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState([]);
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

  const handleCustomerChange = (event) => {
    setSelectedCustomer(event.target.value);
  };

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onUpdateBayar = async (id, statusBayar) => {
    const response = await updateStatusBayar(id, statusBayar);
    if (!response.error) {
      getCustomer(selectedCustomer)
        .then((result) => {
          const data = result.data;
          setSelectedCustomer(selectedCustomer);
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const onUpdatePesan = async (id, statusPesanan) => {
    const response = await updateStatusPesanan(id, statusPesanan);
    if (!response.error) {
      getCustomer(selectedCustomer)
        .then((result) => {
          const data = result.data;
          setSelectedCustomer(selectedCustomer);
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    if (selectedCustomer === "In Progress") {
      getCustomerWaitingList()
        .then((result) => {
          const data = result.data;
          setSelectedCustomer(selectedCustomer);
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      getCustomer(selectedCustomer)
        .then((result) => {
          const data = result.data;
          setSelectedCustomer(selectedCustomer);
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [selectedCustomer]);

  return (
    <>
      <img
        src={isHoveredBack ? backHover : back}
        className={`border border-primary rounded rounded-circle m-3 fixed-top ${
          isHoveredBack === false ? "hoveredBack" : ""
        }`}
        alt="Profile"
        width="40"
        height="40"
        onMouseEnter={handleMouseEnterBack}
        onMouseLeave={handleMouseLeaveBack}
        onClick={handleBackClick}
      />
      <h1>Customer List</h1>
      <div className="d-flex justify-content-around">
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option1"
          autoComplete="off"
          value="Created"
          checked={selectedCustomer === "Created"}
          onChange={handleCustomerChange}
        />
        <label className="btn btn-primary" htmlFor="option1">
          Status Pembayaran
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option2"
          autoComplete="off"
          value="In Progress"
          checked={selectedCustomer === "In Progress"}
          onChange={handleCustomerChange}
        />
        <label className="btn btn-primary" htmlFor="option2">
          Daftar Tunggu
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option3"
          autoComplete="off"
          value="Done"
          checked={selectedCustomer === "Done"}
          onChange={handleCustomerChange}
        />
        <label className="btn btn-primary" htmlFor="option3">
          Status Pesanan
        </label>
      </div>
      <div className="d-flex justify-content-between">
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
            className="rounded rounded-pill border px-3"
            placeholder="Cari Customer..."
          />
        </div>
      </div>
      <div>
        {selectedCustomer === "Created" ? (
          <table className="table">
            <thead>
              <tr>
                <td>No</td>
                <td>Nama Pembeli</td>
                <td>No Meja</td>
                <td>Total Pembayaran</td>
                <td>Payment</td>
                <td>Tanggal</td>
                <td>Status Bayar</td>
              </tr>
            </thead>
            <tbody>
              <CustomerList
                order={order}
                onUpdateBayar={onUpdateBayar}
                selectedCustomer={selectedCustomer}
              />
            </tbody>
          </table>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <td>No</td>
                <td>Nama Pembeli</td>
                <td>No Meja</td>
                <td>Total Pembayaran</td>
                <td>Payment</td>
                <td>Tanggal</td>
                <td>Status Pesan</td>
              </tr>
            </thead>
            <tbody>
              <CustomerList
                order={order}
                onUpdatePesan={onUpdatePesan}
                selectedCustomer={selectedCustomer}
              />
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Customer;
