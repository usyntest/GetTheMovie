import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container-lg">
        <div className="navbar-brand">GetTheMovie</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="links ms-auto navbar-nav">
            <div className="nav-item">
              <Link to="/login" class="btn btn-sm btn-outline-primary m-2">
                Login
              </Link>
              <Link to="/signin" class="btn btn-sm btn-outline-secondary m-2">
                Signin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
