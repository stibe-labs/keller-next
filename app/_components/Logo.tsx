import styles from "./styles.module.css"

export default function Logo({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["dark"]}>
        <div className={styles["logo"]}>
          <div className={styles["div"]}>
            <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/y296rV2b12WXNsCoqAGRW1AhkY.svg?scale-down-to=512&width=1478&height=284"} alt="" />
          </div>
        </div>
      </div>
  )
}
