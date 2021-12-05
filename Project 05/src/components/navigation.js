import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import "../css/navigation.css";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState({
    isScrolled: "false",
    css: "navbar navbar-expand-lg fixed-top",
  });

  useEffect((_) => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 1) {
        setScrolled({
          isScrolled: true,
          css: "navbar navbar-expand-lg fixed-top bg-color-scrolled",
        });
      } else {
        setScrolled({
          isScrolled: false,
          css: "navbar navbar-expand-lg fixed-top bg-color",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={scrolled.css}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-leaf"></i>
        </button>
        <a className="navbar-brand" href="#Breathe">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />{" "}
          Green
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#Breathe">
                Let's Breathe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Pollution">
                Green City
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Restoration">
                Restoration
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Footer">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
