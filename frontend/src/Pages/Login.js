import { Link } from "react-router-dom";

import InputField from "./Components/InputField";

function Login() {
  const styles = {
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      margin: 0,
    },
    loginBox: {
      position: "relative",
      top: "100px",
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
  };

  function clicked(e) {
    e.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="navbar bg-light mb-5 shadow-sm">
        <div className="navbar-brand mx-auto">GetTheMovie</div>
      </div>

      <div
        style={styles.loginBox}
        className="login-box bg-light position-relative col-sm-8 col-md-6 col-lg-4 mx-md-auto mx-3 text-secondary rounded-5 shadow"
      >
        <h1 style={styles.h1} className="py-4 text-center">
          Login
        </h1>
        <form>
          <div>
            <InputField
              text="you@example.com"
              label="Enter your email"
              name="email"
            />
            <InputField
              text="********"
              label="Enter your password"
              name="password"
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary btn-lg mx-2 my-4"
              onClick={clicked}
              type="submit"
            >
              Login
            </button>
            <button
              className="btn btn-secondary btn-lg mx-2 my-4"
              type="button"
            >
              <Link style={styles.link} to="/signin">
                Signup
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
