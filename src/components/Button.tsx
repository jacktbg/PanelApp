import styles from "../styles/button.module.css"
import { Union } from "../pages/dashboard/components/icons/Icons"

interface Button {
  text: string
  children?: boolean
  width?: string
  height?: string
  borderRadius?: string
}

export const Button: React.FC<Button> = ({
  text,
  children,
  height,
  width,
  borderRadius,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        height: `${height}`,
        width: `${width}`,
        borderRadius: `${borderRadius}`,
      }}
    >
      {text}
      {children ? (
        <div className={styles.icon}>
          <Union
            height="0.7rem"
            width="0.7rem"
            color={"var(--lc-secondary)"}
          />
        </div>
      ) : (
        ""
      )}
    </button>
  )
}
