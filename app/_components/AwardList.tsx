import styles from "./styles.module.css"

export default function AwardList({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["equal-space-no-hover"]}>
        <div className={styles["award-type"]}>
          <div className={styles["div-47"]}>
            <p className={styles["p-36"]}>{slots[0] ?? "Awwwards"}</p>
          </div>
        </div>
        <div className={styles["category"]}>
          <div className={styles["div-48"]}>
            <p className={styles["p-37"]}>{slots[1] ?? "Honorable Mention"}</p>
          </div>
        </div>
        <div className={styles["wins"]}>
          <div className={styles["div-49"]}>
            <p className={styles["p-38"]}>{slots[2] ?? "x10"}</p>
          </div>
        </div>
        <div className={styles["wins-2"]}>
          <div className={styles["div-50"]}>
            <div className={styles["p-39"]}>
              <time className={styles["time"]}>{slots[3] ?? "May 4, 2026"}</time>
            </div>
          </div>
        </div>
      </div>
  )
}
