import { Outlet } from "react-router-dom";
import Header from "./src/Components/Header/Header";
import Footer from "./src/Components/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
