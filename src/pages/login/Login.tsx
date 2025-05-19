import type React from "react"
import { Icon } from "../../components/Icon"
import styles from "./styles/login.module.css"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/contexts/AuthContext"
import { Button } from "../../components/Button"

export const Login: React.FC = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value

    login(email)
    navigate("/")
  }

  return (
    <main className={styles.loginPage}>
      <form
        className={styles.form}
        autoComplete="on"
        onSubmit={handleLogin}
      >
        <section className={styles.logo}>
          <Icon width={"45%"} height={"50%"} />
        </section>
        <section className={styles.description}>
          <h1>Log In</h1>
        </section>
        <section className={styles.inputs}>
          <label
            htmlFor="email"
            className={styles.hiddenLabels}
          >
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            required
          />
          <label
            htmlFor="password"
            className={styles.hiddenLabels}
          >
            Password
          </label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
          />
          <Button text={"Log In"} />
          <p>You already have an account. Just log in.</p>
        </section>
      </form>
    </main>
  )
}
