import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Category from "../pages/Category";
import Userlayout from "../pages/users/Userlayout";

//userRoutes
import UserDashboard from "../pages/users/UserDashboard";
import UserAdd from "../pages/users/UserAdd";
import UserList from "../pages/users/UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "user",
        element: <Userlayout />,
        children: [
          {
            path: "",
            element: <UserDashboard />,
          },
          {
            path: "add",
            element: <UserAdd />,
          },
          {
            path: "list",
            element: <UserList />,
          },
        ],
      },
    ],
  },
]);

export default router;
