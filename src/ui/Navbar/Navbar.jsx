import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaGear } from "react-icons/fa6";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoPeople } from "react-icons/io5";

function Navbar() {
  return (
    <ul className={`${styles.navbar}`}>
      <li>
        <NavLink to="dashboard" className={` ${styles.link}`}>
          <LuLayoutDashboard className={styles.icon} />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <ul className={styles.bottom}>
        <li>
          <NavLink to="settings" className={` ${styles.link}`}>
            <FaGear className={styles.icon} />
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="help" className={` ${styles.link}`}>
            <HiQuestionMarkCircle className={styles.icon} />
            <span>Help</span>
          </NavLink>
        </li>
      </ul>
    </ul>
  );
}

export default Navbar;
