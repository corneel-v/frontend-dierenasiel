import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Login from "./pages/login.jsx";
// import Logout from "./pages/logout.jsx";
// import NotFound from "./pages/NotFound.jsx";
// import Root from "./pages/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth.context.jsx";
import SwipePage from "./swipeCard/pages/SwipePage.jsx";
import AdoptionForm from "./swipeCard/pages/AdoptionForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SwipePage />,
    children: [
      // {
      //   index: true,
      //   element: <Login />,
      // },
      // {
      //   path: "/",
      //   element: <Login />,
      // },
      // {
      //   path: "logout",
      //   element: <Logout />,
      // },
      // { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/adoptieform",
    element: <AdoptionForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
