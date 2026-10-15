import styles from "./styles.module.css"

export default function ProjectButton3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-10"]}>
        <div className={styles["left-bar-2"]} />
        <div className={styles["div-55"]}>
          <p className={styles["p-43"]}>{slots[0] ?? "Chop Shop"}</p>
        </div>
      </div>
  )
}
