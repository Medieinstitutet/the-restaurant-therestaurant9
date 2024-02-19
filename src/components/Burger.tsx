import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Burger = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div className="mobile-burger-button">
        <button
          type="button"
          id="burger-menu"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <span className="burger-bar-one"></span>
          <span className="burger-bar-two"></span>
          <span className="burger-bar-three"></span>
        </button>
      </div>
      <div className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
        <ul>
          <li>
            <NavLink to={"/"} onClick={() => setNavbarOpen(false)}>
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to={"/pages/booking"} onClick={() => setNavbarOpen(false)}>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/pages/menu"} onClick={() => setNavbarOpen(false)}>
              Meny
            </NavLink>
          </li>
          <li>
            <NavLink to={"/pages/contact"} onClick={() => setNavbarOpen(false)}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
