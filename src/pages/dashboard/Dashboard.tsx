import styles from "./styles/dashboard.module.css"
import { Home } from "./components/home/Home"
import { Sidebar } from "./components/sidebar/Sidebar"
import { StatusPanel } from "./components/statusPanel/StatusPanel"
import { Gap } from "./components/gap/Gap"

export const Dashboard = () => {
  return (
    <div className={styles.dashboardPage}>
      <Sidebar />
      <Gap gridArea={"gap1"} />
      <div className={styles.mainContent}>
        <Home />
      </div>
      <Gap gridArea={"gap2"} />
      <StatusPanel />
    </div>
  )
}
