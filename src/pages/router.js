import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

export const landingPage = '/'


const router = createBrowserRouter([
  {
    path: landingPage,
    element: <LandingPage/>,
    errorElement: <div> Error </div>,
  },
]);

export default router;
