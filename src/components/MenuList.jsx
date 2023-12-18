import MenuRow from "./MenuRow";
function MenuList(props) {
  const { menus, onDelete, role, onPrivatePublic } = props;

  return (
    <>
      {menus.map((menu, index) => (
        <MenuRow
          key={menu.id}
          no={index + 1}
          index={index}
          id={menu.id}
          name={menu.name}
          gambar={menu.gambar}
          harga={menu.harga}
          kategori={menu.kategori}
          status={menu.status}
          onDelete={onDelete}
          onPrivatePublic={onPrivatePublic}
          role={role}
        >
          {menu.description && typeof menu.description === "object"
            ? menu.description.text
            : menu.description}
        </MenuRow>
      ))}
    </>
  );
}

export default MenuList;
