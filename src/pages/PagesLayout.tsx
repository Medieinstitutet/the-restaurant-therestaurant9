import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";

export const PagesLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
