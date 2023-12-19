import React, { useEffect, useState } from "react";
import MenuList from "../../components/MenuList";
import {
  deleteMenu,
  getAccessToken,
  getMenu,
  getMenuKategori,
  getRole,
} from "../../utils/server";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MenuAdmin() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("makanan");

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

  const handleAddMenuClick = () => {
    navigate("/homeadmin/menu/add");
  };

  useEffect(() => {
    const role = getRole();
    setUserRole(role);
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
      <div className="d-flex justify-content-around">
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
        <label className="btn btn-primary btn-lg p-3 w-25 rounded-pill " htmlFor="option1">
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
        <label className="btn btn-primary btn-lg p-3 rounded-pill w-25" htmlFor="option2">
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
              role={userRole}
            />
          </tbody>
        </table>
      </div>
      <div>
        {userRole === "Owner" ? (
          <Button
            className="col-3 mx-auto btn-outline-primary fixed-bottom p-3 fs-2 w-100 text-dark fw-bold"
            variant="light"
            type="submit"
            onClick={handleAddMenuClick}
          >
            Tambahkan Menu
          </Button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default MenuAdmin;
