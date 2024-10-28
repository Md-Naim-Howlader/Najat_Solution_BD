import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollTop from "../../components/ScrollTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
