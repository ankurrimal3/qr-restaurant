import { Link } from "react-router-dom";
import { routes } from "routes/route.enum";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      Home Page
      <Link to={routes.ABOUT}>About</Link>
      <div className={styles.test}>Asd</div>
    </>
  );
};

export default Home;
