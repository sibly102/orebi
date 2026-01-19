import Header from "../Header";
import Footer from "../Footer";
import {Outlet} from "react-router-dom";
import ServicesTag from "../ServicesTag";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <ServicesTag />
    <Footer />
     <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
    </>
  )
}

export default RootLayout;