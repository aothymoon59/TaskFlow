import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import TaskBoard from "../Pages/TaskBoard/TaskBoard";
import AddTask from "../Pages/AddTask/AddTask";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-task",
                element: <AddTask />
            },
            {
                path: "/task-board",
                element: <TaskBoard />
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
        ]
    },
    {
        path: "/loginLayout",
        element: <LoginLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/loginLayout/login",
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