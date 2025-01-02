import { Outlet, useLocation } from "react-router-dom";

// import { useAppContext } from "../../contexts/AppContext";
import styles from "./AppLayout.module.css";

import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
import Main from "../Main/Main";
// import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import DashboardSkeleton from "../Skeleton/Dashboard/DashboardSkeleton";
// import Error from "../Error/Error";

function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const url = location.pathname;

  useEffect(function () {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return isLoading && url.includes("dashboard") ? (
    <DashboardSkeleton />
  ) : (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
