import { createBrowserRouter } from "react-router-dom";
import Overview from "../Dashbord/Overview/Overview";
import DashbordLayout from "../Layout/DashbordLayout";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path:"/dashboard",
        element: <DashbordLayout/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:"/dashboard",
                element: <Overview/>
            }
        ]
    }
]);
export default router;