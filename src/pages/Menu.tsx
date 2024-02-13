export const Menu = () => {
  return (
    <>
      <section className="menu-container">
        <h2>Menyn</h2>
        <article className="menu">
          <span className="menu1">
            <img src="/public/Meny.jpg" alt="Meny1" />
          </span>
          <span className="menu2">
            <img src="/public/Meny2.jpg" alt="Meny2" />
          </span>
        </article>
        <h3>Information av menyn</h3>
        <article className="menu-info">
          <span className="menyinfo1">
            <img src="/public/infomeny1.jpg" alt="Meny information 1" />
          </span>
          <span className="menyinfo2">
            <img src="/public/infomeny2.jpg" alt="Meny information 2" />
          </span>
        </article>
      </section>
    </>
  );
};
