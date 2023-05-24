import { Outlet } from "react-router-dom";
import Footer from "../page/Footer";
import Top from "../page/Navbar";




const Layout = () => {
  return (
    <>
      <Top />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout;