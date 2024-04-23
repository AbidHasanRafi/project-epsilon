import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Team from "./components/team/Team";
import TeamMemberDetails from "./components/team-details/TeamMemberDetails";
import ActivityPage from "./components/activity/ActivityPage.jsx";
import ActivityDetails from "./components/activity/ActivityDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/activity",
        element: <ActivityPage />,
      },
      {
        path: "/team/:id",
        element: <TeamMemberDetails />,
      },
      {
        path: "/activity/:id",
        element: <ActivityDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
