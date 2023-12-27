import React, { useEffect, useState } from "react";
import MenuList from "../../components/MenuList";
import {
  deleteMenu,
  getMenuKategori,
  getRole,
  updateStatusMenu,
} from "../../utils/server";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import back from "../../icon/back.png";
import backHover from "../../icon/backHover.png";
import { ButtonKembali } from "../../components/ButtonKembali";

function MenuAdmin() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("makanan");
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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onDeleteHandler = async (id) => {
    const deleteResult = await deleteMenu(id);

    if (!deleteResult.error) {
      const getMenusResult = await getMenuKategori(selectedCategory);

      if (!getMenusResult.error) {
        setMenus(getMenusResult.data);
      } else {
        console.error(
          "Error fetching menus after deletion:",
          getMenusResult.code
        );
      }
    } else {
      console.error("Error deleting note:", deleteResult.code);
    }
  };

  const onPrivatePublicHandler = async (id, status) => {
    const privatePublicResult = await updateStatusMenu(id, status);

    if (!privatePublicResult.error) {
      const getMenusResult = await getMenuKategori(selectedCategory);

      if (!getMenusResult.error) {
        setMenus(getMenusResult.data);
      } else {
        console.error(
          "Error fetching menus after deletion:",
          getMenusResult.code
        );
      }
    } else {
      console.error("Error deleting note:", privatePublicResult.code);
    }
  };

  const handleAddMenuClick = () => {
    navigate("/homeadmin/menu/add");
  };

  useEffect(() => {
    const role = getRole();
    setUserRole(role);
    getMenuKategori(selectedCategory)
      .then((result) => {
        const data = result.data;
        setMenus(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    getMenuKategori(selectedCategory)
      .then((result) => {
        const data = result.data;
        setMenus(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [selectedCategory]);

  return (
    <>
      <div className="bgAll">
        <ButtonKembali handleBackClick={handleBackClick} />
        <div className="d-flex justify-content-around pt-3">
          <input
            type="radio"
            className="btn-check"
            name="options"
            id="option1"
            autoComplete="off"
            value="makanan"
            checked={selectedCategory === "makanan"}
            onChange={handleCategoryChange}
          />
          <label
            className={`border border-dark fw-bold btn btn-outline-warning btn-lg btn-block btn-lg p-3 w-25 rounded-pill ${
              selectedCategory === "makanan" ? "active" : "btn-light text-dark"
            }`}
            htmlFor="option1"
          >
            Makanan
          </label>

          <input
            type="radio"
            className="btn-check"
            name="options"
            id="option2"
            autoComplete="off"
            value="minuman"
            checked={selectedCategory === "minuman"}
            onChange={handleCategoryChange}
          />
          <label
            className={`border border-dark fw-bold btn btn-outline-warning btn-lg btn-block btn-lg p-3 w-25 rounded-pill ${
              selectedCategory === "minuman" ? "active" : "btn-light text-dark"
            }`}
            htmlFor="option2"
          >
            Minuman
          </label>
        </div>

        <div className="mx-auto p-4 pb-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Gambar</th>
                <th className="px-5">Name</th>
                <th>Harga</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <MenuList
                menus={menus}
                onDelete={onDeleteHandler}
                onPrivatePublic={onPrivatePublicHandler}
                role={userRole}
              />
            </tbody>
          </table>
        </div>
        <div>
          {userRole === "Owner" ? (
            <Button
              className="col-3 mx-auto btn-outline-light border-warning fixed-bottom p-2 fs-2 w-100 text-dark fw-bold"
              variant="warning"
              type="submit"
              onClick={handleAddMenuClick}
            >
              Tambahkan Menu
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default MenuAdmin;
