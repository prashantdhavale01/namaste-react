import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantCardDetails from "./components/RestaurantCardDetails";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

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
        element:<AboutUs />
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