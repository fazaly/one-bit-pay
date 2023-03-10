import { createBrowserRouter } from "react-router-dom";
import Overview from "../Dashbord/Overview/Overview";
import DashbordLayout from "../Layout/DashbordLayout";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import SendMoney from "../Dashbord/SendMoney/SendMoney";
import Withdraw from "../Dashbord/Withdraw/Withdraw";
import Loan from "../Dashbord/Loan/Loan";
import BillPay from "../Dashbord/BillPay/BillPay";
import BecomeAgent from "../Dashbord/BecomeAgent/BecomeAgent";
import MobileRecharge from "../Dashbord/MobileRecharge/MobileRecharge";
import EditProfile from "../Dashbord/EditProfile/EditProfile";
import PrivateRoutes from "./PrivateRoutes";
import DonationDetails from "../Dashbord/Donation/DonationDetails";
import Donation from "../Dashbord/Donation/Donation";
import IndividualBlog from "../Pages/Blog/IndividualBlog";
import Blog from "../Pages/Blog/Blog";
import MyBills from "../Dashbord/BillPay/MyBills/MyBills";
import AllReceipts from "../Dashbord/BillPay/AllReceipts/AllReceipts";
import CashIn from "../AgentDashboard/CashIn/CashIn";
import AgentRoutes from "./AgentRoutes";
import B2B from "../AgentDashboard/B2B/B2B";
import AgentOverview from "../AgentDashboard/AgentOverview/AgentOverview";
import BillPayAgent from "../AgentDashboard/BillPayAgent/BillPayAgent";
import Admin from "../Pages/Admin/Overview/Admin";
import AllUsers from "../Pages/Admin/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AllAgents from "../Pages/Admin/AllAgents";
import ApplyForLoan from "../Dashbord/ApplyForLoan/ApplyForLoan";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AgentRequest from "../Pages/Admin/AgentRequest";
import ChargeCalculator from "../Dashbord/ChargeCalculator/ChargeCalculator";
import LoadingGif from "../Components/LoadingGif/LoadingGif";
import CookiePolicy from "../Pages/CookiePolicy/CookiePolicy";
import SendMoneyGuide from "../Pages/SendMoneyGuide/SendMoneyGuide";
import WithdrawGuide from "../Pages/WithdrawGuide/WithdrawGuide";
import PayBillGuide from "../Pages/PayBillGuide/PayBillGuide";
import LoanTermsCondition from "../Dashbord/Loan/LoanTermsCondition";
import LoanRequest from "../Pages/Admin/LoanRequestList";
import LoanRequestList from "../Pages/Admin/LoanRequestList";
import LoanRequestDetails from "../Pages/Admin/LoanRequestDetails";
import ForbidenAdmin from "../Pages/ErrorPage/ForbidenAdmin";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import History from "../AgentDashboard/History/History";
import News from "../Pages/News/News";
import Withdraw2 from "../Dashbord/Withdraw/Withdraw2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      // ====================
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blogpost/:id",
        element: <IndividualBlog></IndividualBlog>,
        loader: ({ params }) =>
          fetch(`https://one-bit-pay-server.vercel.app/blogs/${params.id}`),
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: "/cookie",
        element: <CookiePolicy />
      },
      {
        path: "/send_money_Ggide",
        element: <SendMoneyGuide />
      },
      {
        path: "/withdraw_gide",
        element: <WithdrawGuide />
      },
      {
        path: "/pay_bill_gide",
        element: <PayBillGuide />
      },
      {
        path: "/adminForbidden",
        element: <ForbidenAdmin></ForbidenAdmin>
      },
      {
        path:"/terms",
        element:<TermsAndConditions></TermsAndConditions>
      },
      {
        path: "/news",
        element: <News/>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <Signup></Signup>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashbordLayout />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview></Overview>,
      },
      {
        path: "/dashboard/editProfile",
        element: <EditProfile></EditProfile>,
      },
      {
        path: "/dashboard",
        element: <Overview />,
      },
      {
        path: "/dashboard/sendMoney",
        element: <SendMoney></SendMoney>,
      },
      {
        path: "/dashboard/withdraw",
        // element: <Withdraw></Withdraw>,
        element: <Withdraw2/>
      },
      {
        path: "/dashboard/applyForAgent",
        element: <BecomeAgent></BecomeAgent>,
      },
      {
        path: "/dashboard/loanRequest",
        element: <Loan></Loan>,
      },
      {
        path: "/dashboard/loantermscondition",
        element: <LoanTermsCondition></LoanTermsCondition>,
      },

      {
        path: "/dashboard/mobileRecharge",
        element: <MobileRecharge></MobileRecharge>,
      },
      {
        path: "/dashboard/billPay",
        element: <BillPay></BillPay>,
      },
      {
        path: "/dashboard/billPay/myBills",
        element: <MyBills></MyBills>,
      },
      {
        path: "/dashboard/billPay/allReceipts",
        element: <AllReceipts></AllReceipts>,
      },
      {
        path: "/dashboard/donation",
        element: <Donation></Donation>,
      },
      {
        path: `/dashboard/donationDetails/:id`,
        element: <DonationDetails></DonationDetails>,
        loader: ({ params }) =>
          fetch(`https://one-bit-pay-server.vercel.app/donations/${params.id}`),
      },
      {
        path: "/dashboard/cashin",
        element: (
          <PrivateRoutes>
            <AgentRoutes>
              <CashIn />
            </AgentRoutes>
          </PrivateRoutes>
        )
      },
      {
        path: "/dashboard/b2b",
        element: (
          <PrivateRoutes>
            <AgentRoutes>
              <B2B />
            </AgentRoutes>
          </PrivateRoutes>
        )
      },
      {
        path: "/dashboard/agentOverview",
        element: (
          <PrivateRoutes>
            <AgentRoutes>
              <AgentOverview />
            </AgentRoutes>
          </PrivateRoutes>
        )
      },
      {
        path: "/dashboard/billpayagent",
        element: (
          <PrivateRoutes>
            <AgentRoutes>
              <BillPayAgent />
            </AgentRoutes>
          </PrivateRoutes>
        )
      },
      {
        path: "/dashboard/transactions",
        element: (
          <PrivateRoutes>
            <AgentRoutes>
              <History/>
            </AgentRoutes>
          </PrivateRoutes>
        )
      },
      {
        path: "/dashboard/adminOverview",
        element: <AdminRoutes><Admin></Admin></AdminRoutes>
      },
      {
        path: "/dashboard/users",
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: "/dashboard/agents",
        element: <AdminRoutes><AllAgents></AllAgents></AdminRoutes>
      },
      {
        path: "/dashboard/agentRequest",
        element: <AdminRoutes><AgentRequest></AgentRequest></AdminRoutes>
      },
      {
        path: "/dashboard/chargeCalculate",
        element: <ChargeCalculator></ChargeCalculator>
      },
      {
        path: "/dashboard/loanRequestList",
        element: <AdminRoutes><LoanRequestList></LoanRequestList></AdminRoutes>
      },
      {
        path: "/dashboard/loanRequestDetails/:id",
        element: <AdminRoutes><LoanRequestDetails></LoanRequestDetails></AdminRoutes>,
        loader: ({ params }) =>
          fetch(`https://one-bit-pay-server.vercel.app/loanRequestDetails/${params.id}`),
      }
    ],
  },
]);
export default router;
