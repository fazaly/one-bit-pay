import { createBrowserRouter } from "react-router-dom";
import Overview from "../Dashbord/Overview/Overview";
import DashbordLayout from "../Layout/DashbordLayout";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import SendMoney from "../Dashbord/SendMoney/SendMoney"
import Withdraw from "../Dashbord/Withdraw/Withdraw";
import Loan from "../Dashbord/Loan/Loan";
import BillPay from "../Dashbord/BillPay/BillPay";
import BecomeAgent from "../Dashbord/BecomeAgent/BecomeAgent";
import MobileRecharge from "../Dashbord/MobileRecharge/MobileRecharge";
import EditProfile from "../Dashbord/EditProfile/EditProfile";
import PrivateRoutes from "./PrivateRoutes";
import DonationDetails from "../Dashbord/Donation/DonationDetails"
import Donation from "../Dashbord/Donation/Donation"
import IndividualBlog from "../Pages/Blog/IndividualBlog";
import Blog from "../Pages/Blog/Blog";
import AdminRoutes from "./AdminRoutes";
import AllUsers from "../Pages/Admin/AllUsers";
import Admin from "../Pages/Admin/Admin";

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
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "/blogpost/:id",
                element: <IndividualBlog></IndividualBlog>,
                loader: ({ params }) => fetch(`https://one-bit-pay-server.vercel.app/blogs/${params.id}`)
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><DashbordLayout /></PrivateRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "dahsboard/overview",
                element: <Overview></Overview>
            },
            {
                path: "/dashboard/editProfile",
                element: <EditProfile></EditProfile>
            },
            {
                path: "/dashboard",
                element: <Overview />
            },
            {
                path: "/dashboard/sendMoney",
                element: <SendMoney></SendMoney>
            },
            {
                path: "/dashboard/withdraw",
                element: <Withdraw></Withdraw>
            },
            {
                path: "/dashboard/applyForAgent",
                element: <BecomeAgent></BecomeAgent>
            },
            {
                path: "/dashboard/loanRequest",
                element: <Loan></Loan>
            },
            {
                path: "/dashboard/mobileRecharge",
                element: <MobileRecharge></MobileRecharge>
            },
            {
                path: "/dashboard/billPay",
                element: <BillPay></BillPay>
            },
            {
                path: "/dashboard/donation",
                element: <Donation></Donation>
            },
            {
                path: `/dashboard/donationDetails/:id`,
                element: <DonationDetails></DonationDetails>,
                loader: ({ params }) => fetch(`https://one-bit-pay-server.vercel.app/donations/${params.id}`)
            },
            {
                path: '/dashboard/admin',
                element: <Admin></Admin>
            },
            {
                path: '/dashboard/users',
                element: <AllUsers></AllUsers>
            },

        ]
    }
]);
export default router;