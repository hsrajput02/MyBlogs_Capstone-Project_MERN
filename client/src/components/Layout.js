import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ children }) {
  const location = useLocation();

  // hide navbar on create page
  const hideNavbar = location.pathname === "/create";

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

export default Layout;