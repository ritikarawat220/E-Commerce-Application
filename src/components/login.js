import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = { name: userName, password: password };
    axios
      .post("http://localhost:3001/login", data)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          // You can store other user-related data as needed
          navigate("/get/products"); // Redirect to the desired route after successful login
        }
      })
      .catch((err) => {
        console.log(err);
        // Handle login error here
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
      <div>
        USERNAME -
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        PASSWORD -
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
