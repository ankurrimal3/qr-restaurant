import { Link } from "react-router-dom";
import { routes } from "routes/route.enum";

type Props = Record<string, unknown>;

const About = (props: Props) => {
  return (
    <div>
      About
      <Link to={routes.INDEX}>Home</Link>
    </div>
  );
};

export default About;
