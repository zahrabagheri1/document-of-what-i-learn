import Navbar from "../components/global/navbar";

export default function MainLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className="bg-slate-200 min-h-screen font-oswald flex flex-col gap-2">
            <Navbar />

            <div className="min-h-screen flex items-center justify-center">
                {children}
            </div>

        </div>
    )
}