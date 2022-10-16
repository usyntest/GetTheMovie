import { Link } from "react-router-dom";
import {useState} from "react";
import instance from "../instance";

// Components
import InputField from "./Components/InputField";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleChange = (target, value) => {
    if(target === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  // CSS Styles
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
  };

  // Login Function
  const clicked = async (event) => {
    event.preventDefault();
    // let data = await instance.post("login",{
    //   email: email,
    //   password: password
    // }).then(res => {
    //   if(res.status !== 200) {
    //     console.log("request gave error");
    //   } else {
    //     return res
    //   }
    // }).catch(err => {
    //   return err.message
    // })

    console.log(email);
    console.log(password)
  }


  // return statement
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
                type="email"
              text="you@example.com"
              label="Enter your email"
              name="email"
                value={email}
                handleChange={handleChange}
            />
            <InputField
                type="password"
              text="********"
              label="Enter your password"
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
              Login
            </button>

            <Link to="/signup">
              <button className="btn btn-secondary btn-lg mx-2 my-4"
                  type="button">
                  Signup
                </button>
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
