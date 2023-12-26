import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addMenu } from "../../utils/server";
import back from "../../icon/back.png";
import backHover from "../../icon/backHover.png";

function AddMenu() {
  const navigate = useNavigate();

  const [menu, setMenu] = useState({
    name: "",
    description: "",
    gambar: "",
    harga: 0,
    kategori: "",
  });
  const [isHoveredBack, setIsHoveredBack] = useState(false);

  const handleMouseEnterBack = () => {
    setIsHoveredBack(true);
  };
  const handleMouseLeaveBack = () => {
    setIsHoveredBack(false);
  };
  const handleBackClick = () => {
    navigate("/homeadmin/menu");
  };

  function onSubmitHandler(event) {
    event.preventDefault();
    addMenu(menu);
    navigate("/homeadmin/menu");
  }

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
      <div className="py-1 mx-5 m-auto">
        <strong className="fs-1 text-center text-light">Form Add Menu</strong>
        <div className={`menu-image-container ${menu.gambar ? "" : "hidden"}`}>
          {menu.gambar && (
            <img
              src={menu.gambar}
              alt="Image Post"
              className="img-thumbnail w-25 mt-3"
            />
          )}
        </div>

        <div className="w-75 mx-auto">
          <Form
            className="row g-3 m-5 text-light mx-5"
            onSubmit={(event) => {
              onSubmitHandler(event);
            }}
          >
            <div className="d-flex justify-content-center">
              <div className="col-md-12">
                <Form.Group className="mb-3 d-flex justify-content-between col-md-12 text-start">
                  <Form.Label className="me-3 col-md-2">Name</Form.Label>
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
                <Form.Group className="mb-3 d-flex justify-content-between col-md-12 text-start">
                  <Form.Label className="me-3 col-md-2">Harga</Form.Label>
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
                <Form.Group className="mb-3 d-flex justify-content-between col-md-12 text-start">
                  <Form.Label className="me-3 col-md-2">Description</Form.Label>
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
                <Form.Group className="mb-3 d-flex justify-content-between col-md-12 text-start">
                  <Form.Label className="me-3 col-md-2">Gambar</Form.Label>
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
              </div>
              <div className="px-3 col-md-4">
                <Form.Group className="row-md-6 text-start">
                  <Form.Select
                    className=""
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
              </div>
            </div>

            {menu.name &&
            menu.kategori &&
            menu.harga &&
            menu.description &&
            menu.gambar ? (
              <Button
                className="col-2 rounded rounded-pill btn-outline-primary position-relative start-50 translate-middle-x"
                variant="light"
                type="submit"
              >
                Create
              </Button>
            ) : (
              <Button
                className="col-2 rounded rounded-pill btn-outline-danger position-relative start-50 translate-middle-x"
                variant="light"
                type="submit"
                disabled
              >
                Create
              </Button>
            )}
          </Form>
        </div>
      </div>
    </>
  );
}

export default AddMenu;
