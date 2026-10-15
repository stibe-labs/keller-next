import styles from "./styles.module.css"

export default function Button3({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["default-8"]} href="./portfolio">
        <div className={styles["onhover-3"]} />
        <div className={styles["div-51"]}>
          <p className={styles["p-40"]}>{slots[0] ?? "All Projects"}</p>
        </div>
      </a>
  )
}
