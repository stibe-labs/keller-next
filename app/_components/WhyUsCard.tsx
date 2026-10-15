import styles from "./styles.module.css"

export default function WhyUsCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-11"]}>
        <div className={styles["indicators-2"]}>
          <div className={styles["div-56"]}>
            <div className={styles["active-3"]} />
          </div>
          <div className={styles["div-56"]}>
            <div className={styles["inactive-3"]} />
          </div>
          <div className={styles["div-56"]}>
            <div className={styles["inactive-3"]} />
          </div>
        </div>
        <div className={styles["div-57"]} />
        <div className={styles["content-3"]}>
          <div className={styles["heading-2"]}>
            <div className={styles["div-58"]}>
              <p className={styles["p-44"]}>{slots[0] ?? "Bold Ideas,"}</p>
            </div>
            <div className={styles["div-59"]}>
              <p className={styles["p-45"]}>{slots[1] ?? "Dope Execution"}</p>
            </div>
          </div>
          <div className={styles["div-60"]}>
            <p className={styles["p-46"]}>{slots[2] ?? "We thrive on ambitious challenges, transforming bold ideas into powerful, unforgettable brands that stand apart from the noise."}</p>
          </div>
        </div>
      </div>
  )
}
