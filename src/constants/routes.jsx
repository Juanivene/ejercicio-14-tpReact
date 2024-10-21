import { createBrowserRouter } from "react-router-dom";
import RootView from "../Views/Routing/RootView";
import PublicView from "../Views/Routing/PublicView";
import PrivateView from "../Views/Routing/PrivateView";
import LoginView from "../Views/LoginView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: <PublicView />,
        children: [
          {
            path: "",
            element: <p>Home</p>,
          },
          {
            path: "detail/:id",
            element: <p>Detalle</p>,
          },
          {
            path: "login",
            element: <LoginView />,
          },
          {
            path: "register",
            element: <p>Register</p>,
          },
        ],
      },
      {
        path: "",
        element: <PrivateView />,
        children: [
          {
            path: "admin",
            element: <p>Admin</p>,
          },
        ],
      },
    ],
  },
]);
