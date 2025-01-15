import React, { lazy, useState } from "react";
import ReactDOM from "react-dom/client";

import { RestaurantList } from "../constent";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import Error from "./components/Error.js";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import RestrauntManu from "./components/RestrauntManu.js";
import Profile from "./components/Profile.js";
import userContext from "./utils/userContext.js";
import { Provider } from "react-redux"; 
import store from "./utils/store.js";
// import Instamart from "./components/InstaMart.js";


const Instamart = lazy (() => import("./components/Instamart.js"))
const About = lazy (() => import("./components/About.js"))






const AppLayout = () => {

  const [user ,setUser] = useState({
    name: "Shanedra Singh",
    email: "shanedrashingh@gmail.com"
  });







  return (
    <>
      <Provider store={store}>
        <userContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />

        </userContext.Provider>
        
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },





      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />
          },
        ],
      },





      {
        path: "/contact",
        element: <Contact />,
      },



      {
        path: "/restaurant/:id",
        element: <RestrauntManu /> 
      },
      {
        path: "/instamart",
        element: <Instamart /> 
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);

/**
     * Header 
         -logo
         -nav items (right sight)
         -cart
      Body
        -Search Bar
        -Restrorent List
          -rstrorentcart
            -image
            -name
            -rating
            -cusiness
      Footer
         -links  
         -copyright      
     */

// 1. Functional Components

// Config Driven UI

// const config = [
//   {
//     type: "carousel",
//     cards: [],
//   },

//   {
//     type: "restaurants",
//     cards: [
//       {
//         name: "Burger King",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cwRE4h3vfxnZPndGuyhmrWpgi_lk1w7KNg&s",
//         cusines: ["Burger", "India"],
//         rating: "4.4",
//       },

//       {
//         name: "KFC",
//         image:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cwRE4h3vfxnZPndGuyhmrWpgi_lk1w7KNg&s",
//         cusines: ["Burger", "India"],
//         rating: "4.4",
//       },
//     ],
//   },
// ];

// const RestrauntCard = ({
//   name,
//   cuisines,
//   cloudinaryImageId,
//   lastMileTravelString,
// }) => {
//   // console.log(restaurant);

//   return (
//     <div className="card">
//       <img
//         src={
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//           cloudinaryImageId
//         }
//       />

//       <h2>{name}</h2>
//       <h3>{cuisines.join(",")}</h3>
//       <h4>{lastMileTravelString} Minutes</h4>
//     </div>
//   );
// };

// const Footer = () => {
//   return <h4>Body</h4>;
// };
