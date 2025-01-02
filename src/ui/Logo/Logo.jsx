import styles from "./Logo.module.css";
import { IoPulseSharp } from "react-icons/io5";

function Logo() {
  return (
    <div className={styles.logo}>
      <IoPulseSharp />
      <h1>Traffic Managment</h1>
    </div>
  );
}

export default Logo;
