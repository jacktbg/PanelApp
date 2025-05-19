import styles from "../../styles/percentage.module.css"

export const Percentage = () => {
  return (
    <div className={styles.percentage}>
      <h2>Storage</h2>
      <div className={styles.circle}>
        <span className={styles.percent}>85%</span>
        <span className={styles.used}>Used</span>
      </div>
      <p className={styles.caption}>
        420.2 GB of 500 GB used
      </p>
    </div>
  )
}
