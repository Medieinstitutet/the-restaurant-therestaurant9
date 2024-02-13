import { Link, NavLink } from "react-router-dom";
import "./../styles/App.scss";

const restaurtantId = "65cb31932b1f9164881776d0";

function reveal() {
  var reveals = document.querySelectorAll(".startpage_meny");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

export const Layout = () => {
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
      <div className="hero_Image">
        <div>
          <section className="hero_shadow"></section>
          <p className="restaurant_text">Välkommen till Trattoria Gustoso</p>
        </div>
      </div>
      <div className="startpage_meny">
        <p className="startpage_meny_text">
          "När det kommer till italiensk mat, är varje rätt en hyllning till
          enkelheten och kvaliteten hos dess ingredienser. Rätterna är ofta
          baserade på färska och säsongsmässiga råvaror som tar fram de
          naturliga smakerna på ett harmoniskt sätt. Oavsett vilken rätt man
          väljer på en italiensk restaurang, kan man vara säker på att få njuta
          av autentiska smaker och en måltid som är full av kärlek och passion
          för matlagning. Buon appetito!"
        </p>
        <button>
          <NavLink to={"/pages/menu"} id="link">
            Meny
          </NavLink>
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
