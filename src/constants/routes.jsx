import { createBrowserRouter } from "react-router-dom";
import RootView from "../Views/Routing/RootView";
import PrivateView from "../Views/Routing/PrivateView";
import LoginView from "../Views/LoginView";
import HomeView from "../Views/HomeView";
import AuthView from "../Views/Routing/AuthView";
import RegisterView from "../Views/RegisterView";
import AdminView from "../Views/AdminView";

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
            element: <RegisterView />,
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
            element: <AdminView />,
          },
        ],
      },
    ],
  },
]);
