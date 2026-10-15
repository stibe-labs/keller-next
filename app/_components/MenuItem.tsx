import styles from "./styles.module.css"

export default function MenuItem({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["footer"]} href="tel:+14155550198">
        <div className={styles["div-81"]}>
          <p className={styles["p-65"]}>{slots[0] ?? "+1(415)555-0198"}</p>
        </div>
      </a>
  )
}
