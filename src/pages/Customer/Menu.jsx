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
import "../../App.css";


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
    getMenuKategori(selectedCategory)
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
    <div className="bgAll pt-5 pb-5">
    <div className="mt-3 pt-2">
      <div className="border border-top-0 fixed-top bg-body-tertiary pt-1 rounded-5 rounded-top-0">
      <h3 className="fw-bold">PILIHAN MENU</h3>
      <div className="bg-warning-subtle d-flex justify-content-around py-2 rounded-5 rounded-top-0 border border-warning my-auto pt-2">
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
        <label className="px-5 border border-dark-subtle btn btn-warning rounded-pill fw-bold fixed" htmlFor="option1">
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
        <label className="px-5 border border-dark-subtle btn btn-warning rounded-pill fw-bold" htmlFor="option2">
          Minuman
        </label>
        <Button
          variant="blue"
          className="px-5 border border-dark-subtle btn-primary fs-6 rounded-pill p-2"
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
      </div>

{/*LIST MENU*/}

      
      <div className="card mx-auto col-md-10 mt-5 py-3 mb-5">
        <MenuCustomer
          menus={menus}
          inputValues={inputValues}
          onPlus={handlePlusClick}
          onMin={handleMinClick}
          onKeranjang={handleKeranjangClick}
        />
      </div>

      <div className="bg-info fixed-bottom w-100 rounded-5 rounded-bottom-0">
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
      </div>
    </div>
    </>
  );
}

export default Menu;
