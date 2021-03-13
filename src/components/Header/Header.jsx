import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" id="homeLink">
          Nathan Castaldi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio" id="portfolioLink">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Resume" id="resumeLink">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" id="contactLink">
                Contact
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item navIcon">
                <a href="mailto:nathan@castaldi.dev">
                  <i className="far fa-envelope mynav"></i>
                </a>
              </li>
              <li className="nav-item navIcon">
                <a href="https://www.linkedin.com/in/nathancastaldi/">
                  <i className="fab fa-linkedin-in mynav"></i>
                </a>
              </li>
              <li className="nav-item navIcon">
                <a href="https://github.com/ncastaldi">
                  <i className="fab fa-github mynav"></i>
                </a>
              </li>
              <li className="nav-item navIcon">
                <a href="https://stackoverflow.com/story/ncastaldi">
                  <i className="fab fa-stack-overflow mynav"></i>
                </a>
              </li>
              <li className="nav-item navIcon">
                <a href="https://docs.google.com/document/d/1RiNULzi5ES22eSxLu2hHlzOUnjKyAeU7q4mRRQixKEw/edit?usp=sharing">
                  <i className="fas fa-file-download mynav"></i>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
