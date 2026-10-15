import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Social({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["behance"]} href="https://www.framer.com/?via=essadonzo">
        <div className={styles["div-79"]}>
          <div className={styles["div-80"]}>
            <SvgGraphic className={styles["svg-7"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2033\"><use href=\"#svg-246205585_2363\" data-f2c-idx=\"2034\"></use></svg>"} />
          </div>
        </div>
      </a>
  )
}
