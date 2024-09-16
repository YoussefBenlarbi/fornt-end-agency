"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);
  const destinationsDropdownRef = useRef(null);
  const toursDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDestinations = (e) => {
    e.stopPropagation();
    setIsDestinationsOpen(!isDestinationsOpen);
    setIsToursOpen(false);
  };

  const toggleTours = (e) => {
    e.stopPropagation();
    setIsToursOpen(!isToursOpen);
    setIsDestinationsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        destinationsDropdownRef.current &&
        !destinationsDropdownRef.current.contains(event.target)
      ) {
        setIsDestinationsOpen(false);
      }
      if (
        toursDropdownRef.current &&
        !toursDropdownRef.current.contains(event.target)
      ) {
        setIsToursOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const destinations = [
    { title: "Marrakech", route: "/destinations/marrakech" },
    { title: "Fes", route: "/destinations/fes" },
    { title: "Casablanca", route: "/destinations/casablanca" },
    { title: "Chefchaouen", route: "/destinations/chefchaouen" },
    { title: "Essaouira", route: "/destinations/essaouira" },
    { title: "Merzouga", route: "/destinations/merzouga" },
    { title: "Ouarzazate", route: "/destinations/ouarzazate" },
    { title: "All destinations", route: "/destinations" },
  ];

  const tourStarts = [
    { title: "Marrakech", route: "/tours/marrakech" },
    { title: "Casablanca", route: "/tours/casablanca" },
    { title: "Fes", route: "/tours/fes" },
    { title: "Tangier", route: "/tours/tangier" },
  ];

  const tourDurations = [
    { title: "3 Days", route: "/tours/3-days" },
    { title: "5 Days", route: "/tours/5-days" },
    { title: "7 Days", route: "/tours/7-days" },
    { title: "All Tours", route: "/tours/all-tours" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Moroccan experience tours</div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link href="/" onClick={toggleMenu}>
            HOME
          </Link>
          
          <div className="dropdown" ref={toursDropdownRef}>
            <button className="dropbtn" onClick={toggleTours}>
              TOURS
              <i
                className={`fa fa-caret-down ${isToursOpen ? "open" : ""}`}
              ></i>
            </button>
            <div className={`dropdown-content ${isToursOpen ? "show" : ""}`}>
              <div className="dropdown-column">
                <h3 style={{ color: "gray", fontSize: "13px" }}>Starts From</h3>
                {tourStarts.map((city, index) => (
                  <Link key={index} href={city.route} onClick={toggleMenu}>
                    {city.title}
                  </Link>
                ))}
              </div>
              <div className="dropdown-column">
                <h3 style={{ color: "gray", fontSize: "13px" }}>Duration</h3>
                {tourDurations.map((duration, index) => (
                  <Link key={index} href={duration.route} onClick={toggleMenu}>
                    <span className="duration">{duration.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="dropdown" ref={destinationsDropdownRef}>
            <button className="dropbtn" onClick={toggleDestinations}>
              DESTINATIONS
              <i
                className={`fa fa-caret-down ${
                  isDestinationsOpen ? "open" : ""
                }`}
              ></i>
            </button>
            <div
              className={`dropdown-content ${isDestinationsOpen ? "show" : ""}`}
            >
              <div className="dropdown-column">
                {destinations.slice(0, 4).map((dest, index) => (
                  <Link key={index} href={dest.route} onClick={toggleMenu}>
                    {dest.title}
                  </Link>
                ))}
              </div>
              <div className="dropdown-column">
                {destinations.slice(4).map((dest, index) => (
                  <Link key={index + 4} href={dest.route} onClick={toggleMenu}>
                    {dest.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about-us" onClick={toggleMenu}>
            ABOUT US{" "}
          </Link>
          <Link href="/blog" onClick={toggleMenu}>
            BLOG
          </Link>
          <Link href="/contact-us" onClick={toggleMenu}>
            CONTACT US
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
