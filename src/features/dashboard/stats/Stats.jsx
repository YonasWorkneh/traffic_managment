import { IoPeople } from "react-icons/io5";
import Stat from "./Stat";
import styles from "./Stats.module.css";
import { BsLightningChargeFill } from "react-icons/bs";
import { HiDeviceMobile } from "react-icons/hi";
import { getSettings } from "../../../services/settingsApi";
import { isArray } from "chart.js/helpers";
import { useEffect, useState } from "react";

function Stats() {
  const [devices, setDevices] = useState(0);
  const [pedestrians, setPedestrians] = useState(0);
  useEffect(function () {
    const getStats = async () => {
      const settings = await getSettings();
      console.log(settings);
      setDevices(isArray(settings) ? settings.length : 0);
      if (isArray(settings)) {
        const len = settings.reduce(
          (acc, setting) => (acc += setting.NumberOfDevices),
          0
        );
        setPedestrians(len);
        localStorage.setItem("pedestrians", len);
      }
    };

    getStats();
  }, []);
  return (
    <div className={styles.stats}>
      <div className={styles.first}>
        <Stat
          lable={"Number of Pedestrians"}
          value={pedestrians * 1000}
          trend="up"
          externalInfo="per Month"
          icon={<IoPeople />}
        />
        <Stat
          lable={"Active today"}
          value={59}
          trend="down"
          externalInfo="per Day"
          icon={<BsLightningChargeFill />}
          border={true}
        />
      </div>
      <div className={styles.first}>
        <Stat
          lable={"Sensor Devices"}
          value={devices * 100}
          trend="down"
          externalInfo="Month / June"
          icon={<HiDeviceMobile />}
          border={true}
        />
      </div>
    </div>
  );
}

export default Stats;
