import styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";


function Sidebar() {
  return (
    <div className={`center ${styles.sidebar}`}>
      <div>
        <Logo />
        <Navbar />
      </div>
    </div>
  );
}

export default Sidebar;
