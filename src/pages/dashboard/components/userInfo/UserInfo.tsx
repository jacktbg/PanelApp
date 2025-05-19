import styles from "../../styles/userInfo.module.css"

interface UserInfoProps {
  userName: string
}

export const UserInfo: React.FC<UserInfoProps> = ({
  userName,
}) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.icons}>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.data}>
        <p className={styles.name}>{userName}</p>
        <div className={styles.avatar}></div>
      </div>
    </div>
  )
}
