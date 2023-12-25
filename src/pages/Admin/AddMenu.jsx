import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addMenu } from "../../utils/server";

function AddMenu() {
  const navigate = useNavigate();

  const [menu, setMenu] = useState({
    name: "",
    description: "",
    gambar: "",
    harga: 0,
    kategori: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    addMenu(menu);
    navigate("/homeadmin/menu");
  }

  return (
    <div className="p-2">
      <strong className="fs-1 text-center text-light">Form Add Menu</strong>
      <Form
        className="row g-3 m-5 text-light"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="col-md-12 text-start">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setMenu({ ...menu, name: value });
            }}
            type="text"
            placeholder="Add Name"
            required
          />
        </Form.Group>
        <Form.Group className="row-md-6 text-start">
          <Form.Label>Kategori</Form.Label>
          <Form.Select
            onChange={(event) => {
              const value = event.target.value;
              setMenu({ ...menu, kategori: value });
            }}
            type="text"
            required
          >
            <option value="">-- Pilih Kategori --</option>
            <option value="makanan">Makanan</option>
            <option value="minuman">Minuman</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-md-12 text-start">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setMenu({ ...menu, harga: value });
            }}
            type="text"
            placeholder="Add Harga"
            required
          />
        </Form.Group>
        <Form.Group className="col-12 text-start">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setMenu({ ...menu, description: value });
            }}
            type="text"
            placeholder="Add Description"
            as="textarea"
            rows={3}
            required
          />
        </Form.Group>
        <Form.Group className="col-md-12 text-start">
          <Form.Label>Gambar</Form.Label>
          <Form.Control
            onChange={(event) => {
              const value = event.target.value;
              setMenu({ ...menu, gambar: value });
            }}
            type="text"
            placeholder="Add Gambar"
            required
          />
        </Form.Group>
        {menu.name &&
        menu.kategori &&
        menu.harga &&
        menu.description &&
        menu.gambar ? (
          <Button
            className="col-2 btn-outline-primary position-relative start-50 translate-middle-x"
            variant="light"
            type="submit"
          >
            Create
          </Button>
        ) : (
          <Button
            className="col-2 btn-outline-danger position-relative start-50 translate-middle-x"
            variant="light"
            type="submit"
            disabled
          >
            Create
          </Button>
        )}
      </Form>
    </div>
  );
}

export default AddMenu;
