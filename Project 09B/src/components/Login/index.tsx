import React, { ReactElement, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/redux/slices/auth";

interface Props {}
// eslint-disable-next-line
function Login({}: Props): ReactElement {
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="loginBody">
      <div className="simple-login-container">
        <div className="login-box">
          <div className="bg"></div>
          <div className="container animated fadeIn">
            <h2>Login</h2>
            <hr />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </div>
              <input type="submit" className="button" value="Login" />
              <br />
            </form>
            <Link to="/signup">
              {" "}
              <button
                className=""
                style={{
                  border: "none",
                  padding: "10px 30px",
                  cursor: "pointer",
                }}
              >
                Create An Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
