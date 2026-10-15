import styles from "./styles.module.css"

export default function ArticleReadTime({ slots = [] }: { slots?: string[] }) {
  return (
      <p className={styles["p-57"]}>{slots[0] ?? "6\n             min read"}</p>
  )
}
