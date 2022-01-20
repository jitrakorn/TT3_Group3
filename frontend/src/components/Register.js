import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form>
        <div className="mb-3">
          <h1>Register Page</h1>
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            className="register-username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="register-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="password"
            className="register-age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="password"
            className="register-birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="password"
            className="register-email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="password"
            className="register-phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input
            type="password"
            className="register-city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className="mb-3">
          <label>Country</label>
          <input
            type="password"
            className="register-country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </div>

        <Link to="/login" className="btn btn-primary">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Register;
