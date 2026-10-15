import styles from "./styles.module.css"

export default function AwardList2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["middle-space"]}>
        <div className={styles["award-type-2"]}>
          <div className={styles["div-47"]}>
            <p className={styles["p-94"]}>{slots[0] ?? "Awwwards"}</p>
          </div>
        </div>
        <div className={styles["category-3"]}>
          <div className={styles["div-48"]}>
            <p className={styles["p-95"]}>{slots[1] ?? "Honorable Mention"}</p>
          </div>
        </div>
        <div className={styles["wins-3"]}>
          <div className={styles["div-49"]}>
            <p className={styles["p-96"]}>{slots[2] ?? "x10"}</p>
          </div>
        </div>
        <div className={styles["wins-4"]}>
          <div className={styles["div-50"]}>
            <div className={styles["p-97"]}>
              <time className={styles["time-3"]}>{slots[3] ?? "May 4, 2026"}</time>
            </div>
          </div>
        </div>
      </div>
  )
}
