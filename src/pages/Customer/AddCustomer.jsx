import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { addCustomer, putAccessToken } from "../../utils/server";
import Swal from "sweetalert2";

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
    if (noMeja < 100 && name.length >= 3) {
      const response = await addCustomer({ name, noMeja });
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
    <div className="p-2">
      <strong className="fs-1 text-center text-light">Selamat Datang</strong>
      <Form className="row px-5 g-3 m-5 text-light col-md-4 mx-auto">
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
        <Form.Group className="d-flex justify-content-around p-0">
          <Button
            className="col-8 m-5 btn-outline-primary"
            variant="light"
            type="submit"
            onClick={(event) => {
              onTempatHandler(event);
            }}
          >
            Makan Di Tempat
          </Button>
          <Button
            className="col-8 m-5  btn-outline-primary"
            variant="light"
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
  );
}

export default AddCustomer;
