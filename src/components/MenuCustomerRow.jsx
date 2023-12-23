import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { addTransaksi } from "../utils/server";

function MenuRow({
  id,
  name,
  children,
  gambar,
  harga,
  onPlus,
  onMin,
  onKeranjang,
  inputValues,
}) {
  const [showChildren, setShowChildren] = useState(false);
  const [enlargeImage, setEnlargeImage] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const handleNameClick = () => {
    setShowChildren(!showChildren);
    setEnlargeImage(!enlargeImage);
  };
  const handlePlusClick = () => {
    onPlus(id, inputValue);
    setInputValue((prevValue) => prevValue + 1);
  };
  const handleMinClick = () => {
    if (!inputValue == 0) {
      onMin(id, inputValue);
      setInputValue((prevValue) => prevValue - 1);
    }
  };
  const handleKeranjangClick = async () => {
    if (!inputValue == 0) {
      const menuId = id;
      const jumlahOrder = inputValue;
      const response = await addTransaksi({ menuId, jumlahOrder });
      if (response?.data) {
        const transaksi = response.data;
        await Swal.fire({
          icon: "success",
          title: "Berhasil Menambah Pesanan",
          text: `Menambahkan ${transaksi.jumlahOrder} ${transaksi.nameMenu}`,
        });
        onKeranjang(id, inputValue);
        setInputValue((prevValue) => prevValue * 0);
      }
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center text-start my-2 mx-5 text-light rounded">
        <div className="">
          <img
            src={gambar}
            alt="Menu"
            width={enlargeImage ? 180 : 90}
            height={enlargeImage ? 180 : 90}
            className="rounded shadow"
          />
        </div>
        <div class="card p-2 bg-info bg-gradient col-md-11">
          <div
            className="card-header d-flex justify-content-between pointer"
            onClick={handleNameClick}
          >
            <h5 class="card-title">{name}</h5>
            <div class="card-text fs-5">Rp. {harga}</div>
          </div>
          {showChildren && (
            <p className="card-text fs-5 text-start">{children}</p>
          )}
          <Form className="d-flex justify-content-end">
            {showChildren && (
              <Button className="col-md-1 mx-1" onClick={handleMinClick}>
                -
              </Button>
            )}
            {showChildren && (
              <input
                className="col-md-1 rounded mx-1 fs-5 text-center p-0 bg-light"
                type="number"
                value={inputValues[id]}
                onChange={(e) => setInputValue(Number(e.target.value))}
                disabled
              />
            )}
            {showChildren && (
              <Button className="col-md-1 mx-1" onClick={handlePlusClick}>
                +
              </Button>
            )}
            {showChildren && (
              <Button className="col-md-1 mx-1" onClick={handleKeranjangClick}>
                *
              </Button>
            )}
          </Form>
        </div>
      </div>
    </>
  );
}

MenuRow.propTypes = {
  no: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string, // Children is not always present
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  gambar: PropTypes.string.isRequired,
  harga: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MenuRow;
