import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import loginLoader from "./pages/loaders/loginLoader";
import homeLoader from "./pages/loaders/homeLoader";
import signupLaosder from "./pages/loaders/sigupLoader";
import Signup from "./pages/signup";
import Profile from "./pages/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader
            },
            {
                path: "login",
                element: <Login />,
                loader: loginLoader,
            },
            {
                path: "signup",
                element: <Signup />,
                loader: signupLaosder
            },
            {
                path: "profile",
                element: <Profile />,
                loader: homeLoader
            }
        ]
    }
])