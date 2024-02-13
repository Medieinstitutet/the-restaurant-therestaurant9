import { Link, NavLink } from "react-router-dom";
import "./../styles/App.scss";

const restaurtantId = "65cb31932b1f9164881776d0";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
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
      <div className="hero_Image">
        <div>
          <section className="hero_text"></section>
          <p className="restaurant_text">Välkommen till Trattoria Gustoso</p>
        </div>
      </div>
      <div className="startpage_meny">
        <button>
          <NavLink to={"/pages/menu"}>Meny</NavLink>
        </button>
      </div>
      <div className="reservation_container">
        <button>
          <Link to={"/pages/booking"}>Reservation</Link>
        </button>
      </div>
    </>
  );
};
