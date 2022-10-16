import {useState} from "react";
import { Link } from "react-router-dom";

import InputField from "./Components/InputField";


function Signup() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = (target, value) => {
    switch(target) {
      case "name":
        setName(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        setPassword(value);
        break;
    }
  }

  function clicked(event) {
    event.preventDefault();
    console.log(name)
    console.log(username)
    console.log(email)
    console.log(password)
  }

  // CSS Styles
  const styles = {
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      margin: 0,
    },
    signupBox: {
      position: "relative",
      top: "40px",
    },
    navbarBrand: {
      fontSize: "1.5rem",
    },
  };

  // return statement
  return (
    <div className="signup-page">
      <div className="navbar bg-light mb-5 shadow-sm">
        <div style={styles.navbarBrand} className="navbar-brand mx-auto">
          GetTheMovie
        </div>
      </div>

      <div
        style={styles.signupBox}
        className="signup-box bg-light position-relative col-sm-8 col-md-6 col-lg-4 mx-md-auto mx-3 text-secondary rounded-5 shadow"
      >
        <h1 style={styles.h1} className="py-4 text-center">
          Sign Up
        </h1>
        <form>
          <div>
            <InputField
              text="Jerry Seinfeld"
              label="Enter your name"
              type="text"
              name="name"
              value={name}
              handleChange={handleChange}
            />
            <InputField
              text="max 16 characters"
              label="Choose a username"
              type="text"
              name="username"
              value={username}
              handleChange={handleChange}
            />
            <InputField
              text="kramer@jacket.com"
              label="Enter your email"
              type="email"
              name="email"
              value={email}
              handleChange={handleChange}
            />
            <InputField
              text="min 8 characters"
              label="Choose a password"
              type="password"
              name="password"
              value={password}
              handleChange={handleChange}
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
            <Link to="/login">
              <button
                className="btn btn-secondary btn-lg mx-2 my-4"
                type="button"
              >
                  Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
