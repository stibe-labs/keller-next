import styles from "./styles.module.css"

export default function LetSTalk({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-18"]}>
        <div className={styles["div-75"]}>
          <p className={styles["p-59"]}>{slots[0] ?? "Have an idea?"}</p>
        </div>
        <div className={styles["div-76"]}>
          <p className={styles["p-60"]}>{slots[1] ?? "Lets talk."}</p>
        </div>
      </div>
  )
}
