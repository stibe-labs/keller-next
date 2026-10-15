import styles from "./styles.module.css"

export default function BlogCard({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["default-16"]} href="./blog/design-tools-reimagined-powering-creative-workflows-in-2025">
        <div className={styles["image-4"]}>
          <div className={styles["div-72"]}>
            <div className={styles["div-73"]}>
              <img className={styles["img-16"]} src={slots[0] ?? "https://framerusercontent.com/images/KaR22TVlWcuZxMoxPA3qD2brU.png?scale-down-to=1024&width=673&height=1200"} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["content-4"]}>
          <div className={styles["date-catrgory"]}>
            <div className={styles["date"]}>
              <div className={styles["p-55"]}>
                <time className={styles["time-2"]}>{slots[1] ?? "May 8, 2026"}</time>
              </div>
            </div>
            <div className={styles["category-2"]}>
              <div className={styles["text"]}>
                <p className={styles["p-56"]}>{slots[2] ?? "Design Tools"}</p>
              </div>
            </div>
          </div>
          <div className={styles["heading-3"]}>
            <h4 className={styles["h4"]}>{slots[3] ?? "Creative Tools Reinvented, Fueling Modern Workflows and Beyond"}</h4>
          </div>
          <div className={styles["div-74"]}>
            <p className={styles["p-57"]}>{slots[4] ?? "6\n             min read"}</p>
          </div>
        </div>
      </a>
  )
}
