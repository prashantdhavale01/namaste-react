import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantCardDetails from "./components/RestaurantCardDetails";
import ErrorPage from "./components/ErrorPage";
import ShimmerRestaurantCard from "./components/ShimmerRestaurantCard";
// import Grocery from "./components/Grocery";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

// Lazy Loading Importing
const AboutUs = lazy(() => import("./components/AboutUs"));
const Grocery = lazy(() => import("./components/Grocery"));


{/* Component Composition */}
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    children: [
      {
        path: "/",
        element:<Body />
      },
      {
        path: "/about",
        element:<Suspense fallback={<ShimmerRestaurantCard />}><AboutUs /></Suspense>
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<ShimmerRestaurantCard />}><Grocery /></Suspense>
      },
      {
        path: "/contact",
        element:<ContactUs />
      },
      {
        path: "/Restaurant/:restId",
        element:<RestaurantCardDetails />
      },
    ],
    errorElement: <ErrorPage />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);