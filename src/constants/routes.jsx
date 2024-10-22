import { createBrowserRouter } from "react-router-dom";
import RootView from "../Views/Routing/RootView";
import PrivateView from "../Views/Routing/PrivateView";
import LoginView from "../Views/LoginView";
import HomeView from "../Views/HomeView";
import AuthView from "../Views/Routing/AuthView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "detail/:id",
        element: <p>Detalle</p>,
      },

      //autenticacion
      {
        path: "",
        element: <AuthView />,
        children: [
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

      //privadas
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
