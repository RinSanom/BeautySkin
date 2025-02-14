import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { Children } from "react";
// import HomePage from "./page/HomePage.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from "react";
import MakeUpPage from "./page/MakeUpPage.tsx";
import AboutUsPage from "./page/AboutUsPage.tsx";
import Layout from "./components/layouts/layouts/Layout.tsx";
import SkinDetail from "./page/SkinDetail.tsx";
import React from "react";

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
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
