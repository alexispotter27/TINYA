
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import RouteLoader from "../components/RouteLoader.jsx";

export default function WebsiteLayout() {
  return (
    <>
      <RouteLoader />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
