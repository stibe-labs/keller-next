import styles from "./styles.module.css"

export default function BGColourChange2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-25"]}>
        <div className={styles["colour-1-2"]} />
        <div className={styles["colour-2-2"]} />
      </div>
  )
}
