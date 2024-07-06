import { Outlet } from "react-router-dom";
import Navbar from "../components/global/navbar";

export default function MainLayout() {
    return (
        <div className="bg-slate-200 min-h-screen font-oswald flex flex-col gap-2">
            <Navbar />

            <div className="min-h-[80vh] flex items-center justify-center">
                <Outlet />
            </div>

        </div>
    )
}