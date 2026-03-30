import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 max-w-7xl   ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
