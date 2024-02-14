import { NavLink, useNavigate } from "react-router-dom";
import "./../styles/App.scss";

const restaurtantId = "65cb31932b1f9164881776d0";

export const Layout = () => {
  const navigate = useNavigate();

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
          <div className="restaurant_text">
            <p>Välkommen till</p>
            <p>Trattoria Gustoso</p>
          </div>
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

        <button
          onClick={() => {
            navigate("/pages/menu");
          }}
        >
          Visa hela menyn
        </button>
      </div>
      <div className="reservation">
        <div className="reservation_container">
          <img src="src\assets\OIP.jpg" alt="Italian food" className="" />
          <p>
            "Oavsett om det är en romantisk middag för två, en familjefest eller
            en affärslunch, ser vi fram emot att välkomna dig till vårt bord och
            skapa minnen som varar livet ut. Boka ditt bord idag och låt oss ta
            hand om resten. Din resa till Italien börjar här! Kontakta oss nu
            för att göra din reservation och upptäck varför Trattoria Gustoso är
            destinationen för finsmakare och matälskare överallt.""
          </p>
          <button
            onClick={() => {
              navigate("/pages/booking");
            }}
          >
            Boka bord
          </button>
        </div>
      </div>
      <footer>
        <section>
          <h3>Öppettider:</h3>
          <p>Onsdag-Söndag: 17-23</p>
        </section>
        <section>
          <h3>Adress:</h3>
          <p>Drottninggatan 1</p>
          <p>123 45 Stockholm</p>
        </section>
        <button
          onClick={() => {
            navigate("/pages/contact");
          }}
        >
          Kontakta oss
        </button>
      </footer>
    </>
  );
};
