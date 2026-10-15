import styles from "./styles.module.css"

export default function SectionHeading({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-17"]}>
        <div className={styles["dot"]} />
        <div className={styles["text-2"]}>
          <p className={styles["p-58"]}>{slots[0] ?? "FAQ"}</p>
        </div>
      </div>
  )
}
