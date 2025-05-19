import { useAuth } from "../../../../hooks/contexts/AuthContext"
import styles from "../../styles/statusPanel.module.css"
import { Advertisment } from "../advertisment/Advertisment"
import { Percentage } from "../percentage/Percentage"
import { Stats } from "../stats/Stats"
import { UserInfo } from "../userInfo/UserInfo"

export const StatusPanel = () => {
  const { user } = useAuth()
  const setUserName = (user: string | null): string => {
    return user ? user.split(".")[0] : ""
  }
  const userName = setUserName(user)

  return (
    <section className={styles.statusPanel}>
      <UserInfo userName={userName} />
      <Percentage />
      <Stats />
      <Advertisment />
    </section>
  )
}
