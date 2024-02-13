export const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <span className="contact-title">
          <h2>Trattoria Gustoso</h2>
          <p>Drottninggatan 1</p>
        </span>

        <article className="contact-info">
          <h4>Öpprtider</h4>
          <p>Onsdag-Söndag: 17-23</p>

          <h4>Adress</h4>
          <p>Drottninggatan 1</p>
          <p>123 45 Stockholm</p>

          <h4>Kontakt info</h4>
          <p>08-554 23 55</p>
          <p>
            <a href="#">info@trattoriagustoso.com</a>
          </p>

          <h4>Socialamedier</h4>
          <p>
            Följ oss på <a href="#">Facebook</a> och <a href="#">Instagram</a>!
          </p>

          <p>
            <a href="https://www.google.com/maps/place/Drottninggatan+1,+111+51+Stockholm/@59.3286875,18.0650739,18z/data=!4m6!3m5!1s0x465f9d5f3bf7631b:0x8a77be07a72c16db!8m2!3d59.3286128!4d18.0665208!16s%2Fg%2F11cskjswq0?entry=ttu">
              Hitta hit!
            </a>
          </p>
        </article>
        <article className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.2598447696585!2d18.063945877271863!3d59.3286155110777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5f3bf7631b%3A0x8a77be07a72c16db!2sDrottninggatan%201%2C%20111%2051%20Stockholm!5e0!3m2!1ssv!2sse!4v1707741277098!5m2!1ssv!2sse"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </article>
      </section>
    </>
  );
};
