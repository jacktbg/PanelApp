import styles from "../../styles/option.module.css"
import { SubtractIcon } from "../icons/Icons"
import type { ReactNode } from "react"

interface OptionProps {
  text: string
  children: ReactNode
}
export const Option: React.FC<OptionProps> = ({
  text,
  children,
}) => {
  return (
    <li className={styles.option}>
      <SubtractIcon
        width={"0.7rem"}
        height={"4.4rem"}
        color={"var(--lc-secondary)"}
      />
      <div></div>
      {children}
      <div></div>
      <span>{text}</span>
    </li>
  )
}
