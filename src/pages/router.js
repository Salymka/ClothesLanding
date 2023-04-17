import React from 'react';
import {createHashRouter} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import ClothesPage from "./ClothesPage/ClothesPage";

export const landingPage = '/'
export const clothesPage = '/Clothes'




const router = createHashRouter([
  {
    path: landingPage,
    element: <LandingPage/>,
    errorElement: <div> Error </div>,
  },
  {
    path: clothesPage,
    element: <ClothesPage/>,
    errorElement: <div> Error </div>,
  },
]);

export default router;
