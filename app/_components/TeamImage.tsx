import styles from "./styles.module.css"

export default function TeamImage({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-15"]}>
        <div className={styles["image-3"]}>
          <div className={styles["div-70"]}>
            <div className={styles["div-71"]}>
              <img className={styles["img-15"]} src={slots[0] ?? "https://framerusercontent.com/images/wSNHPjHAA2inuklvnasZX8CVx9I.webp?width=799&height=1200"} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["name-position-3"]}>
          <div className={styles["name"]}>
            <p className={styles["p-53"]}>{slots[1] ?? "Lina G."}</p>
          </div>
          <div className={styles["position-3"]}>
            <p className={styles["p-54"]}>{slots[2] ?? "Brand Strategist"}</p>
          </div>
        </div>
      </div>
  )
}
