import { createBrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Search from "./components/Search/Search";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/books",
        element: <Search />
    }
])