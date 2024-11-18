import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
import MainLayout from "../layout/MainLayout"
import Home from "../pages/home/Home";
import Instructors from "../pages/Instructors/instructors"
import Classes from "../pages/Classes/classes"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "instructors",
        element: <Instructors/>
      },
      {
        path: "classes",
        element: <Classes/>
      },

    ],
  },
]);
