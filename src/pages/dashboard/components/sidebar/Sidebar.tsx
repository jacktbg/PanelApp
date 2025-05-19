import styles from "../../styles/sidebar.module.css"
import { Button } from "../../../../components/Button"
import { Icon } from "../../../../components/Icon"
import { Option } from "../option/Option"
import {
  FilesIcon,
  HomeIcon,
  RecentIcon,
  RequestIcon,
  SharedIcon,
  TrashIcon,
} from "../icons/Icons"
import type { ReactNode } from "react"

export const Sidebar = () => {
  const textOptions: string[] = [
    "Home",
    "My Files",
    "Recent Files",
    "Shared Files",
    "File Request",
    "Trash",
  ]
  const iconOptions: ReactNode[] = [
    <HomeIcon
      width="1.5rem"
      height="1.5rem"
      color="var(--lc-secondary)"
    />,
    <FilesIcon
      width="1.5rem"
      height="1.5rem"
      color="var(--lc-secondary)"
    />,
    <RecentIcon
      width="1.5rem"
      height="1.5rem"
      color="var(--lc-secondary)"
    />,
    <SharedIcon
      width="1.5rem"
      height="1.5rem"
      color="var(--lc-secondary)"
    />,
    <RequestIcon
      width="1.5rem"
      height="1.5rem"
      color="var(--lc-secondary)"
    />,
    <TrashIcon
      width="1.5rem"
      height="1.5rem"
      color="var(--lc-secondary)"
    />,
  ]

  return (
    <main className={styles.sidebar}>
      <section className={styles.icon}>
        <Icon
          width={"7.4rem"}
          height={"2.1rem"}
          borderRadius={"0.5rem"}
        />
      </section>
      <nav className={styles.nav}>
        <ul>
          {textOptions.map((option, index) => (
            <Option text={option} key={index}>
              {iconOptions[index]}
            </Option>
          ))}
        </ul>
      </nav>
      <section className={styles.button}>
        <Button
          text={"Log In"}
          height={"3rem"}
          width={"11.6rem"}
          borderRadius={"0.7rem"}
          children={true}
        />
      </section>
    </main>
  )
}
