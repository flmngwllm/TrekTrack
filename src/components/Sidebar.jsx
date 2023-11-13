import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copywright}>
          &copy; Copywright {new Date().getFullYear()} by TrekTrack Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
