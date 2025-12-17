import Header from "../Header";
import Footer from "../Footer";
import {Outlet} from "react-router-dom";
import ServicesTag from "../ServicesTag";

const RootLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <ServicesTag />
    <Footer />
    </>
  )
}

export default RootLayout;