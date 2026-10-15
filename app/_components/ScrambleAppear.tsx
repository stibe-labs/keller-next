import styles from "./styles.module.css"

export default function ScrambleAppear({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["p-2"]}>
        <span className={styles["span"]}>{slots[0] ?? "Some brands we have teamed up with"}</span>
      </div>
  )
}
