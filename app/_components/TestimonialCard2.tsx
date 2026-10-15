import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function TestimonialCard2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-13"]}>
        <div className={styles["logo-review-2"]}>
          <div className={styles["logo-quote-icon-2"]}>
            <div className={styles["logo-3"]}>
              <div className={styles["div-66"]}>
                <img className={styles["img-13"]} src={slots[0] ?? "https://framerusercontent.com/images/4yTkVeUQgljO9r2a5d8vOcWIBhQ.png?scale-down-to=512&width=855&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["icon-3"]}>
              <div className={styles["div-67"]}>
                <div className={styles["div-68"]}>
                  <SvgGraphic className={styles["svg-6"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"rgb(240, 240, 240)\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(240, 240, 240); color: rgb(240, 240, 240); flex-shrink: 0;\" data-f2c-idx=\"1099\"><g color=\"rgb(240, 240, 240)\" weight=\"fill\" data-f2c-idx=\"1100\"><path d=\"M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z\" data-f2c-idx=\"1101\"></path></g></svg>"} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["review-2"]}>
            <p className={styles["p-50"]}>{slots[1] ?? "Working with this team was unlike anything we’ve experienced before. They took the time to guide us, explain their process, and ensure we felt confident at every step. Nothing was rushed or overlooked, every detail reflected genuine care. The final brand identity is amazing, but what we value most is how supported we felt along the way."}</p>
          </div>
        </div>
        <div className={styles["user-2"]}>
          <div className={styles["customer-2"]}>
            <div className={styles["avatar-2"]}>
              <div className={styles["div-69"]}>
                <img className={styles["img-14"]} src={slots[2] ?? "https://framerusercontent.com/images/E5nNtqp2p6890hJdcSj97GZTYk.jpg?scale-down-to=1024&width=960&height=1280"} alt="" />
              </div>
            </div>
            <div className={styles["name-position-2"]}>
              <div className={styles["full-name-2"]}>
                <p className={styles["p-51"]}>{slots[3] ?? "Amira Johnson"}</p>
              </div>
              <div className={styles["position-2"]}>
                <p className={styles["p-52"]}>{slots[4] ?? "Founder, HexLab"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
