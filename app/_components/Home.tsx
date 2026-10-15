import styles from "./styles.module.css"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import Logo from "./Logo"
import Button from "./Button"
import ClientLogos from "./ClientLogos"
import ScrambleAppear from "./ScrambleAppear"
import QuickStats from "./QuickStats"
import Indicator from "./Indicator"
import Border from "./Border"
import Arrows from "./Arrows"
import Phosphor from "./Phosphor"
import Button2 from "./Button2"
import ServicesCard from "./ServicesCard"
import HoverMaskReveal from "./HoverMaskReveal"
import AwardsCard from "./AwardsCard"
import AwardList from "./AwardList"
import Border2 from "./Border2"
import Button3 from "./Button3"
import ProjectButton from "./ProjectButton"
import HoverMaskReveal2 from "./HoverMaskReveal2"
import ProjectButton2 from "./ProjectButton2"
import ProjectButton3 from "./ProjectButton3"
import WhyUsCard from "./WhyUsCard"
import Hearts from "./Hearts"
import MedalStarCircle from "./MedalStarCircle"
import UserCheck from "./UserCheck"
import TestimonialCard from "./TestimonialCard"
import TestimonialCard2 from "./TestimonialCard2"
import BGColourChange from "./BGColourChange"
import TeamImage from "./TeamImage"
import BlogCard from "./BlogCard"
import ArticleReadTime from "./ArticleReadTime"
import SectionHeading from "./SectionHeading"
import LetSTalk from "./LetSTalk"
import LetSTalk2 from "./LetSTalk2"
import LetSTalk3 from "./LetSTalk3"
import Logo2 from "./Logo2"
import ScrambleAppear2 from "./ScrambleAppear2"
import ScrambleAppear3 from "./ScrambleAppear3"
import Social from "./Social"
import Border3 from "./Border3"
import MenuItem from "./MenuItem"
import MenuItem2 from "./MenuItem2"
import Newsletter from "./Newsletter"
import Border4 from "./Border4"
import Default2 from "./Default2"
import Framer from "./Framer"
import Text from "./Text"
import SectionHeading2 from "./SectionHeading2"
import Clients from "./Clients"
import BGColourChange2 from "./BGColourChange2"
import TeamImage2 from "./TeamImage2"
import AwardsCard2 from "./AwardsCard2"
import AwardList2 from "./AwardList2"
import Border5 from "./Border5"

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-105"]}>
        <div className={styles["div-106"]}>
          <div className={styles["div-107"]}>
            <div className={styles["div-108"]}>
              <nav className={styles["desktop-with-announcement"]}>
                <div className={styles["nav-bar"]}>
                  <div className={styles["container-2"]}>
                    <div className={styles["logo-menu"]}>
                      <div className={styles["logo-mobile-menu"]}>
                        <a className={styles["logo-5"]} href="./">
                          <div className={styles["div-109"]}>
                            <Logo slots={["https://framerusercontent.com/images/y296rV2b12WXNsCoqAGRW1AhkY.svg?scale-down-to=512&width=1478&height=284"]} />
                          </div>
                        </a>
                      </div>
                      <div className={styles["menu"]}>
                        <div className={styles["div-110"]}>
                          <div className={styles["p-98"]}>
                            <a className={styles["a"]} href="./">{slots[0] ?? "Home"}</a>
                          </div>
                        </div>
                        <div className={styles["div-111"]}>
                          <div className={styles["p-99"]}>
                            <a className={styles["a-2"]} href="./about">{slots[1] ?? "About"}</a>
                          </div>
                        </div>
                        <div className={styles["div-112"]}>
                          <div className={styles["p-100"]}>
                            <a className={styles["a-2"]} href="./portfolio">{slots[2] ?? "Portfolio"}</a>
                          </div>
                        </div>
                        <div className={styles["div-113"]}>
                          <div className={styles["p-101"]}>
                            <a className={styles["a-2"]} href="./blog">{slots[3] ?? "Blog"}</a>
                          </div>
                        </div>
                        <div className={styles["div-114"]}>
                          <div className={styles["p-102"]}>
                            <a className={styles["a-2"]} href="./contact">{slots[4] ?? "Contact"}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className={styles["div-115"]} />
          <div className={styles["div-116"]}>
            <main className={styles["main"]}>
              <div className={styles["div-107"]}>
                <section className={styles["hero"]}>
                  <div className={styles["container-3"]}>
                    <div className={styles["content-5"]}>
                      <div className={styles["heading-subheading"]}>
                        <div className={styles["div-117"]}>
                          <h1 className={styles["h1"]}>
                            <div className={styles["span-40"]}>
                              <span className={styles["span-41"]}>{slots[5] ?? "L"}</span>
                              <span className={styles["span-41"]}>{slots[6] ?? "e"}</span>
                              <span className={styles["span-42"]}>{slots[7] ?? "t"}</span>
                              <span className={styles["span-43"]}>{slots[8] ?? "’"}</span>
                              <span className={styles["span-44"]}>{slots[9] ?? "s"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-40"]}>
                              <span className={styles["span-45"]}>{slots[10] ?? "b"}</span>
                              <span className={styles["span-45"]}>{slots[11] ?? "u"}</span>
                              <span className={styles["span-46"]}>{slots[12] ?? "i"}</span>
                              <span className={styles["span-46"]}>{slots[13] ?? "l"}</span>
                              <span className={styles["span-45"]}>{slots[14] ?? "d"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-40"]}>
                              <span className={styles["span-45"]}>{slots[15] ?? "d"}</span>
                              <span className={styles["span-47"]}>{slots[16] ?? "o"}</span>
                              <span className={styles["span-45"]}>{slots[17] ?? "p"}</span>
                              <span className={styles["span-41"]}>{slots[18] ?? "e"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-40"]}>
                              <span className={styles["span-45"]}>{slots[19] ?? "b"}</span>
                              <span className={styles["span-48"]}>{slots[20] ?? "r"}</span>
                              <span className={styles["span-49"]}>{slots[21] ?? "a"}</span>
                              <span className={styles["span-45"]}>{slots[22] ?? "n"}</span>
                              <span className={styles["span-45"]}>{slots[23] ?? "d"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-40"]}>
                              <span className={styles["span-42"]}>{slots[24] ?? "t"}</span>
                              <span className={styles["span-47"]}>{slots[25] ?? "o"}</span>
                              <span className={styles["span-45"]}>{slots[26] ?? "g"}</span>
                              <span className={styles["span-41"]}>{slots[27] ?? "e"}</span>
                              <span className={styles["span-42"]}>{slots[28] ?? "t"}</span>
                              <span className={styles["span-50"]}>{slots[29] ?? "h"}</span>
                              <span className={styles["span-41"]}>{slots[30] ?? "e"}</span>
                              <span className={styles["span-48"]}>{slots[31] ?? "r"}</span>
                              <span className={styles["span-43"]}>{slots[32] ?? "."}</span>
                            </div>
                          </h1>
                        </div>
                        <div className={styles["div-118"]}>
                          <div className={styles["p-103"]}>
                            <div className={styles["span-51"]}>
                              <span className={styles["span-52"]}>{slots[33] ?? "A"}</span>
                              <span className={styles["span-53"]}>{slots[34] ?? "n"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-54"]}>
                              <span className={styles["span-55"]}>{slots[35] ?? "a"}</span>
                              <span className={styles["span-56"]}>{slots[36] ?? "w"}</span>
                              <span className={styles["span-55"]}>{slots[37] ?? "a"}</span>
                              <span className={styles["span-57"]}>{slots[38] ?? "r"}</span>
                              <span className={styles["span-58"]}>{slots[39] ?? "d"}</span>
                              <span className={styles["span-57"]}>{slots[40] ?? "-"}</span>
                              <span className={styles["span-56"]}>{slots[41] ?? "w"}</span>
                              <span className={styles["span-59"]}>{slots[42] ?? "i"}</span>
                              <span className={styles["span-58"]}>{slots[43] ?? "n"}</span>
                              <span className={styles["span-58"]}>{slots[44] ?? "n"}</span>
                              <span className={styles["span-59"]}>{slots[45] ?? "i"}</span>
                              <span className={styles["span-58"]}>{slots[46] ?? "n"}</span>
                              <span className={styles["span-58"]}>{slots[47] ?? "g"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-60"]}>{slots[48] ?? "s"}</span>
                              <span className={styles["span-61"]}>{slots[49] ?? "t"}</span>
                              <span className={styles["span-53"]}>{slots[50] ?? "u"}</span>
                              <span className={styles["span-53"]}>{slots[51] ?? "d"}</span>
                              <span className={styles["span-62"]}>{slots[52] ?? "i"}</span>
                              <span className={styles["span-63"]}>{slots[53] ?? "o"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-53"]}>{slots[54] ?? "b"}</span>
                              <span className={styles["span-53"]}>{slots[55] ?? "u"}</span>
                              <span className={styles["span-62"]}>{slots[56] ?? "i"}</span>
                              <span className={styles["span-62"]}>{slots[57] ?? "l"}</span>
                              <span className={styles["span-53"]}>{slots[58] ?? "d"}</span>
                              <span className={styles["span-62"]}>{slots[59] ?? "i"}</span>
                              <span className={styles["span-53"]}>{slots[60] ?? "n"}</span>
                              <span className={styles["span-53"]}>{slots[61] ?? "g"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-53"]}>{slots[62] ?? "b"}</span>
                              <span className={styles["span-61"]}>{slots[63] ?? "r"}</span>
                              <span className={styles["span-63"]}>{slots[64] ?? "a"}</span>
                              <span className={styles["span-53"]}>{slots[65] ?? "n"}</span>
                              <span className={styles["span-53"]}>{slots[66] ?? "d"}</span>
                              <span className={styles["span-60"]}>{slots[67] ?? "s"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-61"]}>{slots[68] ?? "t"}</span>
                              <span className={styles["span-53"]}>{slots[69] ?? "h"}</span>
                              <span className={styles["span-63"]}>{slots[70] ?? "a"}</span>
                              <span className={styles["span-61"]}>{slots[71] ?? "t"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-63"]}>{slots[72] ?? "o"}</span>
                              <span className={styles["span-53"]}>{slots[73] ?? "u"}</span>
                              <span className={styles["span-61"]}>{slots[74] ?? "t"}</span>
                              <span className={styles["span-60"]}>{slots[75] ?? "s"}</span>
                              <span className={styles["span-53"]}>{slots[76] ?? "h"}</span>
                              <span className={styles["span-62"]}>{slots[77] ?? "i"}</span>
                              <span className={styles["span-53"]}>{slots[78] ?? "n"}</span>
                              <span className={styles["span-63"]}>{slots[79] ?? "e"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-63"]}>{slots[80] ?? "a"}</span>
                              <span className={styles["span-53"]}>{slots[81] ?? "n"}</span>
                              <span className={styles["span-53"]}>{slots[82] ?? "d"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-63"]}>{slots[83] ?? "o"}</span>
                              <span className={styles["span-53"]}>{slots[84] ?? "u"}</span>
                              <span className={styles["span-61"]}>{slots[85] ?? "t"}</span>
                              <span className={styles["span-53"]}>{slots[86] ?? "p"}</span>
                              <span className={styles["span-63"]}>{slots[87] ?? "e"}</span>
                              <span className={styles["span-61"]}>{slots[88] ?? "r"}</span>
                              <span className={styles["span-61"]}>{slots[89] ?? "f"}</span>
                              <span className={styles["span-63"]}>{slots[90] ?? "o"}</span>
                              <span className={styles["span-61"]}>{slots[91] ?? "r"}</span>
                              <span className={styles["span-64"]}>{slots[92] ?? "m"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-61"]}>{slots[93] ?? "t"}</span>
                              <span className={styles["span-53"]}>{slots[94] ?? "h"}</span>
                              <span className={styles["span-63"]}>{slots[95] ?? "e"}</span>
                            </div>
                            {" "}
                            <div className={styles["span-51"]}>
                              <span className={styles["span-63"]}>{slots[96] ?? "c"}</span>
                              <span className={styles["span-63"]}>{slots[97] ?? "o"}</span>
                              <span className={styles["span-64"]}>{slots[98] ?? "m"}</span>
                              <span className={styles["span-53"]}>{slots[99] ?? "p"}</span>
                              <span className={styles["span-63"]}>{slots[100] ?? "e"}</span>
                              <span className={styles["span-61"]}>{slots[101] ?? "t"}</span>
                              <span className={styles["span-62"]}>{slots[102] ?? "i"}</span>
                              <span className={styles["span-61"]}>{slots[103] ?? "t"}</span>
                              <span className={styles["span-62"]}>{slots[104] ?? "i"}</span>
                              <span className={styles["span-63"]}>{slots[105] ?? "o"}</span>
                              <span className={styles["span-53"]}>{slots[106] ?? "n"}</span>
                              <span className={styles["span-65"]}>{slots[107] ?? "."}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-119"]}>
                        <Button slots={["Let's Talk"]} />
                      </div>
                    </div>
                    <div className={styles["image-7"]}>
                      <div className={styles["div-120"]}>
                        <div className={styles["div-121"]}>
                          <div className={styles["hero-image"]}>
                            <div className={styles["div-122"]}>
                              <div className={styles["div-123"]}>
                                <img className={styles["img-34"]} src={slots[108] ?? "https://framerusercontent.com/images/VmCLIjAEedS8ovyxJTT7iJKm9vM.webp?width=837&height=1000"} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["top-left"]} />
                      <div className={styles["top-right"]} />
                      <div className={styles["bottom-left"]} />
                      <div className={styles["bottom-right"]} />
                    </div>
                  </div>
                  <div className={styles["clients-logo"]}>
                    <div className={styles["div-124"]}>
                      <ClientLogos slots={["https://framerusercontent.com/images/Uv9bcbDZ3xz6Og8491hJ5uR6tDw.png?scale-down-to=512&width=848&height=200","https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","https://framerusercontent.com/images/nvxdrCsR7f61LC8pD5TbNh3bA.svg?scale-down-to=512&width=895&height=200","https://framerusercontent.com/images/smXZnqGAYmLOxmhBudnl5yZa5Co.svg?scale-down-to=512&width=862&height=200","https://framerusercontent.com/images/36rfQJi5uicI66Tx0iceKGkc.svg?scale-down-to=512&width=843&height=200","https://framerusercontent.com/images/VZhQGIse62hFdcOhVwwDgrPfKk.svg?scale-down-to=512&width=855&height=200","https://framerusercontent.com/images/Uv9bcbDZ3xz6Og8491hJ5uR6tDw.png?scale-down-to=512&width=848&height=200","https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","https://framerusercontent.com/images/nvxdrCsR7f61LC8pD5TbNh3bA.svg?scale-down-to=512&width=895&height=200","https://framerusercontent.com/images/smXZnqGAYmLOxmhBudnl5yZa5Co.svg?scale-down-to=512&width=862&height=200","https://framerusercontent.com/images/36rfQJi5uicI66Tx0iceKGkc.svg?scale-down-to=512&width=843&height=200","https://framerusercontent.com/images/VZhQGIse62hFdcOhVwwDgrPfKk.svg?scale-down-to=512&width=855&height=200","https://framerusercontent.com/images/Uv9bcbDZ3xz6Og8491hJ5uR6tDw.png?scale-down-to=512&width=848&height=200","https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","https://framerusercontent.com/images/nvxdrCsR7f61LC8pD5TbNh3bA.svg?scale-down-to=512&width=895&height=200","https://framerusercontent.com/images/smXZnqGAYmLOxmhBudnl5yZa5Co.svg?scale-down-to=512&width=862&height=200","https://framerusercontent.com/images/36rfQJi5uicI66Tx0iceKGkc.svg?scale-down-to=512&width=843&height=200","https://framerusercontent.com/images/VZhQGIse62hFdcOhVwwDgrPfKk.svg?scale-down-to=512&width=855&height=200","https://framerusercontent.com/images/Uv9bcbDZ3xz6Og8491hJ5uR6tDw.png?scale-down-to=512&width=848&height=200","https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","https://framerusercontent.com/images/nvxdrCsR7f61LC8pD5TbNh3bA.svg?scale-down-to=512&width=895&height=200","https://framerusercontent.com/images/smXZnqGAYmLOxmhBudnl5yZa5Co.svg?scale-down-to=512&width=862&height=200","https://framerusercontent.com/images/36rfQJi5uicI66Tx0iceKGkc.svg?scale-down-to=512&width=843&height=200","https://framerusercontent.com/images/VZhQGIse62hFdcOhVwwDgrPfKk.svg?scale-down-to=512&width=855&height=200","Some brands we have teamed up with"]} />
                    </div>
                  </div>
                </section>
              </div>
              <section className={styles["about"]}>
                <div className={styles["container-4"]}>
                  <div className={styles["content-6"]}>
                    <div className={styles["quick-stats-desktop"]}>
                      <QuickStats slots={["Quick Stats","8+ Years","Dedicated","to","researching,","designing,","and","refining","pediatric","assistive","technology","&","sensory","therapy","solutions","with","therapists,","parents,","and","educators."]} />
                    </div>
                    <div className={styles["about-2"]}>
                      <div className={styles["div-125"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-126"]}>
                            <div className={styles["span-66"]}>
                              <span className={styles["span-67"] + " " + styles["rv-3"]} data-reveal>{slots[109] ?? "W"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal>{slots[110] ?? "e"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal>{slots[111] ?? "g"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal>{slots[112] ?? "o"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal>{slots[113] ?? "b"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal>{slots[114] ?? "e"}</span>
                              <span className={styles["span-72"] + " " + styles["rv-3"]} data-reveal>{slots[115] ?? "y"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal>{slots[116] ?? "o"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal>{slots[117] ?? "n"}</span>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal>{slots[118] ?? "d"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal>{slots[119] ?? "d"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal>{slots[120] ?? "e"}</span>
                              <span className={styles["span-72"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[121] ?? "s"}</span>
                              <span className={styles["span-73"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[122] ?? "i"}</span>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[123] ?? "g"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[124] ?? "n"}</span>
                              <span className={styles["span-74"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[125] ?? ","}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[126] ?? "b"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[127] ?? "u"}</span>
                              <span className={styles["span-73"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[128] ?? "i"}</span>
                              <span className={styles["span-75"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[129] ?? "l"}</span>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[130] ?? "d"}</span>
                              <span className={styles["span-73"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[131] ?? "i"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[132] ?? "n"}</span>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[133] ?? "g"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-72"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[134] ?? "s"}</span>
                              <span className={styles["span-76"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[135] ?? "m"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[136] ?? "a"}</span>
                              <span className={styles["span-77"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[137] ?? "r"}</span>
                              <span className={styles["span-78"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[138] ?? "t"}</span>
                              <span className={styles["span-74"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[139] ?? ","}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-72"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[140] ?? "s"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[141] ?? "c"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[142] ?? "a"}</span>
                              <span className={styles["span-75"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[143] ?? "l"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[144] ?? "a"}</span>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[145] ?? "b"}</span>
                              <span className={styles["span-75"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[146] ?? "l"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[147] ?? "e"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[148] ?? "b"}</span>
                              <span className={styles["span-77"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[149] ?? "r"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[150] ?? "a"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[151] ?? "n"}</span>
                              <span className={styles["span-70"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[152] ?? "d"}</span>
                              <span className={styles["span-72"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[153] ?? "s"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-78"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[154] ?? "t"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[155] ?? "h"}</span>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[156] ?? "a"}</span>
                              <span className={styles["span-78"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[157] ?? "t"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-68"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[158] ?? "c"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[159] ?? "u"}</span>
                              <span className={styles["span-78"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[160] ?? "t"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-78"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[161] ?? "t"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[162] ?? "h"}</span>
                              <span className={styles["span-77"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[163] ?? "r"}</span>
                              <span className={styles["span-71"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[164] ?? "o"}</span>
                              <span className={styles["span-79"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[165] ?? "u"}</span>
                              <span className={styles["span-80"] + " " + styles["rv-3"]} data-reveal style={{ transitionDelay: "678ms" }}>{slots[166] ?? "g"}</span>
                              <span className={styles["span-81"]}>{slots[167] ?? "h"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-81"]}>{slots[168] ?? "n"}</span>
                              <span className={styles["span-81"]}>{slots[169] ?? "o"}</span>
                              <span className={styles["span-82"]}>{slots[170] ?? "i"}</span>
                              <span className={styles["span-83"]}>{slots[171] ?? "s"}</span>
                              <span className={styles["span-84"]}>{slots[172] ?? "e"}</span>
                              <span className={styles["span-85"]}>{slots[173] ?? ","}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-81"]}>{slots[174] ?? "h"}</span>
                              <span className={styles["span-82"]}>{slots[175] ?? "i"}</span>
                              <span className={styles["span-86"]}>{slots[176] ?? "t"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-81"]}>{slots[177] ?? "h"}</span>
                              <span className={styles["span-84"]}>{slots[178] ?? "a"}</span>
                              <span className={styles["span-87"]}>{slots[179] ?? "r"}</span>
                              <span className={styles["span-88"]}>{slots[180] ?? "d"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-84"]}>{slots[181] ?? "a"}</span>
                              <span className={styles["span-81"]}>{slots[182] ?? "n"}</span>
                              <span className={styles["span-88"]}>{slots[183] ?? "d"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-88"]}>{slots[184] ?? "d"}</span>
                              <span className={styles["span-87"]}>{slots[185] ?? "r"}</span>
                              <span className={styles["span-82"]}>{slots[186] ?? "i"}</span>
                              <span className={styles["span-83"]}>{slots[187] ?? "v"}</span>
                              <span className={styles["span-84"]}>{slots[188] ?? "e"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-87"]}>{slots[189] ?? "r"}</span>
                              <span className={styles["span-84"]}>{slots[190] ?? "e"}</span>
                              <span className={styles["span-84"]}>{slots[191] ?? "a"}</span>
                              <span className={styles["span-89"]}>{slots[192] ?? "l"}</span>
                            </div>
                            <div className={styles["span-69"]} />
                            <div className={styles["span-66"]}>
                              <span className={styles["span-88"]}>{slots[193] ?? "g"}</span>
                              <span className={styles["span-87"]}>{slots[194] ?? "r"}</span>
                              <span className={styles["span-81"]}>{slots[195] ?? "o"}</span>
                              <span className={styles["span-90"]}>{slots[196] ?? "w"}</span>
                              <span className={styles["span-86"]}>{slots[197] ?? "t"}</span>
                              <span className={styles["span-81"]}>{slots[198] ?? "h"}</span>
                              <span className={styles["span-85"]}>{slots[199] ?? "."}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-107"]}>
                        <div className={styles["button-about-us"]}>
                          <Button2 slots={["About Us"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["services-scroll-container"]}>
                <div className={styles["horizontal-scroll-sticky"]}>
                  <div className={styles["heading-subheading-2"]}>
                    <div className={styles["div-127"]}>
                      <h2 className={styles["h2"]}>
                        {"The Problem &"}
                        <br className={styles["br"]} />
                        {"Emotional Reality"}
                      </h2>
                    </div>
                    <div className={styles["div-128"]}>
                      <p className={styles["p-104"]}>{slots[200] ?? "1 in 36 children face sensory overload and developmental barriers daily — while families battle overwhelming costs, scarce resources, and emotional exhaustion."}</p>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["services"]}>
                      <div className={styles["div-129"]}>
                        <div className={styles["div-130"]}>
                          <div className={styles["div-131"]}>
                            <ServicesCard slots={["Sensory Overload","Everyday sights, sounds, and chaotic spaces trigger unbearable sensory overload. Without an immediate, calming sanctuary to retreat to, anxiety quickly escalates into painful, exhausting meltdowns.","Extreme sensitivity to lights & loud noises","Frequent anxiety, panic & distress meltdowns","Inability to self-regulate in public spaces","Lack of safe sensory decompression rooms","/assets/problem-cards/card1_sensory_overload.jpg"]} />
                          </div>
                        </div>
                        <div className={styles["div-130"]}>
                          <div className={styles["div-131"]}>
                            <ServicesCard slots={["Equipment Costs","Imported pediatric assistive equipment costs 5x to 10x more than accessible alternatives. Families already drained by clinical fees are priced out of basic therapeutic tools their children urgently need.","5-10x markup on imported therapy gear","Exorbitant recurring clinical consultation fees","Essential home therapy tools out of reach","Zero insurance coverage for assistive equipment","/assets/problem-cards/card2_equipment_cost.jpg"]} />
                          </div>
                        </div>
                        <div className={styles["div-130"]}>
                          <div className={styles["div-131"]}>
                            <ServicesCard slots={["Access Barriers","Over 80% of special schools and therapy clinics face a critical shortage of sensory tools. Fewer than 10 domestic manufacturers exist in India, leaving tier 2 & 3 communities severely underserved.","Over 80% of special schools lack sensory rooms","Months-long waitlists at overburdened clinics","Fewer than 10 domestic Indian manufacturers","Tier 2 & 3 communities cut off from care","/assets/problem-cards/card3_school_shortfall.jpg"]} />
                          </div>
                        </div>
                        <div className={styles["div-130"]}>
                          <div className={styles["div-131"]}>
                            <ServicesCard slots={["Caregiver Burnout","Parents navigate relentless caregiver fatigue, sleepless nights, and the heartbreak of watching their child struggle alone. Children feel misunderstood, excluded from peers, and stripped of dignity.","Relentless caregiver burnout & exhaustion","Children feeling isolated & excluded from peers","Chronic sleep deprivation & family strain","Barriers to everyday childhood independence","/assets/problem-cards/card4_emotional_strain.jpg"]} />
                          </div>
                        </div>
                        <div className={styles["awards"]}>
                          <div className={styles["div-132"]}>
                            <AwardsCard slots={["/assets/Joyful Girl Playing Musical Sensory Panels.png","Prevalence","Pediatric Sensory & ASD Diagnosis","1 in 36","Children Globally","Import Markup","Customs & Foreign Brand Markup","5x – 10x","Price Barrier","School Shortage","Special Schools Lacking Sensory Tools","80%+","Facilities in India","Domestic Supply","Specialized Indian Manufacturers","< 10","Severe Shortage","Therapy Burden","Monthly Out-of-Pocket Clinical Fees","₹25k–50k","Zero Insurance","Caregiver Strain","Parents Facing Chronic Sleep Deprivation","84%","Relentless Burnout","Affordability Target","Keller Adapt Radical Price Reduction","60–80%","Clinical Savings"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["bring-your-boldest-ideas-to-life-ready"] + " " + styles["rv-2"]} data-reveal>
                      <div className={styles["p-105"]}>
                        {"Every child deserves sensory calm, dignity, and independence. "}
                        <a className={styles["a-3"]} href="./portfolio">{slots[201] ?? "See Solutions"}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["work"]}>
                <div className={styles["container-5"]}>
                  <div className={styles["content-7"]}>
                    <div className={styles["heading-sub-button"]}>
                      <div className={styles["div-107"]}>
                        <div className={styles["div-133"]}>
                          <h2 className={styles["h2-2"]}>
                            {"Recent "}
                            <br className={styles["br-2"]} />
                            {"Projects"}
                          </h2>
                        </div>
                      </div>
                      <div className={styles["div-107"]}>
                        <div className={styles["div-134"]}>
                          <p className={styles["p-106"]}>{slots[202] ?? "These aren’t just beautiful visuals, they’re real projects, real builds, delivering real outcomes."}</p>
                        </div>
                      </div>
                      <div className={styles["all-projects-button"]}>
                        <Button3 slots={["All Projects"]} />
                      </div>
                    </div>
                    <div className={styles["work-2"]}>
                      <div className={styles["div-135"]}>
                        <a className={styles["a-4"]} href="./portfolio/origin">
                          <div className={styles["projects"]}>
                            <div className={styles["div-136"]}>
                              <div className={styles["project-name"] + " " + styles["rv-2"]} data-reveal>
                                <ProjectButton slots={["Origin"]} />
                              </div>
                            </div>
                            <div className={styles["project-image-desktop"]}>
                              <HoverMaskReveal2 slots={["https://framerusercontent.com/images/nBIbhTXVIXz1M6Xt5uSsfxxrOp0.webp?width=1264&height=848"]} />
                            </div>
                          </div>
                        </a>
                        <a className={styles["a-4"]} href="./portfolio/smile-dental">
                          <div className={styles["projects"]}>
                            <div className={styles["div-136"]}>
                              <div className={styles["project-name-2"] + " " + styles["rv-2"]} data-reveal>
                                <ProjectButton2 slots={["Smile Dental"]} />
                              </div>
                            </div>
                            <div className={styles["project-image-desktop"]}>
                              <HoverMaskReveal2 slots={["https://framerusercontent.com/images/ZPWtqT7vu5OItyCgkWSZOtPEPc.webp?width=1500&height=1000"]} />
                            </div>
                          </div>
                        </a>
                        <a className={styles["a-4"]} href="./portfolio/credix">
                          <div className={styles["projects"]}>
                            <div className={styles["div-136"]}>
                              <div className={styles["project-name"] + " " + styles["rv-2"]} data-reveal>
                                <ProjectButton slots={["Credix"]} />
                              </div>
                            </div>
                            <div className={styles["project-image-desktop"]}>
                              <HoverMaskReveal2 slots={["https://framerusercontent.com/images/heVYRJ1sJbKMXVTKT14N0m6NQ4.webp?scale-down-to=2048&width=4001&height=2652"]} />
                            </div>
                          </div>
                        </a>
                        <a className={styles["a-4"]} href="./portfolio/chop-shop">
                          <div className={styles["projects"]}>
                            <div className={styles["div-136"]}>
                              <div className={styles["project-name-3"] + " " + styles["rv-2"]} data-reveal>
                                <ProjectButton3 slots={["Chop Shop"]} />
                              </div>
                            </div>
                            <div className={styles["project-image-desktop"]}>
                              <HoverMaskReveal2 slots={["https://framerusercontent.com/images/uxb7cSJIZ9QC57aslctMuHPKDU.webp?width=1565&height=1080"]} />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["why-us"]}>
                <div className={styles["container-6"]}>
                  <div className={styles["heading-subheading-3"]}>
                    <div className={styles["div-137"]}>
                      <h2 className={styles["h2-3"]}>
                        {"What Makes"}
                        <br className={styles["br-2"]} />
                        {"Us Dope?"}
                      </h2>
                    </div>
                    <div className={styles["div-107"]}>
                      <div className={styles["div-138"]}>
                        <p className={styles["p-107"]}>{slots[203] ?? "We deliver work that hits, sticks and delivers real growth."}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["cards"]}>
                    <div className={styles["div-107"]}>
                      <div className={styles["card-1"] + " " + styles["rv-4"]} data-reveal>
                        <WhyUsCard slots={["Bold Ideas,","Dope Execution","We thrive on ambitious challenges, transforming bold ideas into powerful, unforgettable brands that stand apart from the noise."]} />
                      </div>
                    </div>
                    <div className={styles["div-107"]}>
                      <div className={styles["card-2"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "109ms" }}>
                        <WhyUsCard slots={["Real Work,","Insane impact","From branding to campaigns, we deliver seamless experiences that cover every touchpoint and keep your brand consistent everywhere."]} />
                      </div>
                    </div>
                    <div className={styles["div-107"]}>
                      <div className={styles["card-2"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "217ms" }}>
                        <WhyUsCard slots={["Small Team,","Industry Leaders","Our team earn client's trust by creating work that’s not only creative, but globally acclaimed for its impact, innovation, and originality."]} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["testimonials"]}>
                <div className={styles["container-7"]}>
                  <div className={styles["content-8"]}>
                    <div className={styles["heading-subtext"]}>
                      <div className={styles["heading-subheading-3"]}>
                        <div className={styles["div-139"]}>
                          <h2 className={styles["h2-4"]}>
                            {"Trusted by "}
                            <br className={styles["br"]} />
                            {"bold founders. "}
                          </h2>
                        </div>
                        <div className={styles["div-140"]}>
                          <p className={styles["p-108"]}>{slots[204] ?? "Inspiring stories that prove our work delivers real results."}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["slider"]}>
                      <div className={styles["testimonial"]}>
                        <div className={styles["div-107"]}>
                          <section className={styles["section-2"]}>
                            <div className={styles["div-141"]}>
                              <ul className={styles["ul-2"]}>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-1"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/4yTkVeUQgljO9r2a5d8vOcWIBhQ.png?scale-down-to=512&width=855&height=200","Working with this team was unlike anything we’ve experienced before. They took the time to guide us, explain their process, and ensure we felt confident at every step. Nothing was rushed or overlooked, every detail reflected genuine care. The final brand identity is amazing, but what we value most is how supported we felt along the way.","https://framerusercontent.com/images/E5nNtqp2p6890hJdcSj97GZTYk.jpg?scale-down-to=1024&width=960&height=1280","Amira Johnson","Founder, HexLab"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-1"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","Dope Studio completely transformed our brand. Their team brought fresh ideas, bold design, and flawless execution that elevated us far beyond our competitors. Every detail from color to layout was intentional and results-driven. Working with them wasn’t just creative, it was game-changing.","https://framerusercontent.com/images/PCzM2HvwI4GFXckQTxCDMJWdis.png?scale-down-to=512&width=1200&height=1200","Anna Harris","Marketing, ACME"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-3"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/Rn1lawz1Gr0m4GlkCMGZIcyoymg.png?scale-down-to=512&width=862&height=200","Our challenge was breaking through in a crowded industry, and this team gave us the edge. They poured their energy into truly understanding our goals, they brought vision, clarity, and daring design that instantly set us apart. Sales increased 3x within months of launch.","https://framerusercontent.com/images/HFgFcT7vQTzwlCZI5W1yld3Bxb8.png?scale-down-to=1024&width=904&height=1200","Lina Chen","Manager, Earth2.0"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-3"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/pQoGXRDQcSAsP6SabNJMMDl0co.png?scale-down-to=512&width=716&height=200","We came in looking for a fresh rebrand, and what we got was a complete transformation. Our customer engagement jumped almost overnight, and the feedback has been incredible. It wasn’t just a new look, it gave us a foundation to grow without limits.","https://framerusercontent.com/images/OIws1FvcZXxat7Cx7fM4OYkTto.png?scale-down-to=1024&width=800&height=1200","James Carter","Co-Founder, Circle"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-1-2"]}>
                                    <TestimonialCard2 slots={["https://framerusercontent.com/images/4yTkVeUQgljO9r2a5d8vOcWIBhQ.png?scale-down-to=512&width=855&height=200","Working with this team was unlike anything we’ve experienced before. They took the time to guide us, explain their process, and ensure we felt confident at every step. Nothing was rushed or overlooked, every detail reflected genuine care. The final brand identity is amazing, but what we value most is how supported we felt along the way.","https://framerusercontent.com/images/E5nNtqp2p6890hJdcSj97GZTYk.jpg?scale-down-to=1024&width=960&height=1280","Amira Johnson","Founder, HexLab"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-2"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","Dope Studio completely transformed our brand. Their team brought fresh ideas, bold design, and flawless execution that elevated us far beyond our competitors. Every detail from color to layout was intentional and results-driven. Working with them wasn’t just creative, it was game-changing.","https://framerusercontent.com/images/PCzM2HvwI4GFXckQTxCDMJWdis.png?scale-down-to=512&width=1200&height=1200","Anna Harris","Marketing, ACME"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-2"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/Rn1lawz1Gr0m4GlkCMGZIcyoymg.png?scale-down-to=512&width=862&height=200","Our challenge was breaking through in a crowded industry, and this team gave us the edge. They poured their energy into truly understanding our goals, they brought vision, clarity, and daring design that instantly set us apart. Sales increased 3x within months of launch.","https://framerusercontent.com/images/HFgFcT7vQTzwlCZI5W1yld3Bxb8.png?scale-down-to=1024&width=904&height=1200","Lina Chen","Manager, Earth2.0"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/pQoGXRDQcSAsP6SabNJMMDl0co.png?scale-down-to=512&width=716&height=200","We came in looking for a fresh rebrand, and what we got was a complete transformation. Our customer engagement jumped almost overnight, and the feedback has been incredible. It wasn’t just a new look, it gave us a foundation to grow without limits.","https://framerusercontent.com/images/OIws1FvcZXxat7Cx7fM4OYkTto.png?scale-down-to=1024&width=800&height=1200","James Carter","Co-Founder, Circle"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/4yTkVeUQgljO9r2a5d8vOcWIBhQ.png?scale-down-to=512&width=855&height=200","Working with this team was unlike anything we’ve experienced before. They took the time to guide us, explain their process, and ensure we felt confident at every step. Nothing was rushed or overlooked, every detail reflected genuine care. The final brand identity is amazing, but what we value most is how supported we felt along the way.","https://framerusercontent.com/images/E5nNtqp2p6890hJdcSj97GZTYk.jpg?scale-down-to=1024&width=960&height=1280","Amira Johnson","Founder, HexLab"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","Dope Studio completely transformed our brand. Their team brought fresh ideas, bold design, and flawless execution that elevated us far beyond our competitors. Every detail from color to layout was intentional and results-driven. Working with them wasn’t just creative, it was game-changing.","https://framerusercontent.com/images/PCzM2HvwI4GFXckQTxCDMJWdis.png?scale-down-to=512&width=1200&height=1200","Anna Harris","Marketing, ACME"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/Rn1lawz1Gr0m4GlkCMGZIcyoymg.png?scale-down-to=512&width=862&height=200","Our challenge was breaking through in a crowded industry, and this team gave us the edge. They poured their energy into truly understanding our goals, they brought vision, clarity, and daring design that instantly set us apart. Sales increased 3x within months of launch.","https://framerusercontent.com/images/HFgFcT7vQTzwlCZI5W1yld3Bxb8.png?scale-down-to=1024&width=904&height=1200","Lina Chen","Manager, Earth2.0"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/pQoGXRDQcSAsP6SabNJMMDl0co.png?scale-down-to=512&width=716&height=200","We came in looking for a fresh rebrand, and what we got was a complete transformation. Our customer engagement jumped almost overnight, and the feedback has been incredible. It wasn’t just a new look, it gave us a foundation to grow without limits.","https://framerusercontent.com/images/OIws1FvcZXxat7Cx7fM4OYkTto.png?scale-down-to=1024&width=800&height=1200","James Carter","Co-Founder, Circle"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/4yTkVeUQgljO9r2a5d8vOcWIBhQ.png?scale-down-to=512&width=855&height=200","Working with this team was unlike anything we’ve experienced before. They took the time to guide us, explain their process, and ensure we felt confident at every step. Nothing was rushed or overlooked, every detail reflected genuine care. The final brand identity is amazing, but what we value most is how supported we felt along the way.","https://framerusercontent.com/images/E5nNtqp2p6890hJdcSj97GZTYk.jpg?scale-down-to=1024&width=960&height=1280","Amira Johnson","Founder, HexLab"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","Dope Studio completely transformed our brand. Their team brought fresh ideas, bold design, and flawless execution that elevated us far beyond our competitors. Every detail from color to layout was intentional and results-driven. Working with them wasn’t just creative, it was game-changing.","https://framerusercontent.com/images/PCzM2HvwI4GFXckQTxCDMJWdis.png?scale-down-to=512&width=1200&height=1200","Anna Harris","Marketing, ACME"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/Rn1lawz1Gr0m4GlkCMGZIcyoymg.png?scale-down-to=512&width=862&height=200","Our challenge was breaking through in a crowded industry, and this team gave us the edge. They poured their energy into truly understanding our goals, they brought vision, clarity, and daring design that instantly set us apart. Sales increased 3x within months of launch.","https://framerusercontent.com/images/HFgFcT7vQTzwlCZI5W1yld3Bxb8.png?scale-down-to=1024&width=904&height=1200","Lina Chen","Manager, Earth2.0"]} />
                                  </div>
                                </li>
                                <li className={styles["div-68"]}>
                                  <div className={styles["testimonial-card-4"]}>
                                    <TestimonialCard slots={["https://framerusercontent.com/images/pQoGXRDQcSAsP6SabNJMMDl0co.png?scale-down-to=512&width=716&height=200","We came in looking for a fresh rebrand, and what we got was a complete transformation. Our customer engagement jumped almost overnight, and the feedback has been incredible. It wasn’t just a new look, it gave us a foundation to grow without limits.","https://framerusercontent.com/images/OIws1FvcZXxat7Cx7fM4OYkTto.png?scale-down-to=1024&width=800&height=1200","James Carter","Co-Founder, Circle"]} />
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className={styles["fieldset"]}>
                              <div className={styles["div-142"]}>
                                <button className={styles["button"]}>
                                  <img className={styles["img-35"]} src={slots[205] ?? "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left"} alt="" />
                                </button>
                                <button className={styles["button"]}>
                                  <img className={styles["img-35"]} src={slots[206] ?? "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right"} alt="" />
                                </button>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["team"]}>
                <div className={styles["div-107"]}>
                  <div className={styles["div-143"]}>
                    <BGColourChange slots={[]} />
                  </div>
                </div>
                <div className={styles["container-8"]}>
                  <div className={styles["sticky"]}>
                    <div className={styles["heading-subtext-2"]}>
                      <div className={styles["content-9"]}>
                        <div className={styles["div-144"]}>
                          <h2 className={styles["h2-5"]}>
                            {"The brains "}
                            <br className={styles["br"]} />
                            {"behind the brand."}
                          </h2>
                        </div>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-145"]}>
                            <p className={styles["p-109"]}>{slots[207] ?? "Small team building clean, functional and  dope brands."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["text-appear"]}>
                      <div className={styles["1st"]}>
                        <p className={styles["p-110"]}>{slots[208] ?? "We speak design, code and strategy fluently. Collaborating across 5 time zones to deliver seamless, world-class results every time."}</p>
                      </div>
                      <div className={styles["1st"]}>
                        <p className={styles["p-110"]}>{slots[209] ?? "We treat every project as an opportunity to challenge norms, inspire action and deliver work that truly matters."}</p>
                      </div>
                      <div className={styles["3rd"]}>
                        <p className={styles["p-111"]}>{slots[210] ?? "Diverse minds. Unified vision. Creating brands that rise above and redefine success."}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["team-images"]}>
                    <div className={styles["1-2"]}>
                      <div className={styles["1-3"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-146"]}>
                            <TeamImage slots={["https://framerusercontent.com/images/wSNHPjHAA2inuklvnasZX8CVx9I.webp?width=799&height=1200","Lina G.","Brand Strategist"]} />
                          </div>
                        </div>
                      </div>
                      <div className={styles["2-2"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-146"]}>
                            <TeamImage slots={["https://framerusercontent.com/images/0Fc0Qr1VkVYdq93oVOFZUou3t4.webp?width=1024&height=1024","Amara J.","Creative Director"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["1-2"]}>
                      <div className={styles["1-3"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-146"]}>
                            <TeamImage slots={["https://framerusercontent.com/images/T2kuSkzaR1XprcRdsexyAn69dic.webp?width=574&height=1024","Kenji S.","Lead Developer"]} />
                          </div>
                        </div>
                      </div>
                      <div className={styles["2-2"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-146"]}>
                            <TeamImage slots={["https://framerusercontent.com/images/s66Qf0KPdFofJeVLpYXOgffb92o.webp?width=1200&height=1200","Sofia M.","Project Manager"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["1-2"]}>
                      <div className={styles["1-3"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-146"]}>
                            <TeamImage slots={["https://framerusercontent.com/images/FpbwQQwyXbs76IU6o4pdYQFQM.webp?width=1024&height=1024","Priya N.","Marketing Strategist"]} />
                          </div>
                        </div>
                      </div>
                      <div className={styles["2-2"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-146"]}>
                            <TeamImage slots={["https://framerusercontent.com/images/gI8Mp658oH1taJmoI5eoXkLNU8.webp?width=1024&height=1024","David O.","UI/UX Designer"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["blog"]}>
                <div className={styles["container-9"]}>
                  <div className={styles["heading-subtext-3"]}>
                    <div className={styles["content-10"]}>
                      <div className={styles["div-147"]}>
                        <h2 className={styles["h2-6"]}>
                          {"Straight Outta"}
                          <br className={styles["br-2"]} />
                          {"the Studio"}
                        </h2>
                      </div>
                      <div className={styles["div-107"]}>
                        <div className={styles["div-138"]}>
                          <p className={styles["p-107"]}>{slots[211] ?? "Fresh updates and a few things we just can’t shut up about."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["card"]}>
                    <div className={styles["div-148"]}>
                      <div className={styles["div-149"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-150"]}>
                            <BlogCard slots={["https://framerusercontent.com/images/KaR22TVlWcuZxMoxPA3qD2brU.png?scale-down-to=1024&width=673&height=1200","May 8, 2026","Design Tools","Creative Tools Reinvented, Fueling Modern Workflows and Beyond","6\n             min read"]} />
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-149"]}>
                        <div className={styles["div-107"]}>
                          <div className={styles["div-150"]}>
                            <BlogCard slots={["https://framerusercontent.com/images/KC8i4IExRQ0tTrAfZRk8XLIUtJs.jpg?scale-down-to=1024&width=904&height=1200","May 7, 2026","Inspiration","The Growth and Global Influence of Social Platforms Worldwide","6\n             min read"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-151"]}>
                  <div className={styles["div-152"]}>
                    <div className={styles["div-153"] + " " + styles["rv-5"]} data-reveal />
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div className={styles["div-154"]} />
          <div className={styles["div-155"]} />
          <section className={styles["faq"]}>
            <div className={styles["container-10"]}>
              <div className={styles["content-11"]}>
                <div className={styles["text-6"]}>
                  <div className={styles["div-156"]}>
                    <div className={styles["div-107"]}>
                      <div className={styles["div-157"]}>
                        <SectionHeading slots={["FAQ"]} />
                      </div>
                    </div>
                    <div className={styles["div-158"]}>
                      <div className={styles["p-112"]}>
                        <div className={styles["span-91"]}>
                          <span className={styles["span-92"] + " " + styles["rv-6"]} data-reveal>{slots[212] ?? "C"}</span>
                          <span className={styles["span-93"] + " " + styles["rv-6"]} data-reveal>{slots[213] ?? "u"}</span>
                          <span className={styles["span-94"] + " " + styles["rv-6"]} data-reveal>{slots[214] ?? "r"}</span>
                          <span className={styles["span-95"] + " " + styles["rv-6"]} data-reveal>{slots[215] ?? "i"}</span>
                          <span className={styles["span-96"] + " " + styles["rv-6"]} data-reveal>{slots[216] ?? "o"}</span>
                          <span className={styles["span-93"] + " " + styles["rv-6"]} data-reveal>{slots[217] ?? "u"}</span>
                          <span className={styles["span-97"] + " " + styles["rv-6"]} data-reveal>{slots[218] ?? "s"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-98"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "81ms" }}>{slots[219] ?? "a"}</span>
                          <span className={styles["span-99"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "81ms" }}>{slots[220] ?? "b"}</span>
                          <span className={styles["span-96"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "81ms" }}>{slots[221] ?? "o"}</span>
                          <span className={styles["span-93"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "81ms" }}>{slots[222] ?? "u"}</span>
                          <span className={styles["span-100"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "81ms" }}>{slots[223] ?? "t"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-101"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "81ms" }}>{slots[224] ?? "h"}</span>
                          <span className={styles["span-96"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "81ms" }}>{slots[225] ?? "o"}</span>
                          <span className={styles["span-102"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "81ms" }}>{slots[226] ?? "w"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-102"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "164ms" }}>{slots[227] ?? "w"}</span>
                          <span className={styles["span-103"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "164ms" }}>{slots[228] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-102"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "164ms" }}>{slots[229] ?? "w"}</span>
                          <span className={styles["span-96"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "164ms" }}>{slots[230] ?? "o"}</span>
                          <span className={styles["span-94"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "164ms" }}>{slots[231] ?? "r"}</span>
                          <span className={styles["span-103"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "164ms" }}>{slots[232] ?? "k"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-96"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[233] ?? "o"}</span>
                          <span className={styles["span-93"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[234] ?? "u"}</span>
                          <span className={styles["span-94"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[235] ?? "r"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-104"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[236] ?? "m"}</span>
                          <span className={styles["span-98"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[237] ?? "a"}</span>
                          <span className={styles["span-93"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[238] ?? "g"}</span>
                          <span className={styles["span-95"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[239] ?? "i"}</span>
                          <span className={styles["span-105"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[240] ?? "c"}</span>
                          <span className={styles["span-106"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "248ms" }}>{slots[241] ?? "?"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["div-159"]}>
                      <div className={styles["p-113"]}>
                        <div className={styles["span-107"]}>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[242] ?? "F"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[243] ?? "r"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[244] ?? "o"}</span>
                          <span className={styles["span-110"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[245] ?? "m"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[246] ?? "p"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[247] ?? "r"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[248] ?? "o"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[249] ?? "c"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[250] ?? "e"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[251] ?? "s"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[252] ?? "s"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[253] ?? "t"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[254] ?? "o"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[255] ?? "p"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[256] ?? "r"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[257] ?? "i"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[258] ?? "c"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[259] ?? "i"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[260] ?? "n"}</span>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[261] ?? "g"}</span>
                          <span className={styles["span-114"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[262] ?? ","}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[263] ?? "d"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[264] ?? "e"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[265] ?? "s"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[266] ?? "i"}</span>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[267] ?? "g"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[268] ?? "n"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[269] ?? "t"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[270] ?? "o"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[271] ?? "d"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[272] ?? "e"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[273] ?? "l"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[274] ?? "i"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[275] ?? "v"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[276] ?? "e"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[277] ?? "r"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[278] ?? "y"}</span>
                          <span className={styles["span-114"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[279] ?? ","}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-115"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[280] ?? "w"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[281] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[282] ?? "b"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[283] ?? "e"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[284] ?? "l"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[285] ?? "i"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[286] ?? "e"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[287] ?? "v"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[288] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[289] ?? "e"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[290] ?? "v"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[291] ?? "e"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[292] ?? "r"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[293] ?? "y"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[294] ?? "b"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[295] ?? "r"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[296] ?? "a"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[297] ?? "n"}</span>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[298] ?? "d"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[299] ?? "h"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[300] ?? "a"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[301] ?? "s"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[302] ?? "q"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[303] ?? "u"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[304] ?? "e"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[305] ?? "s"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[306] ?? "t"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[307] ?? "i"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[308] ?? "o"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[309] ?? "n"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[310] ?? "s"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[311] ?? "b"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[312] ?? "e"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[313] ?? "f"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[314] ?? "o"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[315] ?? "r"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[316] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[317] ?? "t"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[318] ?? "h"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[319] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[320] ?? "g"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[321] ?? "l"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[322] ?? "o"}</span>
                          <span className={styles["span-115"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[323] ?? "w"}</span>
                          <span className={styles["span-116"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[324] ?? "-"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[325] ?? "u"}</span>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[326] ?? "p"}</span>
                          <span className={styles["span-114"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[327] ?? "."}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-117"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[328] ?? "W"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[329] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[330] ?? "h"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[331] ?? "a"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[332] ?? "v"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[333] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[334] ?? "a"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[335] ?? "n"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[336] ?? "s"}</span>
                          <span className={styles["span-115"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[337] ?? "w"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[338] ?? "e"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[339] ?? "r"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[340] ?? "e"}</span>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[341] ?? "d"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[342] ?? "t"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[343] ?? "h"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[344] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-110"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[345] ?? "m"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[346] ?? "o"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[347] ?? "s"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[348] ?? "t"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[349] ?? "c"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[350] ?? "o"}</span>
                          <span className={styles["span-110"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[351] ?? "m"}</span>
                          <span className={styles["span-110"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[352] ?? "m"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[353] ?? "o"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[354] ?? "n"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[355] ?? "o"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[356] ?? "n"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[357] ?? "e"}</span>
                          <span className={styles["span-112"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[358] ?? "s"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[359] ?? "r"}</span>
                          <span className={styles["span-113"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[360] ?? "i"}</span>
                          <span className={styles["span-111"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[361] ?? "g"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[362] ?? "h"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[363] ?? "t"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-107"]}>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[364] ?? "h"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[365] ?? "e"}</span>
                          <span className={styles["span-109"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[366] ?? "r"}</span>
                          <span className={styles["span-108"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[367] ?? "e"}</span>
                          <span className={styles["span-114"] + " " + styles["rv-6"]} data-reveal style={{ transitionDelay: "348ms" }}>{slots[368] ?? "."}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["border-2"]} />
                <div className={styles["q-a"]}>
                  <div className={styles["div-107"]}>
                    <div className={styles["div-160"]}>
                      <div className={styles["close"]}>
                        <div className={styles["question-icon"]}>
                          <div className={styles["div-161"]}>
                            <p className={styles["p-114"]}>{slots[369] ?? "What makes us different?"}</p>
                          </div>
                          <div className={styles["icon-4"]}>
                            <div className={styles["div-162"]} />
                          </div>
                        </div>
                        <div className={styles["answer"]}>
                          <div className={styles["div-163"]}>
                            <p className={styles["p-115"]}>{slots[370] ?? "We don’t just design pretty visuals, we build brands that move the needle. Every pixel, every strategy, every campaign is rooted in results. Our clients trust us because we combine creativity with measurable impact."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["div-160"]}>
                      <div className={styles["close"]}>
                        <div className={styles["question-icon"]}>
                          <div className={styles["div-164"]}>
                            <p className={styles["p-116"]}>{slots[371] ?? "How long does a project take?"}</p>
                          </div>
                          <div className={styles["icon-4"]}>
                            <div className={styles["div-162"]} />
                          </div>
                        </div>
                        <div className={styles["answer"]}>
                          <div className={styles["div-163"]}>
                            <p className={styles["p-115"]}>{slots[372] ?? "Timelines depend on the scope, some branding projects can be done in weeks, while larger websites or campaigns may take months. What’s consistent is our commitment to meeting deadlines without sacrificing quality."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["div-160"]}>
                      <div className={styles["close"]}>
                        <div className={styles["question-icon"]}>
                          <div className={styles["div-165"]}>
                            <p className={styles["p-117"]}>{slots[373] ?? "How much does the service cost?"}</p>
                          </div>
                          <div className={styles["icon-4"]}>
                            <div className={styles["div-162"]} />
                          </div>
                        </div>
                        <div className={styles["answer"]}>
                          <div className={styles["div-163"]}>
                            <p className={styles["p-115"]}>{slots[374] ?? "No cookie-cutter pricing here. Every project is unique, and costs are tailored to scope and complexity. We’re upfront from the start, so there are no surprises, just value-packed work that pays off."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["div-160"]}>
                      <div className={styles["close"]}>
                        <div className={styles["question-icon"]}>
                          <div className={styles["div-166"]}>
                            <p className={styles["p-118"]}>{slots[375] ?? "What industries do you work with?"}</p>
                          </div>
                          <div className={styles["icon-4"]}>
                            <div className={styles["div-162"]} />
                          </div>
                        </div>
                        <div className={styles["answer"]}>
                          <div className={styles["div-163"]}>
                            <p className={styles["p-115"]}>{slots[376] ?? "We’ve collaborated with startups, global names, and organizations of every kind. While we’re not tied to one industry, we’re drawn to teams chasing bold, future-focused ideas."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["div-160"]}>
                      <div className={styles["close"]}>
                        <div className={styles["question-icon"]}>
                          <div className={styles["div-167"]}>
                            <p className={styles["p-119"]}>{slots[377] ?? "Do you only work with big brands?"}</p>
                          </div>
                          <div className={styles["icon-4"]}>
                            <div className={styles["div-162"]} />
                          </div>
                        </div>
                        <div className={styles["answer"]}>
                          <div className={styles["div-163"]}>
                            <p className={styles["p-115"]}>{slots[378] ?? "Not at all. We work with ambitious founders, growing startups, and established global brands alike. Whether you’re scaling fast or just starting out, our approach adapts to your goals."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["div-160"]}>
                      <div className={styles["close"]}>
                        <div className={styles["question-icon"]}>
                          <div className={styles["div-168"]}>
                            <p className={styles["p-120"]}>{slots[379] ?? "Do you offer ongoing support?"}</p>
                          </div>
                          <div className={styles["icon-4"]}>
                            <div className={styles["div-162"]} />
                          </div>
                        </div>
                        <div className={styles["answer"]}>
                          <div className={styles["div-163"]}>
                            <p className={styles["p-115"]}>{slots[380] ?? "Absolutely. Whether it’s website updates, new campaigns, or long-term brand growth, we stick around. Many of our clients become long-term partners because we grow as they grow."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["div-169"]}>
              <div className={styles["div-170"]}>
                <div className={styles["div-171"] + " " + styles["rv-7"]} data-reveal />
              </div>
            </div>
          </section>
          <footer className={styles["footer-3"]}>
            <div className={styles["ticker"]}>
              <div className={styles["div-172"]}>
                <section className={styles["section-3"]}>
                  <ul className={styles["ul-3"] + " " + styles["rv-8"] + " " + styles["loop-2"]} data-reveal style={{ transitionDelay: "421ms" }}>
                    <li className={styles["li-2"]}>
                      <a className={styles["1-4"]} href="./contact">
                        <div className={styles["div-173"]}>
                          <LetSTalk slots={["Have an idea?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-4"]}>
                      <a className={styles["2-3"]} href="./contact">
                        <div className={styles["div-174"]}>
                          <LetSTalk2 slots={["Feeling inspired?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-2"]}>
                      <a className={styles["3-2"]} href="./contact">
                        <div className={styles["div-173"]}>
                          <LetSTalk slots={["Thinking big?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-5"]}>
                      <a className={styles["4-2"]} href="./contact">
                        <div className={styles["div-175"]}>
                          <LetSTalk3 slots={["Got that spark?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-2"]}>
                      <a className={styles["1-4"]} href="./contact">
                        <div className={styles["div-173"]}>
                          <LetSTalk slots={["Have an idea?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-4"]}>
                      <a className={styles["2-3"]} href="./contact">
                        <div className={styles["div-174"]}>
                          <LetSTalk2 slots={["Feeling inspired?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-2"]}>
                      <a className={styles["3-2"]} href="./contact">
                        <div className={styles["div-173"]}>
                          <LetSTalk slots={["Thinking big?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-5"]}>
                      <a className={styles["4-2"]} href="./contact">
                        <div className={styles["div-175"]}>
                          <LetSTalk3 slots={["Got that spark?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-2"]}>
                      <a className={styles["1-4"]} href="./contact">
                        <div className={styles["div-173"]}>
                          <LetSTalk slots={["Have an idea?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-4"]}>
                      <a className={styles["2-3"]} href="./contact">
                        <div className={styles["div-174"]}>
                          <LetSTalk2 slots={["Feeling inspired?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-2"]}>
                      <a className={styles["3-2"]} href="./contact">
                        <div className={styles["div-173"]}>
                          <LetSTalk slots={["Thinking big?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-5"]}>
                      <a className={styles["4-2"]} href="./contact">
                        <div className={styles["div-175"]}>
                          <LetSTalk3 slots={["Got that spark?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-2"]}>
                      <a className={styles["1-4"]} href="./contact">
                        <div className={styles["div-173"]}>
                          <LetSTalk slots={["Have an idea?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-4"]}>
                      <a className={styles["2-3"]} href="./contact">
                        <div className={styles["div-174"]}>
                          <LetSTalk2 slots={["Feeling inspired?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-2"]}>
                      <a className={styles["3-2"]} href="./contact">
                        <div className={styles["div-173"]}>
                          <LetSTalk slots={["Thinking big?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                    <li className={styles["li-5"]}>
                      <a className={styles["4-2"]} href="./contact">
                        <div className={styles["div-175"]}>
                          <LetSTalk3 slots={["Got that spark?","Lets talk."]} />
                        </div>
                      </a>
                    </li>
                    <li className={styles["li-3"]}>
                      <div className={styles["ticker-seperator"]} />
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div className={styles["container-11"]}>
              <div className={styles["content-12"]}>
                <div className={styles["about-copyright"]}>
                  <div className={styles["about-3"]}>
                    <a className={styles["logo-5"]} href="./">
                      <div className={styles["div-136"]}>
                        <div className={styles["div-109"]}>
                          <Logo2 slots={["https://framerusercontent.com/images/QyTRb8W57mUQdYJUZBZC8Q7F0Dc.svg?scale-down-to=512&width=1478&height=284"]} />
                        </div>
                      </div>
                    </a>
                    <div className={styles["div-176"]}>
                      <div className={styles["div-177"]}>
                        <ScrambleAppear2 slots={["Rooted in strategy."]} />
                      </div>
                      <div className={styles["div-178"]}>
                        <ScrambleAppear3 slots={["Dopeness in every pixel."]} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["social-links-copyright"]}>
                    <div className={styles["social-links"]}>
                      <div className={styles["behance-2"]}>
                        <Social slots={[]} />
                      </div>
                      <div className={styles["behance-2"]}>
                        <Social slots={[]} />
                      </div>
                      <div className={styles["behance-2"]}>
                        <Social slots={[]} />
                      </div>
                    </div>
                    <div className={styles["copyright"]}>
                      <div className={styles["div-179"]}>
                        <div className={styles["p-121"]}>
                          <a className={styles["a-5"]} href="https://www.framer.com/?via=essadonzo">{slots[381] ?? "[ Made in Framer ]"}</a>
                        </div>
                      </div>
                      <div className={styles["content-13"]}>
                        <div className={styles["year"]}>
                          <div className={styles["copyright-year-auto"]}>
                            <div className={styles["div-180"]}>
                              <p className={styles["p-122"]}>{slots[382] ?? "© 2026"}</p>
                              <div className={styles["p-123"]} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-181"]}>
                          <Border3 slots={[]} />
                        </div>
                        <div className={styles["div-182"]}>
                          <p className={styles["p-124"]}>{slots[383] ?? "All Rights Reserved"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["time-text"]}>
                  <div className={styles["time-4"]}>
                    <div className={styles["div-183"]}>
                      <p className={styles["p-125"]}>{slots[384] ?? "New York"}</p>
                    </div>
                    <div className={styles["div-184"]}>
                      <div className={styles["div-185"]}>
                        <span className={styles["span-118"]}>{slots[385] ?? "04:53 AM"}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-186"]}>
                    <p className={styles["p-126"]}>{slots[386] ?? "Creating Dope stuff for brands everywhere."}</p>
                  </div>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["footer-links"]}>
                    <div className={styles["content-14"]}>
                      <div className={styles["links-2"]}>
                        <div className={styles["div-187"]}>
                          <p className={styles["p-127"]}>{slots[387] ?? "Company"}</p>
                        </div>
                        <div className={styles["menu-2"]}>
                          <div className={styles["div-110"]}>
                            <div className={styles["p-98"]}>
                              <a className={styles["a-6"]} href="./">{slots[388] ?? "Home"}</a>
                            </div>
                          </div>
                          <div className={styles["div-111"]}>
                            <div className={styles["p-99"]}>
                              <a className={styles["a-3"]} href="./about">{slots[389] ?? "About"}</a>
                            </div>
                          </div>
                          <div className={styles["div-112"]}>
                            <div className={styles["p-100"]}>
                              <a className={styles["a-3"]} href="./portfolio">{slots[390] ?? "Portfolio"}</a>
                            </div>
                          </div>
                          <div className={styles["div-113"]}>
                            <div className={styles["p-101"]}>
                              <a className={styles["a-3"]} href="./blog">{slots[391] ?? "Blog"}</a>
                            </div>
                          </div>
                          <div className={styles["div-114"]}>
                            <div className={styles["p-102"]}>
                              <a className={styles["a-3"]} href="./contact">{slots[392] ?? "Contact"}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["contact"]}>
                        <div className={styles["div-187"]}>
                          <p className={styles["p-127"]}>{slots[393] ?? "Contact"}</p>
                        </div>
                        <div className={styles["address-tel-email"]}>
                          <div className={styles["div-188"]}>
                            <p className={styles["p-128"]}>{slots[394] ?? "1200 Creative Street Suite 500, New York 94103, NY"}</p>
                          </div>
                          <div className={styles["email-phone"]}>
                            <div className={styles["tel"]}>
                              <MenuItem slots={["+1(415)555-0198"]} />
                            </div>
                            <div className={styles["email"]}>
                              <MenuItem2 slots={["team@dopestudio.com"]} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["newsletter"]}>
                      <div className={styles["div-189"]}>
                        <p className={styles["p-129"]}>{slots[395] ?? "Psst... interested in dope updates?"}</p>
                      </div>
                      <div className={styles["div-190"]}>
                        <Newsletter slots={[]} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-107"]}>
                    <div className={styles["div-191"]}>
                      <Border4 slots={[]} />
                    </div>
                  </div>
                  <div className={styles["awards-legal"]}>
                    <div className={styles["awards-2"]}>
                      <div className={styles["div-107"]}>
                        <div className={styles["icon-5"]}>
                          <div className={styles["div-192"]}>
                            <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"2125\"><use href=\"#svg117005589_864\" data-f2c-idx=\"2126\"></use></svg>"} />
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-107"]}>
                        <div className={styles["div-193"]}>
                          <p className={styles["p-130"]}>{slots[396] ?? "Multiple industry awards for branding, design and digital innovation."}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["legal"]}>
                      <div className={styles["div-194"]}>
                        <div className={styles["p-131"]}>
                          <a className={styles["a-7"]} href="./privacy-policy">{slots[397] ?? "Privacy Policy"}</a>
                        </div>
                      </div>
                      <div className={styles["div-182"]}>
                        <div className={styles["p-132"]}>
                          <a className={styles["a-7"]} href="./term-of-service">{slots[398] ?? "Terms of Service"}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <Default2 slots={[]} />
      </div>
      <div className={styles["div-195"]}>
        <a className={styles["light-2"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content-15"]}>
            <div className={styles["div-196"]}>
              <Framer slots={[]} />
            </div>
            <p className={styles["p-133"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <Text slots={[]} />
          </div>
          <div className={styles["bottom"]} />
          <div className={styles["border-3"]} />
        </a>
      </div>
      <div className={styles["div-197"]}>
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 14.096 8.909\" overflow=\"visible\" id=\"svg-246205585_2363\" data-f2c-idx=\"2191\"><path d=\"M 4.1 0 C 4.507 0 4.883 0.032 5.226 0.126 C 5.571 0.189 5.853 0.315 6.103 0.472 C 6.353 0.629 6.541 0.85 6.666 1.133 C 6.791 1.417 6.854 1.763 6.854 2.141 C 6.854 2.582 6.76 2.959 6.541 3.242 C 6.353 3.526 6.04 3.777 5.665 3.966 C 6.197 4.124 6.604 4.407 6.854 4.785 C 7.104 5.163 7.261 5.635 7.261 6.17 C 7.261 6.611 7.167 6.989 7.01 7.304 C 6.854 7.619 6.604 7.902 6.322 8.091 C 6.015 8.293 5.677 8.442 5.321 8.531 C 4.945 8.626 4.57 8.689 4.194 8.689 L 0 8.689 L 0 0 Z M 3.849 3.525 C 4.194 3.525 4.476 3.431 4.694 3.274 C 4.913 3.117 5.008 2.833 5.008 2.487 C 5.008 2.298 4.976 2.109 4.913 1.984 C 4.851 1.858 4.757 1.763 4.632 1.669 C 4.505 1.597 4.367 1.544 4.225 1.511 C 4.068 1.48 3.912 1.48 3.724 1.48 L 1.909 1.48 L 1.909 3.526 L 3.85 3.526 Z M 3.944 7.241 C 4.131 7.241 4.319 7.209 4.476 7.178 C 4.632 7.146 4.789 7.083 4.913 6.989 C 5.041 6.896 5.148 6.778 5.226 6.642 C 5.289 6.485 5.352 6.296 5.352 6.076 C 5.352 5.635 5.226 5.32 4.976 5.1 C 4.726 4.911 4.381 4.817 3.975 4.817 L 1.909 4.817 L 1.909 7.241 L 3.944 7.241 Z M 9.984 7.209 C 10.234 7.461 10.609 7.587 11.11 7.587 C 11.455 7.587 11.768 7.493 12.018 7.335 C 12.268 7.146 12.425 6.957 12.487 6.768 L 14.021 6.768 C 13.77 7.524 13.395 8.059 12.895 8.405 C 12.393 8.72 11.799 8.909 11.079 8.909 C 10.619 8.911 10.162 8.825 9.733 8.657 C 9.347 8.512 9.003 8.275 8.732 7.965 C 8.441 7.675 8.226 7.318 8.106 6.926 C 7.949 6.516 7.886 6.076 7.886 5.572 C 7.886 5.1 7.949 4.659 8.106 4.25 C 8.257 3.855 8.48 3.492 8.763 3.179 C 9.045 2.896 9.389 2.645 9.764 2.487 C 10.182 2.319 10.629 2.233 11.079 2.235 C 11.611 2.235 12.081 2.33 12.487 2.55 C 12.895 2.77 13.207 3.022 13.457 3.4 C 13.708 3.746 13.896 4.155 14.021 4.596 C 14.083 5.037 14.115 5.478 14.083 5.981 L 9.545 5.981 C 9.545 6.485 9.733 6.957 9.984 7.209 Z M 11.955 3.903 C 11.736 3.683 11.392 3.557 10.985 3.557 C 10.746 3.554 10.51 3.608 10.296 3.714 C 10.109 3.809 9.984 3.935 9.859 4.061 C 9.743 4.183 9.667 4.336 9.639 4.502 C 9.608 4.659 9.577 4.785 9.577 4.911 L 12.393 4.911 C 12.331 4.439 12.174 4.124 11.955 3.903 Z M 9.201 0.598 L 12.706 0.598 L 12.706 1.448 L 9.202 1.448 L 9.202 0.598 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"2192\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 12 12\" overflow=\"visible\" id=\"svg-2027912071_1367\" data-f2c-idx=\"2193\"><path d=\"M 6 0 C 2.688 0 0 2.688 0 6 C 0 9.312 2.688 12 6 12 C 9.306 12 12 9.312 12 6 C 12 2.688 9.306 0 6 0 Z M 9.963 2.766 C 10.701 3.666 11.11 4.791 11.121 5.954 C 10.952 5.922 9.26 5.577 7.555 5.792 C 7.516 5.707 7.483 5.616 7.445 5.525 C 7.339 5.275 7.226 5.027 7.106 4.783 C 8.993 4.015 9.853 2.909 9.963 2.766 Z M 6 0.885 C 7.302 0.885 8.492 1.373 9.397 2.174 C 9.306 2.303 8.531 3.338 6.709 4.022 C 5.87 2.48 4.939 1.217 4.796 1.022 C 5.191 0.93 5.595 0.884 6 0.885 Z M 3.82 1.367 C 4.507 2.319 5.141 3.307 5.72 4.328 C 3.325 4.966 1.21 4.952 0.983 4.952 C 1.317 3.379 2.367 2.053 3.82 1.367 Z M 0.872 6.006 L 0.872 5.85 C 1.094 5.856 3.579 5.889 6.137 5.121 C 6.287 5.407 6.423 5.7 6.553 5.993 C 6.488 6.013 6.416 6.032 6.352 6.052 C 3.709 6.904 2.303 9.233 2.186 9.429 C 1.34 8.49 0.872 7.27 0.872 6.006 Z M 6 11.128 C 4.861 11.13 3.754 10.75 2.857 10.048 C 2.948 9.859 3.989 7.855 6.878 6.846 C 6.892 6.84 6.898 6.84 6.911 6.833 C 7.398 8.09 7.764 9.391 8.005 10.718 C 7.371 10.99 6.689 11.13 6 11.128 Z M 8.857 10.249 C 8.805 9.937 8.531 8.44 7.861 6.599 C 9.469 6.345 10.874 6.761 11.05 6.82 C 10.828 8.219 10.034 9.462 8.857 10.249 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"2194\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 11.865 10.725\" overflow=\"visible\" id=\"svg1348218177_486\" data-f2c-idx=\"2195\"><path d=\"M 9.345 0.001 L 6.347 3.427 L 3.755 0.001 L 0 0.001 L 4.486 5.866 L 0.235 10.725 L 2.055 10.725 L 5.336 6.976 L 8.204 10.725 L 11.865 10.725 L 7.189 4.543 L 11.164 0 L 9.344 0 Z M 8.707 9.637 L 2.125 1.032 L 3.207 1.032 L 9.715 9.636 L 8.707 9.636 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"2196\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 20 26.001\" overflow=\"visible\" id=\"svg117005589_864\" data-f2c-idx=\"2197\"><path d=\"M 10 6.192 C 15.523 6.192 20 10.626 20 16.096 C 20 21.567 15.523 26.001 10 26.001 C 4.477 26.001 0 21.567 0 16.096 C 0 10.626 4.477 6.192 10 6.192 Z M 10 8.668 C 5.858 8.668 2.5 11.994 2.5 16.096 C 2.5 20.199 5.858 23.525 10 23.525 C 14.142 23.525 17.5 20.199 17.5 16.096 C 17.5 11.994 14.142 8.668 10 8.668 Z M 10 10.525 L 11.653 13.843 L 15.35 14.376 L 12.675 16.957 L 13.306 20.604 L 10 18.882 L 6.694 20.603 L 7.325 16.957 L 4.65 14.374 L 8.348 13.842 Z M 17.5 0.001 L 17.5 3.716 L 15.796 5.124 C 14.382 4.39 12.839 3.932 11.25 3.776 L 11.25 0.001 Z M 8.75 0 L 8.75 3.776 C 7.162 3.932 5.619 4.389 4.205 5.123 L 2.5 3.716 L 2.5 0.001 Z\" fill=\"var(--token-85c12642-1128-4572-a3b3-1395f0b3a3fb, rgb(181, 254, 3))\" data-f2c-idx=\"2198\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 30 39.002\" overflow=\"visible\" id=\"svg-1345069949_889\" data-f2c-idx=\"2199\"><path d=\"M 15 9.288 C 23.284 9.288 30 15.939 30 24.145 C 30 32.35 23.284 39.002 15 39.002 C 6.716 39.002 0 32.35 0 24.145 C 0 15.939 6.716 9.288 15 9.288 Z M 15 13.002 C 8.787 13.002 3.75 17.991 3.75 24.145 C 3.75 30.299 8.787 35.288 15 35.288 C 21.213 35.288 26.25 30.299 26.25 24.145 C 26.25 17.991 21.213 13.002 15 13.002 Z M 15 15.788 L 17.479 20.765 L 23.025 21.563 L 19.013 25.435 L 19.959 30.907 L 15 28.323 L 10.041 30.905 L 10.988 25.435 L 6.975 21.561 L 12.521 20.763 Z M 26.25 0.002 L 26.25 5.573 L 23.694 7.687 C 21.574 6.585 19.258 5.898 16.875 5.664 L 16.875 0.002 Z M 13.125 0 L 13.125 5.664 C 10.743 5.898 8.428 6.584 6.307 7.685 L 3.75 5.573 L 3.75 0.002 Z\" fill=\"var(--token-85c12642-1128-4572-a3b3-1395f0b3a3fb, rgb(181, 254, 3))\" data-f2c-idx=\"2200\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 31.986 35.842\" overflow=\"visible\" id=\"svg-1317599562_7198\" data-f2c-idx=\"2201\"><g data-f2c-idx=\"2202\"><path d=\"M 26.291 17.063 C 25.615 16.601 24.768 16.463 23.979 16.685 L 23.979 16.568 C 23.851 15.557 23.177 14.697 22.223 14.329 C 21.697 14.101 21.11 14.05 20.553 14.184 C 20.577 13.427 20.281 12.694 19.736 12.164 C 19.15 11.544 18.309 11.227 17.458 11.305 C 17.381 11.305 17.307 11.315 17.236 11.334 L 17.307 11.11 C 17.479 10.575 17.651 10.037 17.825 9.502 C 18.183 8.391 18.537 7.285 18.887 6.185 C 19.273 4.726 18.455 3.22 17.018 2.745 C 15.582 2.271 14.024 2.993 13.461 4.393 C 13.167 5.245 12.893 6.118 12.626 6.963 C 12.506 7.343 12.385 7.723 12.263 8.102 L 9.738 15.955 C 9.705 16.054 9.674 16.157 9.641 16.257 C 9.488 15.671 9.335 15.084 9.185 14.498 C 8.904 13.431 7.997 12.643 6.899 12.511 C 5.82 12.397 4.776 12.929 4.236 13.868 C 3.84 14.567 3.88 15.295 3.973 15.916 C 4.074 16.578 4.138 17.123 4.176 17.63 C 4.21 18.046 4.238 18.489 4.267 19.057 C 4.304 19.652 4.304 20.249 4.267 20.844 C 4.212 21.455 4.201 22.069 4.233 22.681 C 4.331 24.106 4.571 25.518 4.952 26.895 L 5.066 27.309 C 5.308 28.129 5.508 28.96 5.665 29.8 C 5.877 31.096 5.802 32.422 5.446 33.686 C 5.417 33.795 5.386 33.905 5.355 34.012 C 5.26 34.312 5.188 34.618 5.138 34.928 C 5.1 35.128 5.143 35.335 5.259 35.502 C 5.374 35.67 5.553 35.785 5.753 35.82 C 6.164 35.881 6.554 35.623 6.658 35.223 C 6.684 35.137 6.708 35.047 6.729 34.959 L 6.787 34.745 C 7.071 33.834 7.254 32.895 7.333 31.944 C 7.397 30.614 7.243 29.282 6.877 28.002 C 6.803 27.728 6.727 27.457 6.653 27.185 C 6.361 26.222 6.133 25.24 5.971 24.247 C 5.863 23.554 5.796 22.856 5.77 22.155 C 5.768 21.838 5.783 21.52 5.813 21.204 C 5.83 20.966 5.847 20.728 5.854 20.49 C 5.873 19.833 5.835 19.174 5.796 18.536 L 5.77 18.329 C 5.718 17.35 5.61 16.374 5.446 15.407 C 5.342 14.834 5.694 14.276 6.257 14.12 C 6.54 14.039 6.844 14.075 7.101 14.218 C 7.358 14.361 7.547 14.601 7.627 14.884 C 7.782 15.45 7.93 16.031 8.073 16.59 C 8.142 16.871 8.214 17.151 8.285 17.43 L 8.364 17.732 C 8.498 18.244 8.629 18.757 8.767 19.267 C 8.84 19.621 9.152 19.876 9.514 19.878 C 9.862 19.882 10.172 19.659 10.278 19.329 C 10.299 19.276 10.316 19.221 10.335 19.164 L 10.631 18.244 C 10.927 17.323 11.225 16.399 11.518 15.479 C 12.3 13.077 13.068 10.679 13.824 8.283 L 14.086 7.465 C 14.348 6.646 14.609 5.826 14.869 5.004 C 14.978 4.615 15.255 4.295 15.625 4.131 C 15.994 3.98 16.411 4 16.763 4.186 C 17.329 4.495 17.579 5.174 17.348 5.775 C 17.178 6.308 17.007 6.837 16.835 7.367 L 16.413 8.678 L 14.372 15.055 L 14.306 15.262 C 14.232 15.486 14.155 15.719 14.093 15.957 C 14.032 16.16 14.055 16.379 14.159 16.564 C 14.262 16.749 14.437 16.885 14.642 16.94 C 15.04 17.033 15.444 16.811 15.577 16.426 C 15.604 16.359 15.625 16.292 15.647 16.226 L 16.422 13.792 C 16.549 13.284 16.987 12.913 17.51 12.871 C 18.026 12.776 18.543 13.028 18.784 13.492 C 18.992 13.839 19.011 14.22 18.846 14.729 L 18.088 17.08 L 17.849 17.846 C 17.717 18.24 17.91 18.669 18.293 18.834 C 18.684 18.994 19.132 18.81 19.297 18.422 C 19.339 18.333 19.374 18.242 19.402 18.148 L 19.579 17.594 C 19.682 17.27 19.784 16.944 19.892 16.621 C 20.003 16.254 20.262 15.951 20.607 15.783 C 20.946 15.632 21.333 15.632 21.672 15.783 C 22.278 16.04 22.559 16.735 22.34 17.449 C 22.275 17.656 22.209 17.863 22.139 18.067 C 22.07 18.272 22.027 18.412 21.972 18.584 L 21.879 18.876 C 21.758 19.281 21.624 19.688 21.519 20.097 C 21.409 20.478 21.619 20.878 21.996 21.004 C 22.347 21.127 22.736 20.984 22.922 20.663 C 22.972 20.574 23.013 20.479 23.044 20.38 C 23.158 20.026 23.27 19.666 23.383 19.314 L 23.449 19.102 C 23.552 18.752 23.792 18.457 24.115 18.284 C 24.434 18.126 24.802 18.102 25.139 18.217 C 25.466 18.332 25.734 18.573 25.881 18.886 C 26.028 19.199 26.043 19.559 25.921 19.883 L 25.814 20.211 C 25.707 20.547 25.599 20.885 25.487 21.22 C 25.354 21.622 25.227 22.024 25.103 22.429 C 24.828 23.383 24.493 24.319 24.101 25.232 C 23.653 26.296 23.047 27.286 22.304 28.17 C 20.978 29.672 19.829 31.32 18.877 33.082 C 18.56 33.642 18.303 34.234 18.109 34.847 C 18.002 35.23 18.199 35.632 18.567 35.782 C 18.657 35.821 18.753 35.841 18.851 35.842 C 19.135 35.838 19.395 35.681 19.531 35.432 C 19.578 35.344 19.617 35.251 19.648 35.156 C 19.648 35.126 19.67 35.095 19.682 35.066 C 20.302 33.493 21.221 32.106 22.409 30.507 C 22.681 30.141 22.989 29.781 23.285 29.436 C 23.483 29.198 23.678 28.975 23.869 28.737 C 24.75 27.649 25.427 26.357 26.074 24.52 C 26.411 23.569 26.718 22.584 27.029 21.634 C 27.165 21.194 27.303 20.756 27.444 20.316 C 27.834 19.097 27.363 17.767 26.291 17.063 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"2203\"></path><path d=\"M 15.853 0 C 18.359 0 20.466 1.554 21.122 3.767 C 21.585 5.223 21.383 6.81 20.568 8.104 C 20.53 8.169 20.487 8.231 20.439 8.29 C 20.382 8.386 20.288 8.455 20.178 8.479 C 20.069 8.502 19.954 8.48 19.862 8.416 C 19.764 8.354 19.696 8.253 19.675 8.139 C 19.654 8.025 19.682 7.907 19.752 7.814 C 20.033 7.396 20.239 6.934 20.361 6.446 C 20.725 5.08 20.412 3.622 19.518 2.525 C 18.817 1.612 17.774 1.023 16.629 0.892 C 14.455 0.576 12.375 1.89 11.735 3.986 C 11.494 4.728 11.457 5.52 11.627 6.282 C 11.689 6.519 11.55 6.762 11.315 6.831 C 11.203 6.861 11.083 6.842 10.986 6.78 C 10.888 6.717 10.821 6.617 10.802 6.503 C 10.677 6.038 10.632 5.555 10.668 5.075 C 10.791 2.814 12.32 0.872 14.493 0.217 C 14.934 0.081 15.392 0.009 15.853 0 Z M 6.464 3.186 L 8.654 3.186 C 8.785 3.176 8.916 3.213 9.022 3.291 C 9.148 3.379 9.216 3.53 9.198 3.683 C 9.177 3.854 9.049 3.992 8.881 4.026 C 8.78 4.047 8.676 4.055 8.573 4.052 L 4.318 4.052 C 4.049 4.052 4.042 4.052 4.042 4.331 L 4.042 6.843 C 4.04 7.034 3.925 7.205 3.748 7.279 C 3.576 7.333 3.387 7.279 3.271 7.141 C 2.965 6.844 2.662 6.544 2.362 6.241 C 1.646 5.539 0.938 4.833 0.238 4.126 C -0.082 3.807 -0.077 3.645 0.238 3.331 L 3.216 0.362 C 3.34 0.238 3.459 0.109 3.66 0.145 C 3.897 0.201 4.059 0.419 4.042 0.661 L 4.042 2.824 C 4.042 3.186 4.042 3.186 4.397 3.186 Z M 3.159 1.637 L 3.106 1.637 C 2.457 2.287 1.811 2.941 1.157 3.591 C 1.054 3.693 1.059 3.757 1.157 3.857 C 1.791 4.485 2.424 5.118 3.066 5.746 C 3.09 5.77 3.111 5.801 3.166 5.782 Z M 25.546 3.191 L 27.777 3.191 C 27.956 3.191 27.941 3.093 27.941 2.981 L 27.941 0.714 C 27.933 0.624 27.945 0.534 27.975 0.45 C 28.015 0.294 28.143 0.175 28.301 0.145 C 28.46 0.115 28.622 0.179 28.717 0.309 C 29.166 0.747 29.605 1.192 30.048 1.635 C 30.618 2.201 31.187 2.769 31.757 3.338 C 32.053 3.633 32.065 3.802 31.778 4.09 C 30.771 5.097 29.76 6.096 28.753 7.1 C 28.602 7.25 28.44 7.367 28.221 7.269 C 28.024 7.17 27.912 6.957 27.941 6.739 L 27.941 4.331 C 27.941 4.062 27.941 4.055 27.665 4.055 L 23.427 4.055 C 23.333 4.059 23.239 4.056 23.145 4.045 C 22.955 4.014 22.808 3.86 22.785 3.669 C 22.778 3.477 22.896 3.303 23.076 3.236 C 23.18 3.201 23.291 3.186 23.401 3.193 L 25.548 3.193 Z M 28.822 5.846 C 28.901 5.775 28.948 5.737 28.989 5.694 C 29.588 5.099 30.182 4.504 30.788 3.909 C 30.919 3.779 30.934 3.702 30.788 3.567 C 30.211 3.005 29.648 2.434 29.077 1.865 L 28.817 1.604 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"2204\"></path></g></svg>"} />
      </div>
      <div className={styles["div-198"]}>
        <span className={styles["span-119"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button-2"]}>
          <SvgGraphic className={styles["svg-10"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"2208\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"2209\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
