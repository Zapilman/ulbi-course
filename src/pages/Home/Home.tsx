import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Link to="/friends">Friends</Link>
      <p>Homeadasdasdasdasdas</p>
      {/* <Button>adsasdasdasd</Button> */}
    </div>
  );
};

export default Home;
