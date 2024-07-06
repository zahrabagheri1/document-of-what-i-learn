import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
])