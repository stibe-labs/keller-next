import styles from "./styles.module.css"

export default function Button2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["default-6"]} href="./about">
        <div className={styles["onhover-2"]} />
        <div className={styles["div-13"]}>
          <p className={styles["p-6"]}>{slots[0] ?? "About Us"}</p>
        </div>
      </a>
  )
}
