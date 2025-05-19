import styles from "../../styles/gap.module.css"

interface gapProps {
  gridArea: string
}
export const Gap: React.FC<gapProps> = ({ gridArea }) => {
  return (
    <div
      className={styles.gap}
      style={{ gridArea: gridArea }}
    ></div>
  )
}
