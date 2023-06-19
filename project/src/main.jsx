import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./LandingPage.jsx";
// import { MdLocalDining } from "react-icons/md";
import PetInfo from "./PetInfo.jsx";
import InformationForm from "./InformationForm.jsx";
import WeightForm from "./chart/WeightForm.jsx";
import MenuBar from "./Menubar.jsx";
import MapPage from "./MapPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./404/404.jsx";
import AboutUs from "./aboutus/AboutUs.jsx";
import QAPage from "./QAPage/QAPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuBar />,
    errorElement: <Error />,
    children: [
      {
        path: "PetInfo",
        element: <PetInfo />,
      },
      {
        path: "InformationForm",
        element: <InformationForm />,
      },
      {
        path: "WeightForm",
        element: <WeightForm />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "QAPage",
        element: <QAPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
