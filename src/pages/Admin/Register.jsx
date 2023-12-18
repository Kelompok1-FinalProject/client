import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../../utils/server";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    // TODO HANDLE LOGIN HERE
    const response = await register({ name, role, email, password });
    if (response) {
      Swal.fire({
        icon: "success",
        title: "Account Berhasil dibuat",
        text: `Account dengan nama ${name} berhasil dibuat`,
      });
      navigate("/login");
    }
  }
  return (
    <div className="p-2">
      <strong className="fs-1 text-center text-light">Sign Up</strong>
      <Form
        className="row px-5 g-3 m-5 text-light col-md-4 mx-auto"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <Form.Group className="row-md-6 text-start">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </Form.Group>
        <Form.Group className="row-md-6 text-start">
          <Form.Label>Role</Form.Label>
          <Form.Select
            onChange={(e) => setRole(e.target.value)}
            value={role}
            required
          >
            <option value="">-- Pilih Role --</option>
            <option value="Kasir">Kasir</option>
            <option value="Pelayan">Pelayan</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="row-md-6 text-start">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Form.Group>
        <Form.Group className="row-md-6 text-start">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Group>
        <Form.Group>
          {name && role && email && password ? (
            <Button
              className="col-3 mb-1 btn-outline-primary"
              variant="light"
              type="submit"
            >
              Register
            </Button>
          ) : (
            <Button
              className="col-3 mb-1 btn-outline-danger"
              variant="light"
              type="submit"
              disabled
            >
              Register
            </Button>
          )}
        </Form.Group>
      </Form>
    </div>
  );
}

export default Register;
