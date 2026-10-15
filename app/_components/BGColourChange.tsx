import styles from "./styles.module.css"

export default function BGColourChange({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-14"]}>
        <div className={styles["colour-1"]} />
        <div className={styles["colour-2"] + " " + styles["rv-2"]} data-reveal />
      </div>
  )
}
