import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../../Stores/useSession";

const PrivateView = () => {
  const { isLoggedIn } = useSession();
  
  if (isLoggedIn) return <Outlet />;
  return <Navigate to="/login" />;
};

export default PrivateView;
