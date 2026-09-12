import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppLayout() {
    return (
        <div
            className="min-h-screen bg-[#FAF8F3]"
            style={{ fontFamily: "Inter, sans-serif" }}
        >
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}