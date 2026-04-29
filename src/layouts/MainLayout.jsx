import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
