import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-bottom fixed-top shadow-sm z-3">
      {/* Top Search Bar */}
      <div className="bg-primary py-2">
        <div className="container d-flex justify-content-end">
          <form className="d-flex" action="/search" method="GET">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              name="s"
              placeholder="Type & hit enter..."
            />
            <button className="btn btn-sm btn-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fw-bold" href="/">
            <img
              src="/img/logos/logo-inner.png"
              alt="Sunrise Logo"
              height={40}
              className="me-2"
            />
            Sunrise
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Main Menu */}
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/faq">
                      FAQ's
                    </a>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Our Team
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/team">
                          Team
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/team-details">
                          Team Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pricing">
                      Pricing Plans
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/services">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/house-cleaning">
                      House Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/office-cleaning">
                      Office Cleaning
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="ms-lg-3 d-none d-lg-block">
              <a href="/contact" className="btn btn-primary btn-sm">
                Free Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
