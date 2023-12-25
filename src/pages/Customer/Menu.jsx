import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import MenuCustomer from "../../components/MenuCustomer";
import {
  deleteTransaksi,
  getCustomerId,
  getMenuKategori,
  getTransaksiId,
  updateTransaksi,
} from "../../utils/server";
import Transaksi from "../../components/Transaksi";

function Menu() {
  const [menus, setMenus] = useState([]);
  const [pesanan, setPesanan] = useState({});
  const [filterMenu, setFilterMenu] = useState("Harga Termurah");
  const [selectedCategory, setSelectedCategory] = useState("makanan");
  const [inputValues, setInputValues] = useState({});
  const [order, setOrder] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handlePlusClick = (menuId, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [menuId]: parseInt(value) + 1,
    }));
  };
  const handleMinClick = (menuId, value) => {
    if (inputValues[menuId] > 0) {
      setInputValues((prevValues) => ({
        ...prevValues,
        [menuId]: parseInt(value) - 1,
      }));
    }
  };
  const handleKeranjangClick = async (menuId) => {
    if (inputValues[menuId] > 0) {
      setInputValues((prevValues) => ({
        ...prevValues,
        [menuId]: inputValues[menuId] * 0,
      }));
      getCustomerId()
        .then((result) => {
          const data = result.data;
          setPesanan(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      getTransaksiId()
        .then((result) => {
          const data = result.data;
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const handleDeleteChange = async (id) => {
    const response = await deleteTransaksi(id);
    if (!response.error) {
      getCustomerId()
        .then((result) => {
          const data = result.data;
          setPesanan(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      getTransaksiId()
        .then((result) => {
          const data = result.data;
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  const handleUpdateChange = async (id, menuId, EditJumlah) => {
    const response = await updateTransaksi(id, menuId, EditJumlah);
    if (!response.error) {
      getCustomerId()
        .then((result) => {
          const data = result.data;
          setPesanan(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      getTransaksiId()
        .then((result) => {
          const data = result.data;
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  useEffect(() => {
    getMenuKategori(selectedCategory, "public")
      .then((result) => {
        const data = result.data;
        setMenus(data);

        // Set nilai awal input untuk setiap menu
        const initialValues = {};
        data.forEach((menu) => {
          initialValues[menu.id] = 0;
        });
        setInputValues(initialValues);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [selectedCategory]);

  useEffect(() => {
    getCustomerId()
      .then((result) => {
        const data = result.data;
        setPesanan(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    getTransaksiId()
      .then((result) => {
        const data = result.data;
        setOrder(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <h1>Pilihan Menu</h1>
      <div className="d-flex justify-content-around mb-3">
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
        <label className="btn btn-primary" htmlFor="option1">
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
        <label className="btn btn-primary" htmlFor="option2">
          Minuman
        </label>
        <Button
          variant="dark"
          className="btn-outline-danger fs-6"
          onClick={() => {
            const newFiter =
              filterMenu === "Harga Termurah"
                ? "Harga Termahal"
                : "Harga Termurah";
            setFilterMenu(newFiter);
          }}
        >
          {filterMenu}
        </Button>
      </div>
      <div className="card mx-auto col-md-10">
        <MenuCustomer
          menus={menus}
          inputValues={inputValues}
          onPlus={handlePlusClick}
          onMin={handleMinClick}
          onKeranjang={handleKeranjangClick}
        />
      </div>
      <div className="container bg-primary mb-0">
        {order &&
          pesanan &&
          pesanan.name &&
          pesanan.Transaksis &&
          pesanan.Transaksis.length > 0 && (
            <Transaksi
              jumlahPesanan={pesanan.Transaksis.length}
              bayar={pesanan.totalPembayaran}
              noMeja={pesanan.noMeja}
              order={order}
              onDelete={handleDeleteChange}
              onUpdate={handleUpdateChange}
            />
          )}
      </div>
    </>
  );
}

export default Menu;
