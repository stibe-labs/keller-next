import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function ServicesCard({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["desktop"]}>
        <div className={styles["content-2"]}>
          <div className={styles["service"]}>
            <p className={styles["p-7"]}>{slots[0] ?? "Branding"}</p>
          </div>
          <div className={styles["subtext-list"]}>
            <div className={styles["div-14"]}>
              <p className={styles["p-8"]}>{slots[1] ?? "Build a brand people remember, connect with, and can’t stop talking about. Strategically designed to inspire loyalty, spark emotion and drive real impact."}</p>
            </div>
            <div className={styles["list"]}>
              <div className={styles["1-2"]}>
                <div className={styles["icon"]}>
                  <div className={styles["div-9"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185)); color: var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185)); flex-shrink: 0;\" data-f2c-idx=\"513\"><g color=\"var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185))\" weight=\"bold\" data-f2c-idx=\"514\"><path d=\"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z\" data-f2c-idx=\"515\"></path></g></svg>"} />
                  </div>
                </div>
                <div className={styles["div-15"]}>
                  <p className={styles["p-9"]}>{slots[2] ?? "Brand Guidelines"}</p>
                </div>
              </div>
              <div className={styles["2"]}>
                <div className={styles["icon"]}>
                  <div className={styles["div-9"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185)); color: var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185)); flex-shrink: 0;\" data-f2c-idx=\"521\"><g color=\"var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185))\" weight=\"bold\" data-f2c-idx=\"522\"><path d=\"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z\" data-f2c-idx=\"523\"></path></g></svg>"} />
                  </div>
                </div>
                <div className={styles["div-16"]}>
                  <p className={styles["p-10"]}>{slots[3] ?? "Visual Identity Design"}</p>
                </div>
              </div>
              <div className={styles["3"]}>
                <div className={styles["icon"]}>
                  <div className={styles["div-9"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185)); color: var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185)); flex-shrink: 0;\" data-f2c-idx=\"529\"><g color=\"var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185))\" weight=\"bold\" data-f2c-idx=\"530\"><path d=\"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z\" data-f2c-idx=\"531\"></path></g></svg>"} />
                  </div>
                </div>
                <div className={styles["div-17"]}>
                  <p className={styles["p-11"]}>{slots[4] ?? "Brand Voice & Messaging"}</p>
                </div>
              </div>
              <div className={styles["4"]}>
                <div className={styles["icon"]}>
                  <div className={styles["div-9"]}>
                    <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185)); color: var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185)); flex-shrink: 0;\" data-f2c-idx=\"537\"><g color=\"var(--token-7fd97d1b-1a06-4569-83de-7e011e6773d1, rgb(144, 161, 185))\" weight=\"bold\" data-f2c-idx=\"538\"><path d=\"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z\" data-f2c-idx=\"539\"></path></g></svg>"} />
                  </div>
                </div>
                <div className={styles["div-18"]}>
                  <p className={styles["p-12"]}>{slots[5] ?? "Brand Strategy & Positioning"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["image"]}>
          <div className={styles["image-desktop-hover"]}>
            <div className={styles["div-19"]}>
              <figure className={styles["figure"]}>
                <img className={styles["img-8"]} src={slots[6] ?? "https://framerusercontent.com/images/D9PVkZbMQEXQgIJ4b9Ca6nC3Ak.png?width=967&height=1200"} alt="" />
              </figure>
              <div className={styles["canvas"]} />
              <div className={styles["div-20"]} />
            </div>
          </div>
        </div>
      </div>
  )
}
