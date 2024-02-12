import "./../styles/_home.scss";

export const Home = () => {
  return (
    <>
      <div className="hero_Image">
        <img src="https://www.bing.com/images/search?view=detailV2&ccid=xOJoJWxn&id=0D19FDEF77C733F96E8B99BE565D6D6C24122978&thid=OIP.xOJoJWxnvhA4ihYzcp6ePgHaE8&mediaurl=https%3A%2F%2Fstatic.thatsup.co%2Fcontent%2Fimg%2Fplace%2Ft%2Fr%2Ftrattoria-grazie-sjostaden-10.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.c4e268256c67be10388a1633729e9e3e%3Frik%3DeCkSJGxtXVa%252bmQ%26pid%3DImgRaw%26r%3D0&exph=1067&expw=1600&q=bilder+italiensk+restaurang&form=IRPRST&ck=6D93732F0591E413C6475C10393757A9&selectedindex=4&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_TOs8HNnI*cp_46A05F2C6D85F20F1EB6796629DD8E07*mid_7F3AE95872A5BD3FC8D33C34E051BFAD23015040*simid_608049739221195444*thid_OIP.TOs8HNnIaab6NWtvfqJKQQHaE8&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0" />
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
