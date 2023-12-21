import Swal from "sweetalert2";

const showArrayAlert = (array) => {
  const content = array
    .map((item, index) => `${index + 1}. ${item}`)
    .join("<br>");

  const arrayContent = array.map(
    (obj) => `${obj.nameMenu}: ${obj.jumlahOrder}`
  );

  Swal.fire({
    title: "Isi Array",
    html: `<pre>${arrayContent.join("\n")}</pre>`,
    confirmButtonText: "OK",
  });
};

export default showArrayAlert;
