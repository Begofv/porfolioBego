import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "./page/Root.jsx";
import ErrorPage from "./page/ErrorPage.jsx";

import Home from "../src/page/Home/Home.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
              path: "/",
              element: <Home />,
            },
          ],
      
        }
      
      ]);

export default router;
