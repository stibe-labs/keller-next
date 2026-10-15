import styles from "./styles.module.css"
import States from "./States"
import { SvgGraphic } from "./RichText"

export default function QuickStats({ slots = [] }: { slots?: string[] }) {
  return (
      <States
        a={<>
          <div className={styles["desktop-1"]}>
            <div className={styles["content"]}>
              <div className={styles["numbers"]}>
                <div className={styles["heading-indicator"]}>
                  <div className={styles["heading"]}>
                    <p className={styles["p-3"]}>{"Quick Stats"}</p>
                  </div>
                  <div className={styles["indicators"]}>
                    <div className={styles["div-5"]}>
                      <div className={styles["active"]} />
                    </div>
                    <div className={styles["div-5"]}>
                      <div className={styles["inactive"]} />
                    </div>
                    <div className={styles["div-5"]}>
                      <div className={styles["inactive"]} />
                    </div>
                    <div className={styles["div-5"]}>
                      <div className={styles["inactive"]} />
                    </div>
                    <div className={styles["div-5"]}>
                      <div className={styles["inactive"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-6"]}>
                  <div className={styles["default-3"]} />
                </div>
              </div>
              <div className={styles["stats"]}>
                <div className={styles["1"]}>
                  <div className={styles["div-7"]}>
                    <div className={styles["p-4"]}>
                      <span className={styles["span-2"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "29ms" }}>{slots[1] ?? "8+ Years"}</span>
                    </div>
                  </div>
                  <div className={styles["div-8"]}>
                    <div className={styles["p-5"]}>
                      <span className={styles["span-3"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "29ms" }}>{slots[2] ?? "Dedicated to researching, designing, and refining pediatric assistive technology & sensory therapy solutions in collaboration with therapists, parents, and educators."}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["arrows"]}>
              <div className={styles["left"]}>
                <div className={styles["default-4"]}>
                  <div className={styles["star"]}>
                    <div className={styles["div-9"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255)); color: var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"343\"><g color=\"var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"344\"><path d=\"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z\" data-f2c-idx=\"345\"></path></g></svg>"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["left"]}>
                <div className={styles["default-4"]}>
                  <div className={styles["star"]}>
                    <div className={styles["div-9"]}>
                      <SvgGraphic className={styles["svg"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255)); color: var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"350\"><g color=\"var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"351\"><path d=\"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z\" data-f2c-idx=\"352\"></path></g></svg>"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}
        b={<>
          <div className={styles["desktop-5"]}>
            <div className={styles["content"]}>
              <div className={styles["numbers-2"]}>
                <div className={styles["heading-indicator-2"]}>
                  <div className={styles["heading"]}>
                    <p className={styles["p-3"]}>{"Quick Stats"}</p>
                  </div>
                  <div className={styles["indicators"]}>
                    <div className={styles["div-5"]}>
                      <div className={styles["inactive-2"]} />
                    </div>
                    <div className={styles["div-5"]}>
                      <div className={styles["inactive-2"]} />
                    </div>
                    <div className={styles["div-5"]}>
                      <div className={styles["inactive-2"]} />
                    </div>
                    <div className={styles["div-5"]}>
                      <div className={styles["inactive-2"]} />
                    </div>
                    <div className={styles["div-5"]}>
                      <div className={styles["active-2"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["div-6"]}>
                  <div className={styles["default-5"]} />
                </div>
              </div>
              <div className={styles["stats-2"]}>
                <div className={styles["1"]}>
                  <div className={styles["div-10"]}>
                    <div className={styles["p-4"]}>
                      <span className={styles["span-21"]}>{"24/7"}</span>
                    </div>
                  </div>
                  <div className={styles["div-11"]}>
                    <div className={styles["p-5"]}>
                      <span className={styles["span-22"]}>{"commitment"}</span>
                      {" "}
                      <span className={styles["span-3"]}>{"to"}</span>
                      {" "}
                      <span className={styles["span-23"]}>{"delivering"}</span>
                      {" "}
                      <span className={styles["span-24"]}>{"strategic,"}</span>
                      {" "}
                      <span className={styles["span-25"]}>{"bold,"}</span>
                      {" "}
                      <span className={styles["span-14"]}>{"and"}</span>
                      {" "}
                      <span className={styles["span-26"]}>{"dope"}</span>
                      {" "}
                      <span className={styles["span-27"]}>{"work,"}</span>
                      {" "}
                      <span className={styles["span-28"]}>{"whenever"}</span>
                      {" "}
                      <span className={styles["span-7"]}>{"it’s"}</span>
                      {" "}
                      <span className={styles["span-29"]}>{"needed."}</span>
                      {" "}
                      <span className={styles["span-30"]}>{"Because"}</span>
                      {" "}
                      <span className={styles["span-31"]}>{"creativity"}</span>
                      {" "}
                      <span className={styles["span-32"]}>{"doesn’t"}</span>
                      {" "}
                      <span className={styles["span-33"]}>{"clock"}</span>
                      {" "}
                      <span className={styles["span-34"]}>{"out"}</span>
                      {" "}
                      <span className={styles["span-35"]}>{"and"}</span>
                      {" "}
                      <span className={styles["span-36"]}>{"neither"}</span>
                      {" "}
                      <span className={styles["span-37"]}>{"do"}</span>
                      {" "}
                      <span className={styles["span-38"]}>{"we."}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["arrows-2"]}>
              <div className={styles["left"]}>
                <div className={styles["div-12"]}>
                  <div className={styles["star"]}>
                    <div className={styles["div-9"]}>
                      <SvgGraphic className={styles["svg-2"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-732ba57c-4d7a-4961-9c17-93011544abd4, rgb(12, 24, 86))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-732ba57c-4d7a-4961-9c17-93011544abd4, rgb(12, 24, 86)); color: var(--token-732ba57c-4d7a-4961-9c17-93011544abd4, rgb(12, 24, 86)); flex-shrink: 0;\" data-f2c-idx=\"343\"><g color=\"var(--token-732ba57c-4d7a-4961-9c17-93011544abd4, rgb(12, 24, 86))\" weight=\"bold\" data-f2c-idx=\"344\"><path d=\"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z\" data-f2c-idx=\"345\"></path></g></svg>"} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["left"]}>
                <div className={styles["default-4"]}>
                  <div className={styles["star"]}>
                    <div className={styles["div-9"]}>
                      <SvgGraphic className={styles["svg-3"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255)); color: var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"350\"><g color=\"var(--token-f8435e64-406e-4e9a-84a6-6c6eec829bf6, rgb(255, 255, 255))\" weight=\"bold\" data-f2c-idx=\"351\"><path d=\"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z\" data-f2c-idx=\"352\"></path></g></svg>"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}
      />
  )
}
