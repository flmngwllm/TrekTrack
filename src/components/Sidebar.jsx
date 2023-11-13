import Logo from "./Logo";
import Nav from "./Nav";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Nav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copywright}>
          &copy; Copywright {new Date().getFullYear()} by TrekTrack Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
