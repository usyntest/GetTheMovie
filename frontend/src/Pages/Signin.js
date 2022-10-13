import { Link } from "react-router-dom";

import InputField from "./Components/InputField";

function Signin() {
  function clicked(event) {
    event.preventDefault();
  }

  const styles = {
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      margin: 0,
    },
    signinBox: {
      position: "relative",
      top: "40px",
    },
    navbarBrand: {
      fontSize: "1.5rem",
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
  };

  return (
    <div className="signin-page">
      <div className="navbar bg-light mb-5 shadow-sm">
        <div style={styles.navbarBrand} className="navbar-brand mx-auto">
          GetTheMovie
        </div>
      </div>

      <div
        style={styles.signinBox}
        className="signin-box bg-light position-relative col-sm-8 col-md-6 col-lg-4 mx-md-auto mx-3 text-secondary rounded-5 shadow"
      >
        <h1 style={styles.h1} className="py-4 text-center">
          Sign Up
        </h1>
        <form>
          <div>
            <InputField
              text="Ken Adams"
              label="Enter your name"
              type="text"
              name="name"
            />
            <InputField
              text="max 16 characters"
              label="Choose a username"
              type="text"
              name="username"
            />
            <InputField
              text="you@example.com"
              label="Enter your email"
              type="email"
              name="email"
            />
            <InputField
              text="min 8 characters"
              label="Choose a password"
              type="password"
            />
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary btn-lg mx-2 my-4"
              onClick={clicked}
              type="submit"
            >
              Signup
            </button>
            <button
              className="btn btn-secondary btn-lg mx-2 my-4"
              type="button"
            >
              <Link style={styles.link} to="/login">
                Login
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
