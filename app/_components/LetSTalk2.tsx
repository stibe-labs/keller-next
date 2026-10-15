import styles from "./styles.module.css"

export default function LetSTalk2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-19"]}>
        <div className={styles["div-77"]}>
          <p className={styles["p-61"]}>{slots[0] ?? "Feeling inspired?"}</p>
        </div>
        <div className={styles["div-76"]}>
          <p className={styles["p-60"]}>{slots[1] ?? "Lets talk."}</p>
        </div>
      </div>
  )
}
