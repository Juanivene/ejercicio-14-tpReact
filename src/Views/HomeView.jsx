import { useSession } from "../Stores/useSession";

const HomeView = () => {
  const { user, isLoggedIn } = useSession();

  return <div>HOME</div>;
};

export default HomeView;
