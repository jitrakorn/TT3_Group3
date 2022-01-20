import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const validateForm = (username, password) => {
    // check if valid
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm) navigate("/");
  };

  return (
    <div className="Login">
      <Form onSubmit={onSubmit}>
        <h1>Log In</h1>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block className="mb-3" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
