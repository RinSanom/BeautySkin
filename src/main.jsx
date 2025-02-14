import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Children } from "react";
import HomePage from "./page/HomePage.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from "react";
import MakeUpPage from "./page/MakeUpPage.jsx";
import AboutUsPage from "./page/AboutUsPage.jsx";
import Layout from "./components/layouts/layouts/Layout.jsx";
import SkinDetail from "./page/SkinDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/makeup",
        element: <MakeUpPage />,
      },
      {
        path: "/skindetail/:id",
        element: <SkinDetail />,
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
