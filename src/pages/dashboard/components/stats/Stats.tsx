import styles from "../../styles/stats.module.css"

const data = [
  { color: "#FFA500", label: "Documents", size: "200 GB" },
  { color: "#3D8BFF", label: "Documents", size: "125 GB" },
  { color: "#2AC3A2", label: "Documents", size: "75 GB" },
  { color: "#B0B0B0", label: "Documents", size: "50 GB" },
]

export const Stats = () => {
  return (
    <div className={styles.stats}>
      {data.map((item, idx) => (
        <div className={styles.row} key={idx}>
          <div className={styles.left}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: item.color }}
            ></div>
            <div>
              <div className={styles.label}>
                {item.label}
              </div>
              <div className={styles.files}>720 files</div>
            </div>
          </div>
          <div className={styles.size}>{item.size}</div>
        </div>
      ))}
    </div>
  )
}
