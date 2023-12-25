import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { addMenu, getMenuId, updateMenu } from "../../utils/server";

function EditMenu() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [menu, setMenu] = useState({
    name: "",
    description: "",
    gambar: "",
    harga: 0,
  });

  useEffect(() => {
    getMenuId(id)
      .then((result) => {
        const data = result.data;
        setMenu(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  function onSubmitHandler(event) {
    event.preventDefault();
    updateMenu(id, menu.name, menu.description, menu.gambar, menu.harga);
    navigate("/homeadmin/menu");
  }

  return (
    <div className="p-2">
      <strong className="fs-1 text-center text-light">Form Edit Menu</strong>
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
            value={menu.name}
            required
          />
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
            value={menu.harga}
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
            value={menu.description}
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
            value={menu.gambar}
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
            Update
          </Button>
        ) : (
          <Button
            className="col-2 btn-outline-danger position-relative start-50 translate-middle-x"
            variant="light"
            type="submit"
            disabled
          >
            Update
          </Button>
        )}
      </Form>
    </div>
  );
}

export default EditMenu;
