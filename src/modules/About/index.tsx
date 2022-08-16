import { Link } from "react-router-dom";
import { AppRoutes } from "routes/route.enum";

type Props = {};

const About = (props: Props) => {
  return (
    <div>
      About
      <Link to={AppRoutes.INDEX}>Home</Link>
    </div>
  );
};

export default About;
