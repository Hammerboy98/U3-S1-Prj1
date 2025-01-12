import { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

class MyNavbar extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-dark"
          data-bs-theme="dark"
          style={{ backgroundColor: "#221f1f" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="assets/logo.png"
                style={{ width: "100px", height: "55px" }}
                alt="Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active fw-bold" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">
                    My List
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <i className="bi bi-search icons text-white"></i>
                <div id="kids" className="fw-bold text-white">
                  KIDS
                </div>
                <i className="bi bi-bell icons text-white"></i>
                <i className="bi bi-person-circle icons text-white"></i>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="mb-4 text-white">TV Shows</h2>
              <div className="btn-group" role="group">
                <div className="dropdown ms-4 mt-1">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ backgroundColor: "#221f1f" }}
                  >
                    Genres
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Comedy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Drama
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Thriller
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <i className="bi bi-grid icons text-white"></i>
              <i className="bi bi-grid-3x3 icons text-white"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MyNavbar;
