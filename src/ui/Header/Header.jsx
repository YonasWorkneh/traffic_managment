import styles from "./Header.module.css";
import { FaMoon } from "react-icons/fa6";
import { LuLogOut, LuSun } from "react-icons/lu";
import { useAppContext } from "../../contexts/AppContext";

import toast from "react-hot-toast";

import PropTypes from "prop-types";

Header.propTypes = {
  name: PropTypes.string,
};

function Header({ name = "Yonas W." }) {
  const { theme, setTheme } = useAppContext();

  return (
    <div className={`center ${styles.header}`}>
      <p className={styles.message}>Welcome, {name}</p>
      <div className={styles.container}>
        <div className={`center ${styles.profile}`}>
          <img src="/src/assets/avatar.png" alt="admin-avatar" />
        </div>
        <div className={`center ${styles.icons}`}>
          <button
            className={`center ${styles.btn} ${styles.rotate}`}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? <LuSun /> : <FaMoon />}
          </button>
          <button
            className={styles.logout}
            onClick={() =>
              toast.error("Super admin can't log out without IT Permission !")
            }
          >
            <LuLogOut />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
