import MenuCustomerRow from "./MenuCustomerRow";
function MenuCustomer(props) {
  const { menus, onPlus, onMin, onKeranjang, inputValues } = props;

  return (
    <>
      {menus.map((menu, index) => (
        <MenuCustomerRow
          key={menu.id}
          no={index + 1}
          index={index}
          id={menu.id}
          name={menu.name}
          gambar={menu.gambar}
          harga={menu.harga}
          kategori={menu.kategori}
          status={menu.status}
          onPlus={onPlus}
          onMin={onMin}
          onKeranjang={onKeranjang}
          inputValues={inputValues}
        >
          {menu.description && typeof menu.description === "object"
            ? menu.description.text
            : menu.description}
        </MenuCustomerRow>
      ))}
    </>
  );
}

export default MenuCustomer;
