import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />
    },
    {
        path: "/loginLayout",
        element: <LoginLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/loginLayout",
                element: <Login />
            },
            {
                path: "/loginLayout/register",
                element: <Register />
            }
        ]
    }
]);

export default router