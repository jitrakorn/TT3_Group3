import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.css";

import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios.get("http://localhost:5000/user").then((res) => {
      console.log(res.data.users);

      res.data.users.forEach((item) => {
        console.log(item.Name);
        console.log(item.Password);

        if (item.Name === name && item.Password === password) {
          console.log("Logging in");
          navigate("/");
        }
      });
    });

    alert("Not a valid user");
  };

  return (
    <div className="Login">
      <Form onSubmit={onSubmitHandler}>
        <h1>Log In</h1>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
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
