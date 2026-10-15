import styles from "./styles.module.css"

export default function Clients({ slots = [] }: { slots?: string[] }) {
  return (
      <section className={styles["desktop-2"]}>
        <div className={styles["container"]}>
          <div className={styles["text-5"]}>
            <div className={styles["heading-4"]}>
              <p className={styles["p-68"]}>{slots[0] ?? "Our Partners"}</p>
            </div>
            <div className={styles["subheading"]}>
              <h3 className={styles["h3"]}>{slots[1] ?? "Trusted by companies that built, launched and scaled to success."}</h3>
            </div>
          </div>
          <div className={styles["logos"]}>
            <div className={styles["logo-1-2"]}>
              <div className={styles["div-86"]}>
                <img className={styles["img-17"]} src={slots[2] ?? "https://framerusercontent.com/images/Uv9bcbDZ3xz6Og8491hJ5uR6tDw.png?scale-down-to=512&width=848&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-2-2"]}>
              <div className={styles["div-87"]}>
                <img className={styles["img-18"]} src={slots[3] ?? "https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-3"]}>
              <div className={styles["div-88"]}>
                <img className={styles["img-19"]} src={slots[4] ?? "https://framerusercontent.com/images/nvxdrCsR7f61LC8pD5TbNh3bA.svg?scale-down-to=512&width=895&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-4"]}>
              <div className={styles["div-89"]}>
                <img className={styles["img-20"]} src={slots[5] ?? "https://framerusercontent.com/images/smXZnqGAYmLOxmhBudnl5yZa5Co.svg?scale-down-to=512&width=862&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-5"]}>
              <div className={styles["div-90"]}>
                <img className={styles["img-21"]} src={slots[6] ?? "https://framerusercontent.com/images/36rfQJi5uicI66Tx0iceKGkc.svg?scale-down-to=512&width=843&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-6"]}>
              <div className={styles["div-91"]}>
                <img className={styles["img-22"]} src={slots[7] ?? "https://framerusercontent.com/images/VZhQGIse62hFdcOhVwwDgrPfKk.svg?scale-down-to=512&width=855&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-7"]}>
              <div className={styles["div-92"]}>
                <img className={styles["img-23"]} src={slots[8] ?? "https://framerusercontent.com/images/GArkQ0ZzD81ECme5SLSkDAA6FU.svg?scale-down-to=512&width=716&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-8"]}>
              <div className={styles["div-93"]}>
                <img className={styles["img-24"]} src={slots[9] ?? "https://framerusercontent.com/images/GWyzvFoNBS8gJQvq2XCehLLH0.svg?scale-down-to=512&width=740&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-9"]}>
              <div className={styles["div-94"]}>
                <img className={styles["img-25"]} src={slots[10] ?? "https://framerusercontent.com/images/LxGpHSuqBQx7GiQyshhBWCmBc.svg?scale-down-to=512&width=635&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-10"]}>
              <div className={styles["div-95"]}>
                <img className={styles["img-26"]} src={slots[11] ?? "https://framerusercontent.com/images/ePwoORfSrxxsm92KI2i3aCwtJlY.svg?scale-down-to=512&width=833&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-11"]}>
              <div className={styles["div-96"]}>
                <img className={styles["img-27"]} src={slots[12] ?? "https://framerusercontent.com/images/NQG80ZU5yJoBV3S9AcZzCoYj25U.svg?scale-down-to=512&width=792&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-12"]}>
              <div className={styles["div-97"]}>
                <img className={styles["img-28"]} src={slots[13] ?? "https://framerusercontent.com/images/2kYxr4vnYpNWKSgbF3gTPu5K4.svg?scale-down-to=512&width=673&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-13"]}>
              <div className={styles["div-98"]}>
                <img className={styles["img-29"]} src={slots[14] ?? "https://framerusercontent.com/images/10P9xWvXNlGv77UT0vdgXJqZSM.svg?scale-down-to=512&width=699&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-14"]}>
              <div className={styles["div-99"]}>
                <img className={styles["img-30"]} src={slots[15] ?? "https://framerusercontent.com/images/6S9fyHXQOeQGTuvnnfsZkoZ5jO0.svg?scale-down-to=512&width=857&height=200"} alt="" />
              </div>
            </div>
            <div className={styles["logo-15"]}>
              <div className={styles["div-100"]}>
                <img className={styles["img-31"]} src={slots[16] ?? "https://framerusercontent.com/images/xfFFHZqg9SibbtdsJOogQ2WCCg.svg?scale-down-to=512&width=720&height=200"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
