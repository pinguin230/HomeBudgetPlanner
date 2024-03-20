import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import { HOME_ROUTE} from "./consts";
import Layout from "../pages/layout/Layout";


export const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <Layout />,
		errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true
      },
    ]
  }
]);
