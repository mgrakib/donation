import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import FixedRoot from "../FixedRoot/FixedRoot";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import DonationLoader from "../Components/DonationLoader/DonationLoader";

const router = createBrowserRouter([
    {
      path: "/",
      element:<FixedRoot></FixedRoot>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [ 
      {
    path:'/',
    element:<Home></Home>,
    loader: () =>fetch('/public/donation.json'),
      },
      {
    path:'/donation',
    element:<Donation></Donation>
      },
      {
    path:'/statistics',
    element:<Statistics></Statistics>,
    loader: () => fetch('/public/donation.json')
      },
      {
    path:'/donations/:id',
    element:<DonationLoader></DonationLoader>,
    loader: () => fetch('/public/donation.json')
      },
    ]
    },
  ]);

  export default router