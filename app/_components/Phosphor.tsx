import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Phosphor({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-9"]}>
        <SvgGraphic className={styles["svg"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255)); color: var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"343\"><g color=\"var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"344\"><path d=\"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z\" data-f2c-idx=\"345\"></path></g></svg>"} />
      </div>
  )
}
