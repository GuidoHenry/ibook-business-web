import { createBrowserRouter } from "react-router-dom";

import {HomePage, LoginPage } from "../pages/index";


const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,

  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);

export default routerApp;