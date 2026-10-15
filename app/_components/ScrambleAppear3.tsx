import styles from "./styles.module.css"

export default function ScrambleAppear3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["p-64"]}>
        <span className={styles["span-39"]}>{slots[0] ?? "Dopeness in every pixel."}</span>
      </div>
  )
}
