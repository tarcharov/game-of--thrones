import styles from "./styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <p>Game of Thrones Public Hub</p>
      <p>Battle of the vesteros</p>
      <p>
        Welcome to the place of the battle of ice and fire. Get acquainted with
        the world of Game of Thrones, get to know its characters and take part
        in a life-and-death battle
      </p>
    </div>
  );
};

export default Header;
