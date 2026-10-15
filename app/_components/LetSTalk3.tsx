import styles from "./styles.module.css"

export default function LetSTalk3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-20"]}>
        <div className={styles["div-78"]}>
          <p className={styles["p-62"]}>{slots[0] ?? "Got that spark?"}</p>
        </div>
        <div className={styles["div-76"]}>
          <p className={styles["p-60"]}>{slots[1] ?? "Lets talk."}</p>
        </div>
      </div>
  )
}
