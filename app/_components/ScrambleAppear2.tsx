import styles from "./styles.module.css"

export default function ScrambleAppear2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["p-63"]}>
        <span className={styles["span-39"]}>{slots[0] ?? "Rooted in strategy."}</span>
      </div>
  )
}
