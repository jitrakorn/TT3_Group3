import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form>
        <div className="p-2">
          <h1>LoginPage</h1>
        </div>
        <div className="p-2">
          <label>Name</label>
          <input
            className="login-username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="p-2">
          <label>Password</label>
          <input
            type="password"
            className="login-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="p-2">
          <Link to="/home" className="btn btn-primary p-2">
            Login
          </Link>
        </div>
        <div className="p-2">
          <Link to="/register" className="btn btn-primary p-2">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
