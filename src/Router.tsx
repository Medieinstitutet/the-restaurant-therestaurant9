import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { PagesLayout } from "./pages/PagesLayout";
import { Bookingconfirmation } from "./pages/Bookingconfirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
    ],
  },
  {
    path: "/pages",
    element: <PagesLayout />,
    children: [
      {
        path: "/pages/booking",
        element: <Booking />,
      },
      {
        path: "/pages/menu",
        element: <Menu />,
      },
      {
        path: "/pages/contact",
        element: <Contact />,
      },
      {
        path: "/pages/admin",
        element: <Admin />,
      },
      {
        path: "/pages/bookingconfirmation",
        element: <Bookingconfirmation />,
      },
    ],
  },
]);
