import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getMenuId, updateMenu } from "../../utils/server";
import back from "../../icon/back.png";
import backHover from "../../icon/backHover.png";
import { ButtonKembali } from "../../components/ButtonKembali";

function EditMenu() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [menu, setMenu] = useState({
    name: "",
    description: "",
    gambar: "",
    harga: 0,
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
    <>
      <div className="bgAll text-dark">
        <ButtonKembali handleBackClick={handleBackClick} />
        <div className="py-1 mx-5 m-auto">
          <strong className="fs-1 text-center">Form Edit Menu</strong>
          <div
            className={`menu-image-container ${menu.gambar ? "" : "hidden"}`}
          >
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
              className="row g-3 m-5 mx-5"
              onSubmit={(event) => {
                onSubmitHandler(event);
              }}
            >
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
                    value={menu.name}
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
                    value={menu.harga}
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
                    value={menu.description}
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
                    value={menu.gambar}
                    required
                  />
                </Form.Group>
              </div>

              {menu.name &&
              menu.kategori &&
              menu.harga &&
              menu.description &&
              menu.gambar ? (
                <Button
                  className="col-2 rounded rounded-pill btn-outline-light border-warning position-relative start-50 translate-middle-x"
                  variant="warning"
                  type="submit"
                >
                  Update
                </Button>
              ) : (
                <Button
                  className="col-2 rounded rounded-pill btn-outline-danger position-relative start-50 translate-middle-x"
                  variant="light"
                  type="submit"
                  disabled
                >
                  Update
                </Button>
              )}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditMenu;
