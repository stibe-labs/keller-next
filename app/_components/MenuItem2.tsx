import styles from "./styles.module.css"

export default function MenuItem2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["footer-2"]} href="mailto:team@sopestudio.com">
        <div className={styles["div-82"]}>
          <p className={styles["p-66"]}>{slots[0] ?? "team@dopestudio.com"}</p>
        </div>
      </a>
  )
}
