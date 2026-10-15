import styles from "./styles.module.css"

export default function Indicator({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["active"]} />
  )
}
