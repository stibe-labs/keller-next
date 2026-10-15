import styles from "./styles.module.css"

export default function HoverMaskReveal({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-19"]}>
        <figure className={styles["figure"]}>
          <img className={styles["img-8"]} src={slots[0] ?? "https://framerusercontent.com/images/D9PVkZbMQEXQgIJ4b9Ca6nC3Ak.png?width=967&height=1200"} alt="" />
        </figure>
        <div className={styles["canvas"]} />
        <div className={styles["div-20"]} />
      </div>
  )
}
