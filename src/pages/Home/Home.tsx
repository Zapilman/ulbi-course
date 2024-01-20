import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { RoutePath } from "shared/config/routes/routes.config";

const Home = () => {
  return (
    <div className={styles.home}>
      <Link to={`/${RoutePath.about}`}>Friends</Link>
      <p>Homeadasdasdasdasdas</p>
      {/* <Button>adsasdasdasd</Button> */}
    </div>
  );
};

export default Home;
