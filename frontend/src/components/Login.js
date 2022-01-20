import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="d-flex align-items-center justify-content-center">
      <form>
        <div className="mb-3">
          <h1>LoginPage</h1>
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            className="login-username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="login-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Link to="/home" className="btn btn-primary">
          Login
        </Link>

        <Link to="/register" className="btn btn-primary">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
