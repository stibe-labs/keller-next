import styles from "./styles.module.css"

export default function Button({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["default"]} href="./contact">
        <div className={styles["onhover"]} />
        <div className={styles["div-2"]}>
          <p className={styles["p"]}>{slots[0] ?? "Let's Talk"}</p>
        </div>
      </a>
  )
}
