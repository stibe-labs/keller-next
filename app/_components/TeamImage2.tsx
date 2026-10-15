import styles from "./styles.module.css"

export default function TeamImage2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-26"]}>
        <div className={styles["image-5"]}>
          <div className={styles["div-101"]}>
            <div className={styles["div-102"]}>
              <img className={styles["img-32"]} src={slots[0] ?? "https://framerusercontent.com/images/0Fc0Qr1VkVYdq93oVOFZUou3t4.webp?scale-down-to=512&width=1024&height=1024"} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["name-position-4"]}>
          <div className={styles["name-2"]}>
            <p className={styles["p-69"]}>{slots[1] ?? "Amara J."}</p>
          </div>
          <div className={styles["position-4"]}>
            <p className={styles["p-70"]}>{slots[2] ?? "Creative Director"}</p>
          </div>
        </div>
      </div>
  )
}
