import styles from "./SalesChart.module.css";
import { MdOutlineQueryStats } from "react-icons/md";
import AreaChart from "./AreaChart";

function SalesChart() {
  return (
    <div className={styles.chart}>
      <div className={styles.header}>
        <div>
          <p>
            <span className={`${styles.rev} ${styles.circle}`}></span>
            <span>Blind Pedestrians</span>
          </p>
        </div>
        <MdOutlineQueryStats className={styles.icon} />
      </div>
      <div className={styles.mt2}>
        <AreaChart />
      </div>
    </div>
  );
}

export default SalesChart;
