import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function TestimonialCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["default-12"]}>
        <div className={styles["logo-review"]}>
          <div className={styles["logo-quote-icon"]}>
            <div className={styles["logo-2"]}>
              <div className={styles["div-62"]}>
                <img className={styles["img-11"]} src={slots[0] ?? "https://framerusercontent.com/images/4yTkVeUQgljO9r2a5d8vOcWIBhQ.png?scale-down-to=512&width=855&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["icon-2"]}>
              <div className={styles["div-63"]}>
                <div className={styles["div-64"]}>
                  <SvgGraphic className={styles["svg-5"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"rgb(240, 240, 240)\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: rgb(240, 240, 240); color: rgb(240, 240, 240); flex-shrink: 0;\" data-f2c-idx=\"995\"><g color=\"rgb(240, 240, 240)\" weight=\"fill\" data-f2c-idx=\"996\"><path d=\"M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z\" data-f2c-idx=\"997\"></path></g></svg>"} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["review"]}>
            <p className={styles["p-47"]}>{slots[1] ?? "Working with this team was unlike anything we’ve experienced before. They took the time to guide us, explain their process, and ensure we felt confident at every step. Nothing was rushed or overlooked, every detail reflected genuine care. The final brand identity is amazing, but what we value most is how supported we felt along the way."}</p>
          </div>
        </div>
        <div className={styles["user"]}>
          <div className={styles["customer"]}>
            <div className={styles["avatar"]}>
              <div className={styles["div-65"]}>
                <img className={styles["img-12"]} src={slots[2] ?? "https://framerusercontent.com/images/E5nNtqp2p6890hJdcSj97GZTYk.jpg?scale-down-to=1024&width=960&height=1280"} alt="" />
              </div>
            </div>
            <div className={styles["name-position"]}>
              <div className={styles["full-name"]}>
                <p className={styles["p-48"]}>{slots[3] ?? "Amira Johnson"}</p>
              </div>
              <div className={styles["position"]}>
                <p className={styles["p-49"]}>{slots[4] ?? "Founder, HexLab"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
