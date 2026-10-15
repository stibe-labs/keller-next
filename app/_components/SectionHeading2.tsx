import styles from "./styles.module.css"

export default function SectionHeading2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-24"]}>
        <div className={styles["dot-2"]} />
        <div className={styles["text-4"]}>
          <p className={styles["p-67"]}>{slots[0] ?? "Why us"}</p>
        </div>
      </div>
  )
}
