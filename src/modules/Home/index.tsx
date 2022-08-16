import { Link } from "react-router-dom";
import { AppRoutes } from "routes/route.enum";

const Home = () => {
  return (
    <>
      Home Page
      <Link to={AppRoutes.ABOUT}>About</Link>
    </>
  );
};

export default Home;
