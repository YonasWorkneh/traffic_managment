import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import styles from "./Settings.module.css";
import { updateSettings } from "../../services/settingsApi";
import toast from "react-hot-toast";
import { FaMapMarkerAlt } from "react-icons/fa";
import Map from "../../ui/Map/Map";

function SettingsForm() {
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => toast.success("Settings updated"),
    onError: () => toast.error("Failed to update settings"),
  });

  const [showMap, setShowMap] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");

  function onSubmit(data) {
    const { name, location } = data;
    console.log("data" + data);
    if (name && (location || selectedLocation)) {
      console.log("data", data);
      mutate({ name, location: location || selectedLocation });
    } else {
      console.log("data" + data);
      toast.error("Please fill all the fields");
    }
  }

  function handleMapIconClick() {
    setShowMap(true);
  }

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputBox}>
          <label htmlFor="device">Device name</label>
          <input type="text" {...register("name")} className={styles.input} />
        </div>

        <div className={`${styles.inputBox}`}>
          <label htmlFor="location">Location</label>
          <div className={`${styles.relative}`}>
            <input
              type="text"
              {...register("location")}
              value={selectedLocation}
              className={styles.input}
              onChange={(e) => setSelectedLocation(e.target.value)}
            />
            <FaMapMarkerAlt
              className={`${styles.icon} ${styles.absolute}`}
              onClick={handleMapIconClick}
            />
          </div>
        </div>
        {showMap && <Map onSetSelectedLocation={setSelectedLocation} />}

        <div className={styles.btns}>
          <button type="submit" className={`${styles.btn} ${styles.primary}`}>
            Submit
          </button>
          <button
            type="reset"
            className={styles.btn}
            onClick={() => {
              setShowMap(false);
              setSelectedLocation("");
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default SettingsForm;
