import "./../styles/App.scss";

const restaurtantId = "65cb31932b1f9164881776d0";

export const Layout = () => {
  return (
    <>
      <div className="hero_Image">
        <div>
          <section className="hero_text"></section>
          <p>Välkommen till Trattoria Gustoso</p>
        </div>
      </div>
      <div className="startpage_meny">Meny</div>
      <div className="reservation_container">Reservation</div>
    </>
  );
};
