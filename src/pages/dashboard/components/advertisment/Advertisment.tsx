import { Button } from "../../../../components/Button"
import { Icon } from "../../../../components/Icon"
import styles from "../../styles/advertisment.module.css"

export const Advertisment = () => {
  return (
    <div className={styles.ad}>
      <div>
        <Icon width="11.9rem" height="7.3rem" />
        <div className={styles.text}>
          <h3>Buy more space now!</h3>
          <p>Upgrade to cloud premium</p>
        </div>
        <Button
          width="11.6rem"
          height="3rem"
          text="Upgrade Account!"
        />
      </div>
    </div>
  )
}
