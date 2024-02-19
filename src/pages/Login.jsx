import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"><img src="sar.jpg" alt="" /></span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <Link to="/home">
              <button>Sign in</button>
          </Link>
          
        </form>
        <p>
          You don't have an account?
          {/* <Link to="/register">Register</Link> */}
        </p>
      </div>
    </div>
  );
};

export default Login;
