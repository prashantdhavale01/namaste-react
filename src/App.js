import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body from "./components/Body";
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
import RestaurantCardDetails from "./components/RestaurantCardDetails";
import ErrorPage from "./components/ErrorPage";
import ShimmerRestaurantCard from "./components/ShimmerRestaurantCard";
// import Grocery from "./components/Grocery";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";

// Lazy Loading Importing
const Body = lazy(() => import("./components/Body"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Grocery = lazy(() => import("./components/Grocery"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Cart = lazy(() => import("./components/Cart"));

{/* Component Composition */}
const AppLayout = () => {

  const [userName, setUserName] = useState('Dummy Name');
  // Authentication
  useEffect(() =>{
    // Make API call and send UserName | Password

    //Return Logged in details
    const dataName = {
      name: "Prashant Dhavale"
    };

    setUserName(dataName.name)

  }, []);


  return (

    <Provider store={appStore}>
      <UserContext.Provider value={{loggedUser: userName, setUserName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    children: [
      {
        path: "/",
        element:<Suspense fallback={<ShimmerRestaurantCard />}><Body /></Suspense>
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
        element:<Suspense fallback={<ShimmerRestaurantCard />}><ContactUs /></Suspense>
      },
      {
        path: "/cart",
        element:<Suspense fallback={<ShimmerRestaurantCard />}><Cart /></Suspense>
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