import { NavLink } from "react-router-dom";

import { Burger } from "./Burger";

export const Navigation = () => {
  return (
    <>
      <nav>
        <h2>Trattoria Gustoso</h2>

        <Burger />
        <ul>
          <li>
            <NavLink to={"/"}>Hem</NavLink>
          </li>
          <li>
            <NavLink to={"/pages/booking"}>Reservation</NavLink>
          </li>
          <li>
            <NavLink to={"/pages/menu"}>Meny</NavLink>
          </li>
          <li>
            <NavLink to={"/pages/contact"}>Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
