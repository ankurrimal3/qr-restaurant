import { Link } from "react-router-dom";
import { routes } from "routes/route.enum";

const Home = () => {
  return (
    <>
      Home Page
      <Link to={routes.ABOUT}>About</Link>
    </>
  );
};

export default Home;
