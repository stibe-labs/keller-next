import styles from "./styles.module.css"

export default function Logo2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["dark"]}>
        <div className={styles["logo"]}>
          <div className={styles["div"]}>
            <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/QyTRb8W57mUQdYJUZBZC8Q7F0Dc.svg?scale-down-to=512&width=1478&height=284"} alt="" />
          </div>
        </div>
      </div>
  )
}
