import { NavLink, Outlet } from "react-router-dom";

export const PagesLayout = () => {
  return (
    <>
      <header>
        <nav>
          <h2>Trattoria Gustoso</h2>
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
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
