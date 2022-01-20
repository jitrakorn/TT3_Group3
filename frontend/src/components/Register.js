import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.css";

import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  let navigate = useNavigate();

  const validateForm = () => {
    return name.length > 0 && password.length > 0;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // details.name = name;
    // details.password = password;
    // details.age = age;
    // details.birthday = birthday;
    // details.email = email;
    // details.phone = phone;
    // details.city = city;
    // details.country = country;

    const details = {
      name: name,
      password: password,
      age: age,
      birthday: birthday,
      email: email,
      phone: phone,
      city: city,
      country: country,
    };
    axios.post("/user", details).then((res) => {
      console.log(res.data);
    });

    navigate("/login");
  };

  return (
    <div className="Login">
      <Form onSubmit={onSubmitHandler}>
        <h1>Register</h1>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
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
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control value={age} onChange={(e) => setAge(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Form.Group>
        <Button block className="mb-3" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
