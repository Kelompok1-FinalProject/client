import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addCustomer, putAccessToken } from "../../utils/server";
import Swal from "sweetalert2";
import "../../App.css";

function AddCustomer() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  async function onTempatHandler(event) {
    event.preventDefault();

    const { value: noMeja } = await Swal.fire({
      title: "Makan Di Tempat",
      input: "text",
      inputLabel: "Masukkan Nomor Meja",
      inputPlaceholder: "Masukkan Nomor Meja...",
      confirmButtonText: "Buat Pesanan",
      showCancelButton: true,
      inputValidator: async (value) => {
        if (!value) {
          return "Nomor meja tidak boleh kosong!";
        }
      },
    });
    const parsedNoMeja = parseInt(noMeja, 10);
    if (parsedNoMeja < 100 && name.length >= 3) {
      const response = await addCustomer({ name, noMeja: parsedNoMeja });
      if (!response.error) {
        putAccessToken(response.data);
        navigate("/home");
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Customer Gagal dibuat",
        text: "Panjang nama min 3 karakter dan max 20 karakter",
      });
    }
  }
  async function onPulangHandler(event) {
    event.preventDefault();

    await Swal.fire({
      title: "Bawa Pulang",
      input: "text",
      inputLabel: "Masukkan Nomor Meja",
      inputPlaceholder: "Bawa Pulang",
      confirmButtonText: "Buat Pesanan",
      showCancelButton: true,
      inputAttributes: {
        disabled: true,
      },
    });
    const response = await addCustomer({ name });
    if (!response.error) {
      putAccessToken(response.data);
      navigate("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Customer Gagal dibuat",
        text: "Panjang nama min 3 karakter dan max 20 karakter",
      });
    }
  }
  return (
    <div className="bg-first mx-auto my-auto p-5">
      <div className="m-2">
    <div className="p-2 card m-auto py-3 bg-body-tertiary w-75 my-auto">
      <strong className="fs-1 text-center fw-bold">SELAMAT DATANG</strong>

      <img src="https://i.imgur.com/NLIp7Rv.png" alt="logo Serumpun Rasa" className="mx-auto w-25 m-5"/>
      <Form className="row px-5 g-3 mb-5 text-light col-md-4 mx-auto">
        <Form.Group className="row-md-6 text-start">
          <Form.Control
            type="text"
            className="text-center"
            placeholder="Silahkan Isi Nama Anda"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </Form.Group>
        <h5 className="text-dark p-4">Pilih Tipe Pemesanan</h5>
        <Form.Group className="d-flex justify-content-around">
          <Button
            className="col-8 btn-warning rounded-pill mx-5 fw-bold py-3"
            
            type="submit"
            onClick={(event) => {
              onTempatHandler(event);
            }}
          >
            Makan Di Tempat
          </Button>
          <Button
            className="col-8 btn-warning rounded-pill mx-5 fw-bold py-3"
            
            type="submit"
            onClick={(event) => {
              onPulangHandler(event);
            }}
          >
            Bawa Pulang
          </Button>
        </Form.Group>
      </Form>
    </div>
    </div>
    </div>
  );
}

export default AddCustomer;
