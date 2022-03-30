import styles from "./styles/header.module.css";
import white_walker from "../../assets/images/white_walker.png";
import daenerys from "../../assets/images/daenerys.png";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1>GAME OF THRONES PUBLIC HUB</h1>

      <div className={styles.container}>
        <img
          src={white_walker}
          className={styles.white_walker}
          alt="white_walkerImg"
        />
        <div className={styles.article}>
          <h2>BATTLE OF THE VESTEROS</h2>
          <p>
            Welcome to the place of the battle of ice and fire. Get acquainted
            with the world of Game of Thrones, get to know its characters and
            take part in a life-and-death battle
          </p>
        </div>
        <img src={daenerys} className={styles.daenerys} alt="daenerysImg" />
      </div>
      <div className={styles.gradient_block}></div>
    </div>
  );
};

export default Header;
