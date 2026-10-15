import styles from "./styles.module.css"

export default function ProjectButton2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-8"]}>
        <div className={styles["onhover-3"]} />
        <div className={styles["div-51"]}>
          <p className={styles["p-42"]}>{slots[0] ?? "Smile Dental"}</p>
        </div>
      </div>
  )
}
