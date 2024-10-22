import { useSession } from "../Stores/useSession";

const HomeView = () => {
  const { user, isLoggedIn } = useSession();

  console.log(user, isLoggedIn);
  return <div>HOME</div>;
};

export default HomeView;
