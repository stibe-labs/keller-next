import styles from "./styles.module.css"

export default function ProjectButton({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-9"]}>
        <div className={styles["left-bar"]} />
        <div className={styles["div-52"]}>
          <p className={styles["p-41"]}>{slots[0] ?? "Origin"}</p>
        </div>
      </div>
  )
}
