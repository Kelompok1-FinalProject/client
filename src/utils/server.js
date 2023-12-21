const BASE_URL = "http://103.127.97.117:4001";

function getAccessToken() {
  return localStorage.getItem("accessToken");
}

function getRole() {
  return localStorage.getItem("role");
}

function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

function putRole(role) {
  return localStorage.setItem("role", role);
}

function deleteAccessToken() {
  return localStorage.removeItem("accessToken");
}

function deleteRole() {
  return localStorage.removeItem("role");
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();
  if (response.status >= 400) {
    alert(responseJson.message);
    return { error: true, code: response.status, data: responseJson.data };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function register({ name, role, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, role, email, password }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    alert(responseJson.msg);
    return { error: true, code: response.status };
  }

  return { error: false, code: response.status };
}

async function testServer() {
  const response = await fetch(`${BASE_URL}`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function addMenu({ name, description, gambar, harga, kategori }) {
  const response = await fetchWithToken(`${BASE_URL}/menu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, gambar, harga, kategori }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getMenu() {
  const response = await fetch(`${BASE_URL}/menu`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getMenuId(id) {
  const response = await fetch(`${BASE_URL}/menu/${id}`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getMenuKategori(kategori, status) {
  const response = await fetch(
    `${BASE_URL}/menu/${kategori}/menu?status=${status}`
  );
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function updateMenu(id, name, description, gambar, harga) {
  const response = await fetchWithToken(`${BASE_URL}/menu/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, description, gambar, harga }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function updateStatusMenu(id, status) {
  const response = await fetchWithToken(`${BASE_URL}/menu/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function deleteMenu(id) {
  const response = await fetchWithToken(`${BASE_URL}/menu/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function addCustomer({ name, noMeja }) {
  const response = await fetch(`${BASE_URL}/customer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, noMeja }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getCustomer() {
  const response = await fetchWithToken(`${BASE_URL}/customer`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getCustomerId() {
  const response = await fetchWithToken(`${BASE_URL}/customer/buyer`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getCustomerWaitingList() {
  const response = await fetch(`${BASE_URL}/customer/waitinglist`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function updatePayment(payment) {
  const response = await fetchWithToken(`${BASE_URL}/customer/payment`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payment }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function updateStatusBayar(id, statusBayar) {
  const response = await fetchWithToken(`${BASE_URL}/customer/${id}/bayar`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ statusBayar }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function updateStatusPesanan(id, statusPesanan) {
  const response = await fetchWithToken(`${BASE_URL}/customer/${id}/pesanan`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ statusPesanan }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function addTransaksi({ menuId, jumlahOrder }) {
  const response = await fetchWithToken(`${BASE_URL}/transaksi`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ menuId, jumlahOrder }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getTransaksi() {
  const response = await fetchWithToken(`${BASE_URL}/transaksi`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getTransaksiId() {
  const response = await fetchWithToken(`${BASE_URL}/transaksi/buyer`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function updateTransaksi(id, menuId, jumlahOrder) {
  const response = await fetchWithToken(`${BASE_URL}/transaksi/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ menuId, jumlahOrder }),
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function deleteTransaksi(id) {
  const response = await fetchWithToken(`${BASE_URL}/transaksi/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getLaporan() {
  const response = await fetchWithToken(`${BASE_URL}/laporan`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

async function getLaporanId(id) {
  const response = await fetchWithToken(`${BASE_URL}/laporan/${id}`);
  const responseJson = await response.json();

  if (response.status >= 400) {
    return { error: true, code: response.status, data: null };
  }

  return { error: false, code: response.status, data: responseJson.data };
}

export {
  getAccessToken,
  getRole,
  putAccessToken,
  putRole,
  deleteAccessToken,
  deleteRole,
  login,
  register,
  testServer,
  addMenu,
  getMenu,
  getMenuId,
  getMenuKategori,
  updateMenu,
  updateStatusMenu,
  deleteMenu,
  addCustomer,
  getCustomer,
  getCustomerId,
  getCustomerWaitingList,
  updatePayment,
  updateStatusBayar,
  updateStatusPesanan,
  addTransaksi,
  getTransaksi,
  getTransaksiId,
  updateTransaksi,
  deleteTransaksi,
  getLaporan,
  getLaporanId,
};
