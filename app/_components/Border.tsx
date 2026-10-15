import styles from "./styles.module.css"

export default function Border({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-3"]} />
  )
}
