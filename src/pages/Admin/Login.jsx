import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { login, putAccessToken, putRole } from "../../utils/server";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmitHandler(event) {
    event.preventDefault();
    // TODO HANDLE LOGIN HERE
    const response = await login({ email, password });
    if (response?.data) {
      const accessToken = response.data;

      const decodedToken = JSON.parse(atob(accessToken.split(".")[1]));
      const role = decodedToken.role;

      putAccessToken(accessToken);
      putRole(role);
      navigate("/homeadmin");
    }
  }

  return (
    <div className="p-2">
      <div className="w-75 m-auto">
        <img src="https://i.imgur.com/UGQiraA.png" alt="Logo" className=" w-25 p-3" />
      </div>
      <Form
        className="row px-5 g-3 m-5 text-light col-md-4 mx-auto"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
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
          {email && password ? (
            <Button
              className="col-3 mb-1 btn-outline-success rounded-pill p-3 fw-bold"
              variant="light"
              type="submit"
            >
              Log In
            </Button>
          ) : (
            <Button
              className="col-3 mb-1 btn-outline-danger rounded-pill p-3 fw-bold"
              variant="light"
              type="submit"
              disabled
            >
              Log In
            </Button>
          )}
        </Form.Group>
        <div className="line" />
        <Form>
          <div className="text-start">
            if you don't have account,{" "}
            <Link to="/register" className="text">
            <Button
              className="col-3 mb-1 btn-outline-info rounded-pill p-3 fw-bold m-auto text-dark"
              variant="light"
              type="submit"
            >
              Register
            </Button>
              
            </Link>
          </div>
        </Form>
      </Form>
    </div>
  );
}

export default Login;
