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

export default function About({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-199"]}>
        <div className={styles["div-200"]}>
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
                          <a className={styles["a-2"]} href="./">{slots[0] ?? "Home"}</a>
                        </div>
                      </div>
                      <div className={styles["div-111"]}>
                        <div className={styles["p-99"]}>
                          <a className={styles["a"]} href="./about">{slots[1] ?? "About"}</a>
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
          <div className={styles["div-115"]} />
          <div className={styles["div-116"]}>
            <main className={styles["main-2"]}>
              <section className={styles["hero-2"]}>
                <div className={styles["background-image"]}>
                  <div className={styles["image-8"]}>
                    <div className={styles["div-201"]}>
                      <img className={styles["img-36"]} src={slots[5] ?? "https://framerusercontent.com/images/9wb1GvyC07znyNF47Pk6TXujWq8.webp?width=1500&height=1000"} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles["overlay"]} />
                <div className={styles["text-7"]}>
                  <div className={styles["div-202"]}>
                    <h1 className={styles["h1-2"]}>
                      <div className={styles["span-120"]}>
                        <span className={styles["span-121"]}>{slots[6] ?? "B"}</span>
                        <span className={styles["span-122"]}>{slots[7] ?? "o"}</span>
                        <span className={styles["span-123"]}>{slots[8] ?? "l"}</span>
                        <span className={styles["span-124"]}>{slots[9] ?? "d"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-120"]}>
                        <span className={styles["span-125"]}>{slots[10] ?? "I"}</span>
                        <span className={styles["span-124"]}>{slots[11] ?? "d"}</span>
                        <span className={styles["span-126"]}>{slots[12] ?? "e"}</span>
                        <span className={styles["span-127"]}>{slots[13] ?? "a"}</span>
                        <span className={styles["span-128"]}>{slots[14] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-120"]}>
                        <span className={styles["span-127"]}>{slots[15] ?? "a"}</span>
                        <span className={styles["span-124"]}>{slots[16] ?? "n"}</span>
                        <span className={styles["span-124"]}>{slots[17] ?? "d"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-120"]}>
                        <span className={styles["span-129"]}>{slots[18] ?? "D"}</span>
                        <span className={styles["span-122"]}>{slots[19] ?? "o"}</span>
                        <span className={styles["span-124"]}>{slots[20] ?? "p"}</span>
                        <span className={styles["span-126"]}>{slots[21] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-120"]}>
                        <span className={styles["span-130"]}>{slots[22] ?? "E"}</span>
                        <span className={styles["span-126"]}>{slots[23] ?? "x"}</span>
                        <span className={styles["span-126"]}>{slots[24] ?? "e"}</span>
                        <span className={styles["span-131"]}>{slots[25] ?? "c"}</span>
                        <span className={styles["span-124"]}>{slots[26] ?? "u"}</span>
                        <span className={styles["span-132"]}>{slots[27] ?? "t"}</span>
                        <span className={styles["span-123"]}>{slots[28] ?? "i"}</span>
                        <span className={styles["span-122"]}>{slots[29] ?? "o"}</span>
                        <span className={styles["span-124"]}>{slots[30] ?? "n"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-120"]}>
                        <span className={styles["span-124"]}>{slots[31] ?? "S"}</span>
                        <span className={styles["span-132"]}>{slots[32] ?? "t"}</span>
                        <span className={styles["span-127"]}>{slots[33] ?? "a"}</span>
                        <span className={styles["span-133"]}>{slots[34] ?? "r"}</span>
                        <span className={styles["span-132"]}>{slots[35] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-120"]}>
                        <span className={styles["span-134"]}>{slots[36] ?? "H"}</span>
                        <span className={styles["span-126"]}>{slots[37] ?? "e"}</span>
                        <span className={styles["span-133"]}>{slots[38] ?? "r"}</span>
                        <span className={styles["span-126"]}>{slots[39] ?? "e"}</span>
                      </div>
                    </h1>
                  </div>
                  <div className={styles["div-203"]}>
                    <div className={styles["p-134"]}>
                      <div className={styles["span-135"]}>
                        <span className={styles["span-136"]}>{slots[40] ?? "W"}</span>
                        <span className={styles["span-137"]}>{slots[41] ?? "e"}</span>
                        <span className={styles["span-138"]}>{slots[42] ?? "’"}</span>
                        <span className={styles["span-139"]}>{slots[43] ?? "r"}</span>
                        <span className={styles["span-137"]}>{slots[44] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-137"]}>{slots[45] ?? "a"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-137"]}>{slots[46] ?? "c"}</span>
                        <span className={styles["span-139"]}>{slots[47] ?? "r"}</span>
                        <span className={styles["span-137"]}>{slots[48] ?? "e"}</span>
                        <span className={styles["span-137"]}>{slots[49] ?? "a"}</span>
                        <span className={styles["span-139"]}>{slots[50] ?? "t"}</span>
                        <span className={styles["span-140"]}>{slots[51] ?? "i"}</span>
                        <span className={styles["span-137"]}>{slots[52] ?? "v"}</span>
                        <span className={styles["span-137"]}>{slots[53] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-141"]}>{slots[54] ?? "s"}</span>
                        <span className={styles["span-139"]}>{slots[55] ?? "t"}</span>
                        <span className={styles["span-137"]}>{slots[56] ?? "u"}</span>
                        <span className={styles["span-142"]}>{slots[57] ?? "d"}</span>
                        <span className={styles["span-140"]}>{slots[58] ?? "i"}</span>
                        <span className={styles["span-137"]}>{slots[59] ?? "o"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-139"]}>{slots[60] ?? "f"}</span>
                        <span className={styles["span-137"]}>{slots[61] ?? "o"}</span>
                        <span className={styles["span-137"]}>{slots[62] ?? "c"}</span>
                        <span className={styles["span-137"]}>{slots[63] ?? "u"}</span>
                        <span className={styles["span-141"]}>{slots[64] ?? "s"}</span>
                        <span className={styles["span-137"]}>{slots[65] ?? "e"}</span>
                        <span className={styles["span-142"]}>{slots[66] ?? "d"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-137"]}>{slots[67] ?? "o"}</span>
                        <span className={styles["span-137"]}>{slots[68] ?? "n"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-137"]}>{slots[69] ?? "c"}</span>
                        <span className={styles["span-139"]}>{slots[70] ?? "r"}</span>
                        <span className={styles["span-137"]}>{slots[71] ?? "a"}</span>
                        <span className={styles["span-139"]}>{slots[72] ?? "f"}</span>
                        <span className={styles["span-139"]}>{slots[73] ?? "t"}</span>
                        <span className={styles["span-140"]}>{slots[74] ?? "i"}</span>
                        <span className={styles["span-137"]}>{slots[75] ?? "n"}</span>
                        <span className={styles["span-142"]}>{slots[76] ?? "g"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-142"]}>{slots[77] ?? "b"}</span>
                        <span className={styles["span-137"]}>{slots[78] ?? "o"}</span>
                        <span className={styles["span-140"]}>{slots[79] ?? "l"}</span>
                        <span className={styles["span-142"]}>{slots[80] ?? "d"}</span>
                        <span className={styles["span-138"]}>{slots[81] ?? ","}</span>
                      </div>
                      {" "}
                      <div className={styles["span-143"]}>
                        <span className={styles["span-144"]}>{slots[82] ?? "h"}</span>
                        <span className={styles["span-145"]}>{slots[83] ?? "i"}</span>
                        <span className={styles["span-146"]}>{slots[84] ?? "g"}</span>
                        <span className={styles["span-144"]}>{slots[85] ?? "h"}</span>
                        <span className={styles["span-147"]}>{slots[86] ?? "-"}</span>
                        <span className={styles["span-146"]}>{slots[87] ?? "p"}</span>
                        <span className={styles["span-144"]}>{slots[88] ?? "e"}</span>
                        <span className={styles["span-148"]}>{slots[89] ?? "r"}</span>
                        <span className={styles["span-148"]}>{slots[90] ?? "f"}</span>
                        <span className={styles["span-144"]}>{slots[91] ?? "o"}</span>
                        <span className={styles["span-148"]}>{slots[92] ?? "r"}</span>
                        <span className={styles["span-149"]}>{slots[93] ?? "m"}</span>
                        <span className={styles["span-145"]}>{slots[94] ?? "i"}</span>
                        <span className={styles["span-144"]}>{slots[95] ?? "n"}</span>
                        <span className={styles["span-146"]}>{slots[96] ?? "g"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-142"]}>{slots[97] ?? "b"}</span>
                        <span className={styles["span-139"]}>{slots[98] ?? "r"}</span>
                        <span className={styles["span-137"]}>{slots[99] ?? "a"}</span>
                        <span className={styles["span-137"]}>{slots[100] ?? "n"}</span>
                        <span className={styles["span-142"]}>{slots[101] ?? "d"}</span>
                        <span className={styles["span-141"]}>{slots[102] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-139"]}>{slots[103] ?? "t"}</span>
                        <span className={styles["span-137"]}>{slots[104] ?? "h"}</span>
                        <span className={styles["span-137"]}>{slots[105] ?? "a"}</span>
                        <span className={styles["span-139"]}>{slots[106] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-140"]}>{slots[107] ?? "l"}</span>
                        <span className={styles["span-137"]}>{slots[108] ?? "e"}</span>
                        <span className={styles["span-137"]}>{slots[109] ?? "a"}</span>
                        <span className={styles["span-142"]}>{slots[110] ?? "d"}</span>
                        <span className={styles["span-138"]}>{slots[111] ?? ","}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-137"]}>{slots[112] ?? "n"}</span>
                        <span className={styles["span-137"]}>{slots[113] ?? "o"}</span>
                        <span className={styles["span-139"]}>{slots[114] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-135"]}>
                        <span className={styles["span-139"]}>{slots[115] ?? "f"}</span>
                        <span className={styles["span-137"]}>{slots[116] ?? "o"}</span>
                        <span className={styles["span-140"]}>{slots[117] ?? "l"}</span>
                        <span className={styles["span-140"]}>{slots[118] ?? "l"}</span>
                        <span className={styles["span-137"]}>{slots[119] ?? "o"}</span>
                        <span className={styles["span-150"]}>{slots[120] ?? "w"}</span>
                        <span className={styles["span-138"]}>{slots[121] ?? "."}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["about-4"]}>
                <div className={styles["container-12"]}>
                  <div className={styles["text-8"]}>
                    <div className={styles["why-us-2"]}>
                      <div className={styles["div-204"]}>
                        <SectionHeading2 slots={["Why us"]} />
                      </div>
                      <div className={styles["div-205"]}>
                        <p className={styles["p-135"]}>{slots[122] ?? "Simple. We make brands unforgettable in a world that forgets fast."}</p>
                      </div>
                    </div>
                    <div className={styles["div-206"]}>
                      <p className={styles["p-136"]}>{slots[123] ?? "We develop forward-thinking brands that feels fresh, intentional, and built to perform. Every detail matters, every decision is deliberate and every outcome is designed to push brands further than they’ve been before."}</p>
                    </div>
                  </div>
                  <div className={styles["stats-3"]}>
                    <div className={styles["1-5"]}>
                      <div className={styles["number"]}>
                        <div className={styles["div-207"]}>
                          <p className={styles["p-137"]}>{slots[124] ?? "$10M+"}</p>
                        </div>
                        <div className={styles["div-208"]}>
                          <p className={styles["p-138"]}>{slots[125] ?? "Client Revenue Influenced"}</p>
                        </div>
                      </div>
                      <div className={styles["div-209"]}>
                        <p className={styles["p-139"]}>{slots[126] ?? "From conversion-focused websites to high-performing campaigns, we design with business goals in mind. The result is creative that directly contributes to growth and revenue."}</p>
                      </div>
                    </div>
                    <div className={styles["2-4"]}>
                      <div className={styles["number"]}>
                        <div className={styles["div-210"]}>
                          <p className={styles["p-140"]}>{slots[127] ?? "120+"}</p>
                        </div>
                        <div className={styles["div-208"]}>
                          <p className={styles["p-138"]}>{slots[128] ?? "Projects Delivered Successfully"}</p>
                        </div>
                      </div>
                      <div className={styles["div-211"]}>
                        <p className={styles["p-141"]}>{slots[129] ?? "Every project we take on is executed with precision and purpose. We move fast without compromising quality, ensuring every detail aligns with the bigger picture."}</p>
                      </div>
                    </div>
                    <div className={styles["3-3"]}>
                      <div className={styles["number-2"]}>
                        <div className={styles["div-212"]}>
                          <p className={styles["p-142"]}>{slots[130] ?? "80%"}</p>
                        </div>
                        <div className={styles["div-208"]}>
                          <p className={styles["p-138"]}>{slots[131] ?? "Long Term Partnerships"}</p>
                        </div>
                      </div>
                      <div className={styles["div-209"]}>
                        <p className={styles["p-139"]}>{slots[132] ?? "Most of our clients don’t just work with us once, they stay. We build relationships that evolve as brands grow, offering ongoing creative support across touchpoints."}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className={styles["div-213"]}>
                <Clients slots={["Our Partners","Trusted by companies that built, launched and scaled to success.","https://framerusercontent.com/images/Uv9bcbDZ3xz6Og8491hJ5uR6tDw.png?scale-down-to=512&width=848&height=200","https://framerusercontent.com/images/TFE51e3dhytGIVH0SuZhhvqm2uI.svg?scale-down-to=512&width=799&height=200","https://framerusercontent.com/images/nvxdrCsR7f61LC8pD5TbNh3bA.svg?scale-down-to=512&width=895&height=200","https://framerusercontent.com/images/smXZnqGAYmLOxmhBudnl5yZa5Co.svg?scale-down-to=512&width=862&height=200","https://framerusercontent.com/images/36rfQJi5uicI66Tx0iceKGkc.svg?scale-down-to=512&width=843&height=200","https://framerusercontent.com/images/VZhQGIse62hFdcOhVwwDgrPfKk.svg?scale-down-to=512&width=855&height=200","https://framerusercontent.com/images/GArkQ0ZzD81ECme5SLSkDAA6FU.svg?scale-down-to=512&width=716&height=200","https://framerusercontent.com/images/GWyzvFoNBS8gJQvq2XCehLLH0.svg?scale-down-to=512&width=740&height=200","https://framerusercontent.com/images/LxGpHSuqBQx7GiQyshhBWCmBc.svg?scale-down-to=512&width=635&height=200","https://framerusercontent.com/images/ePwoORfSrxxsm92KI2i3aCwtJlY.svg?scale-down-to=512&width=833&height=200","https://framerusercontent.com/images/NQG80ZU5yJoBV3S9AcZzCoYj25U.svg?scale-down-to=512&width=792&height=200","https://framerusercontent.com/images/2kYxr4vnYpNWKSgbF3gTPu5K4.svg?scale-down-to=512&width=673&height=200","https://framerusercontent.com/images/10P9xWvXNlGv77UT0vdgXJqZSM.svg?scale-down-to=512&width=699&height=200","https://framerusercontent.com/images/6S9fyHXQOeQGTuvnnfsZkoZ5jO0.svg?scale-down-to=512&width=857&height=200","https://framerusercontent.com/images/xfFFHZqg9SibbtdsJOogQ2WCCg.svg?scale-down-to=512&width=720&height=200"]} />
              </div>
              <section className={styles["team-2"]}>
                <div className={styles["div-214"]}>
                  <BGColourChange2 slots={[]} />
                </div>
                <div className={styles["container-13"]}>
                  <div className={styles["sticky-2"]}>
                    <div className={styles["text-9"]}>
                      <div className={styles["div-215"]}>
                        <h3 className={styles["h3-2"]}>{slots[133] ?? "Exceptional results don’t happen by chance."}</h3>
                      </div>
                      <div className={styles["div-216"]}>
                        <p className={styles["p-143"]}>{slots[134] ?? "They are crafted with intention, shaped by process, delivered by a dedicated team."}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["team-images-2"]}>
                    <div className={styles["grid"]}>
                      <div className={styles["div-217"]}>
                        <TeamImage2 slots={["https://framerusercontent.com/images/0Fc0Qr1VkVYdq93oVOFZUou3t4.webp?scale-down-to=512&width=1024&height=1024","Amara J.","Creative Director"]} />
                      </div>
                      <div className={styles["div-217"]}>
                        <TeamImage2 slots={["https://framerusercontent.com/images/T2kuSkzaR1XprcRdsexyAn69dic.webp?width=574&height=1024","Kenji S.","Lead Developer"]} />
                      </div>
                      <div className={styles["div-217"]}>
                        <TeamImage2 slots={["https://framerusercontent.com/images/s66Qf0KPdFofJeVLpYXOgffb92o.webp?scale-down-to=512&width=1200&height=1200","Sofia M.","Project Manager"]} />
                      </div>
                      <div className={styles["div-217"]}>
                        <TeamImage2 slots={["https://framerusercontent.com/images/wSNHPjHAA2inuklvnasZX8CVx9I.webp?scale-down-to=1024&width=799&height=1200","Lina G.","Brand Strategist"]} />
                      </div>
                      <div className={styles["div-217"]}>
                        <TeamImage2 slots={["https://framerusercontent.com/images/gI8Mp658oH1taJmoI5eoXkLNU8.webp?scale-down-to=512&width=1024&height=1024","David O.","UI/UX Designer"]} />
                      </div>
                      <div className={styles["div-217"]}>
                        <TeamImage2 slots={["https://framerusercontent.com/images/FpbwQQwyXbs76IU6o4pdYQFQM.webp?scale-down-to=512&width=1024&height=1024","Priya N.","Marketing Manager"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["awards-3"]}>
                <div className={styles["container-14"]}>
                  <div className={styles["content-16"]}>
                    <div className={styles["div-218"]}>
                      <h3 className={styles["h3-3"]}>{slots[135] ?? "Proof that bold ideas and hard work always get noticed."}</h3>
                    </div>
                    <div className={styles["div-219"]}>
                      <p className={styles["p-144"]}>{slots[136] ?? "Let our winnings do the talking."}</p>
                    </div>
                  </div>
                  <div className={styles["awards-4"]}>
                    <div className={styles["div-220"]}>
                      <AwardsCard2 slots={["https://framerusercontent.com/images/iXoT9EFpx87ZuyZrcC6G3Aalw.png?width=800&height=1194","Awwwards","Honorable Mention","x10","May 4, 2026","Framer","Best Studio Template","x8","Feb 18, 2026","Behance","Special Kudos","x7","Jan 5, 2026","CSS Design Awards","Site of the Day","x7","Dec 15, 2025","FWA","Website of the Month","x5","Oct 17, 2025","Red Dot Award","Best of the Best","x4","Aug 18, 2025","The Webby Awards","Best Visual Design","x3","Nov 23, 2024"]} />
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div className={styles["div-154"]} />
          <div className={styles["div-221"]} />
          <section className={styles["faq"]}>
            <div className={styles["container-10"]}>
              <div className={styles["content-11"]}>
                <div className={styles["text-6"]}>
                  <div className={styles["div-156"]}>
                    <div className={styles["div-222"]}>
                      <SectionHeading slots={["FAQ"]} />
                    </div>
                    <div className={styles["div-158"]}>
                      <div className={styles["p-112"]}>
                        <div className={styles["span-91"]}>
                          <span className={styles["span-92"]}>{slots[137] ?? "C"}</span>
                          <span className={styles["span-93"]}>{slots[138] ?? "u"}</span>
                          <span className={styles["span-94"]}>{slots[139] ?? "r"}</span>
                          <span className={styles["span-95"]}>{slots[140] ?? "i"}</span>
                          <span className={styles["span-96"]}>{slots[141] ?? "o"}</span>
                          <span className={styles["span-93"]}>{slots[142] ?? "u"}</span>
                          <span className={styles["span-97"]}>{slots[143] ?? "s"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-98"]}>{slots[144] ?? "a"}</span>
                          <span className={styles["span-99"]}>{slots[145] ?? "b"}</span>
                          <span className={styles["span-96"]}>{slots[146] ?? "o"}</span>
                          <span className={styles["span-93"]}>{slots[147] ?? "u"}</span>
                          <span className={styles["span-100"]}>{slots[148] ?? "t"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-101"]}>{slots[149] ?? "h"}</span>
                          <span className={styles["span-96"]}>{slots[150] ?? "o"}</span>
                          <span className={styles["span-102"]}>{slots[151] ?? "w"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-102"]}>{slots[152] ?? "w"}</span>
                          <span className={styles["span-103"]}>{slots[153] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-102"]}>{slots[154] ?? "w"}</span>
                          <span className={styles["span-96"]}>{slots[155] ?? "o"}</span>
                          <span className={styles["span-94"]}>{slots[156] ?? "r"}</span>
                          <span className={styles["span-103"]}>{slots[157] ?? "k"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-96"]}>{slots[158] ?? "o"}</span>
                          <span className={styles["span-93"]}>{slots[159] ?? "u"}</span>
                          <span className={styles["span-94"]}>{slots[160] ?? "r"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-104"]}>{slots[161] ?? "m"}</span>
                          <span className={styles["span-98"]}>{slots[162] ?? "a"}</span>
                          <span className={styles["span-93"]}>{slots[163] ?? "g"}</span>
                          <span className={styles["span-95"]}>{slots[164] ?? "i"}</span>
                          <span className={styles["span-105"]}>{slots[165] ?? "c"}</span>
                          <span className={styles["span-106"]}>{slots[166] ?? "?"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-159"]}>
                    <div className={styles["p-113"]}>
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[167] ?? "F"}</span>
                        <span className={styles["span-109"]}>{slots[168] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[169] ?? "o"}</span>
                        <span className={styles["span-110"]}>{slots[170] ?? "m"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[171] ?? "p"}</span>
                        <span className={styles["span-109"]}>{slots[172] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[173] ?? "o"}</span>
                        <span className={styles["span-108"]}>{slots[174] ?? "c"}</span>
                        <span className={styles["span-108"]}>{slots[175] ?? "e"}</span>
                        <span className={styles["span-112"]}>{slots[176] ?? "s"}</span>
                        <span className={styles["span-112"]}>{slots[177] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[178] ?? "t"}</span>
                        <span className={styles["span-108"]}>{slots[179] ?? "o"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[180] ?? "p"}</span>
                        <span className={styles["span-109"]}>{slots[181] ?? "r"}</span>
                        <span className={styles["span-113"]}>{slots[182] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[183] ?? "c"}</span>
                        <span className={styles["span-113"]}>{slots[184] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[185] ?? "n"}</span>
                        <span className={styles["span-111"]}>{slots[186] ?? "g"}</span>
                        <span className={styles["span-114"]}>{slots[187] ?? ","}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[188] ?? "d"}</span>
                        <span className={styles["span-108"]}>{slots[189] ?? "e"}</span>
                        <span className={styles["span-112"]}>{slots[190] ?? "s"}</span>
                        <span className={styles["span-113"]}>{slots[191] ?? "i"}</span>
                        <span className={styles["span-111"]}>{slots[192] ?? "g"}</span>
                        <span className={styles["span-108"]}>{slots[193] ?? "n"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[194] ?? "t"}</span>
                        <span className={styles["span-108"]}>{slots[195] ?? "o"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[196] ?? "d"}</span>
                        <span className={styles["span-108"]}>{slots[197] ?? "e"}</span>
                        <span className={styles["span-113"]}>{slots[198] ?? "l"}</span>
                        <span className={styles["span-113"]}>{slots[199] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[200] ?? "v"}</span>
                        <span className={styles["span-108"]}>{slots[201] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[202] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[203] ?? "y"}</span>
                        <span className={styles["span-114"]}>{slots[204] ?? ","}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-115"]}>{slots[205] ?? "w"}</span>
                        <span className={styles["span-108"]}>{slots[206] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[207] ?? "b"}</span>
                        <span className={styles["span-108"]}>{slots[208] ?? "e"}</span>
                        <span className={styles["span-113"]}>{slots[209] ?? "l"}</span>
                        <span className={styles["span-113"]}>{slots[210] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[211] ?? "e"}</span>
                        <span className={styles["span-108"]}>{slots[212] ?? "v"}</span>
                        <span className={styles["span-108"]}>{slots[213] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[214] ?? "e"}</span>
                        <span className={styles["span-108"]}>{slots[215] ?? "v"}</span>
                        <span className={styles["span-108"]}>{slots[216] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[217] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[218] ?? "y"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[219] ?? "b"}</span>
                        <span className={styles["span-109"]}>{slots[220] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[221] ?? "a"}</span>
                        <span className={styles["span-108"]}>{slots[222] ?? "n"}</span>
                        <span className={styles["span-111"]}>{slots[223] ?? "d"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[224] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[225] ?? "a"}</span>
                        <span className={styles["span-112"]}>{slots[226] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[227] ?? "q"}</span>
                        <span className={styles["span-108"]}>{slots[228] ?? "u"}</span>
                        <span className={styles["span-108"]}>{slots[229] ?? "e"}</span>
                        <span className={styles["span-112"]}>{slots[230] ?? "s"}</span>
                        <span className={styles["span-109"]}>{slots[231] ?? "t"}</span>
                        <span className={styles["span-113"]}>{slots[232] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[233] ?? "o"}</span>
                        <span className={styles["span-108"]}>{slots[234] ?? "n"}</span>
                        <span className={styles["span-112"]}>{slots[235] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[236] ?? "b"}</span>
                        <span className={styles["span-108"]}>{slots[237] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[238] ?? "f"}</span>
                        <span className={styles["span-108"]}>{slots[239] ?? "o"}</span>
                        <span className={styles["span-109"]}>{slots[240] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[241] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[242] ?? "t"}</span>
                        <span className={styles["span-108"]}>{slots[243] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[244] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[245] ?? "g"}</span>
                        <span className={styles["span-113"]}>{slots[246] ?? "l"}</span>
                        <span className={styles["span-108"]}>{slots[247] ?? "o"}</span>
                        <span className={styles["span-115"]}>{slots[248] ?? "w"}</span>
                        <span className={styles["span-116"]}>{slots[249] ?? "-"}</span>
                        <span className={styles["span-108"]}>{slots[250] ?? "u"}</span>
                        <span className={styles["span-111"]}>{slots[251] ?? "p"}</span>
                        <span className={styles["span-114"]}>{slots[252] ?? "."}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-117"]}>{slots[253] ?? "W"}</span>
                        <span className={styles["span-108"]}>{slots[254] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[255] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[256] ?? "a"}</span>
                        <span className={styles["span-108"]}>{slots[257] ?? "v"}</span>
                        <span className={styles["span-108"]}>{slots[258] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[259] ?? "a"}</span>
                        <span className={styles["span-108"]}>{slots[260] ?? "n"}</span>
                        <span className={styles["span-112"]}>{slots[261] ?? "s"}</span>
                        <span className={styles["span-115"]}>{slots[262] ?? "w"}</span>
                        <span className={styles["span-108"]}>{slots[263] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[264] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[265] ?? "e"}</span>
                        <span className={styles["span-111"]}>{slots[266] ?? "d"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[267] ?? "t"}</span>
                        <span className={styles["span-108"]}>{slots[268] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[269] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-110"]}>{slots[270] ?? "m"}</span>
                        <span className={styles["span-108"]}>{slots[271] ?? "o"}</span>
                        <span className={styles["span-112"]}>{slots[272] ?? "s"}</span>
                        <span className={styles["span-109"]}>{slots[273] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[274] ?? "c"}</span>
                        <span className={styles["span-108"]}>{slots[275] ?? "o"}</span>
                        <span className={styles["span-110"]}>{slots[276] ?? "m"}</span>
                        <span className={styles["span-110"]}>{slots[277] ?? "m"}</span>
                        <span className={styles["span-108"]}>{slots[278] ?? "o"}</span>
                        <span className={styles["span-108"]}>{slots[279] ?? "n"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[280] ?? "o"}</span>
                        <span className={styles["span-108"]}>{slots[281] ?? "n"}</span>
                        <span className={styles["span-108"]}>{slots[282] ?? "e"}</span>
                        <span className={styles["span-112"]}>{slots[283] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[284] ?? "r"}</span>
                        <span className={styles["span-113"]}>{slots[285] ?? "i"}</span>
                        <span className={styles["span-111"]}>{slots[286] ?? "g"}</span>
                        <span className={styles["span-108"]}>{slots[287] ?? "h"}</span>
                        <span className={styles["span-109"]}>{slots[288] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[289] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[290] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[291] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[292] ?? "e"}</span>
                        <span className={styles["span-114"]}>{slots[293] ?? "."}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["border-2"]} />
                <div className={styles["q-a"]}>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-161"]}>
                          <p className={styles["p-114"]}>{slots[294] ?? "What makes us different?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[295] ?? "We don’t just design pretty visuals, we build brands that move the needle. Every pixel, every strategy, every campaign is rooted in results. Our clients trust us because we combine creativity with measurable impact."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-164"]}>
                          <p className={styles["p-116"]}>{slots[296] ?? "How long does a project take?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[297] ?? "Timelines depend on the scope, some branding projects can be done in weeks, while larger websites or campaigns may take months. What’s consistent is our commitment to meeting deadlines without sacrificing quality."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-165"]}>
                          <p className={styles["p-117"]}>{slots[298] ?? "How much does the service cost?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[299] ?? "No cookie-cutter pricing here. Every project is unique, and costs are tailored to scope and complexity. We’re upfront from the start, so there are no surprises, just value-packed work that pays off."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-166"]}>
                          <p className={styles["p-118"]}>{slots[300] ?? "What industries do you work with?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[301] ?? "We’ve collaborated with startups, global names, and organizations of every kind. While we’re not tied to one industry, we’re drawn to teams chasing bold, future-focused ideas."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-167"]}>
                          <p className={styles["p-119"]}>{slots[302] ?? "Do you only work with big brands?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[303] ?? "Not at all. We work with ambitious founders, growing startups, and established global brands alike. Whether you’re scaling fast or just starting out, our approach adapts to your goals."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-168"]}>
                          <p className={styles["p-120"]}>{slots[304] ?? "Do you offer ongoing support?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[305] ?? "Absolutely. Whether it’s website updates, new campaigns, or long-term brand growth, we stick around. Many of our clients become long-term partners because we grow as they grow."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["div-169"]}>
              <div className={styles["div-170"]}>
                <div className={styles["div-223"]} />
              </div>
            </div>
          </section>
          <footer className={styles["footer-3"]}>
            <div className={styles["ticker"]}>
              <div className={styles["div-172"]}>
                <section className={styles["section-3"]}>
                  <ul className={styles["ul-4"] + " " + styles["loop-3"]}>
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
                      <div className={styles["div-109"]}>
                        <Logo2 slots={["https://framerusercontent.com/images/QyTRb8W57mUQdYJUZBZC8Q7F0Dc.svg?scale-down-to=512&width=1478&height=284"]} />
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
                          <a className={styles["a-5"]} href="https://www.framer.com/?via=essadonzo">{slots[306] ?? "[ Made in Framer ]"}</a>
                        </div>
                      </div>
                      <div className={styles["content-13"]}>
                        <div className={styles["year"]}>
                          <div className={styles["copyright-year-auto"]}>
                            <div className={styles["div-180"]}>
                              <p className={styles["p-122"]}>{slots[307] ?? "© 2026"}</p>
                              <div className={styles["p-123"]} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-181"]}>
                          <Border3 slots={[]} />
                        </div>
                        <div className={styles["div-182"]}>
                          <p className={styles["p-124"]}>{slots[308] ?? "All Rights Reserved"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["time-text"]}>
                  <div className={styles["time-4"]}>
                    <div className={styles["div-183"]}>
                      <p className={styles["p-125"]}>{slots[309] ?? "New York"}</p>
                    </div>
                    <div className={styles["div-184"]}>
                      <div className={styles["div-185"]}>
                        <span className={styles["span-118"]}>{slots[310] ?? "04:54 AM"}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-186"]}>
                    <p className={styles["p-126"]}>{slots[311] ?? "Creating Dope stuff for brands everywhere."}</p>
                  </div>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["footer-links"]}>
                    <div className={styles["content-14"]}>
                      <div className={styles["links-2"]}>
                        <div className={styles["div-187"]}>
                          <p className={styles["p-127"]}>{slots[312] ?? "Company"}</p>
                        </div>
                        <div className={styles["menu-2"]}>
                          <div className={styles["div-110"]}>
                            <div className={styles["p-98"]}>
                              <a className={styles["a-3"]} href="./">{slots[313] ?? "Home"}</a>
                            </div>
                          </div>
                          <div className={styles["div-111"]}>
                            <div className={styles["p-99"]}>
                              <a className={styles["a-6"]} href="./about">{slots[314] ?? "About"}</a>
                            </div>
                          </div>
                          <div className={styles["div-112"]}>
                            <div className={styles["p-100"]}>
                              <a className={styles["a-3"]} href="./portfolio">{slots[315] ?? "Portfolio"}</a>
                            </div>
                          </div>
                          <div className={styles["div-113"]}>
                            <div className={styles["p-101"]}>
                              <a className={styles["a-3"]} href="./blog">{slots[316] ?? "Blog"}</a>
                            </div>
                          </div>
                          <div className={styles["div-114"]}>
                            <div className={styles["p-102"]}>
                              <a className={styles["a-3"]} href="./contact">{slots[317] ?? "Contact"}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["contact"]}>
                        <div className={styles["div-187"]}>
                          <p className={styles["p-127"]}>{slots[318] ?? "Contact"}</p>
                        </div>
                        <div className={styles["address-tel-email"]}>
                          <div className={styles["div-188"]}>
                            <p className={styles["p-128"]}>{slots[319] ?? "1200 Creative Street Suite 500, New York 94103, NY"}</p>
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
                        <p className={styles["p-129"]}>{slots[320] ?? "Psst... interested in dope updates?"}</p>
                      </div>
                      <div className={styles["div-190"]}>
                        <Newsletter slots={[]} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-191"]}>
                    <Border4 slots={[]} />
                  </div>
                  <div className={styles["awards-legal"]}>
                    <div className={styles["awards-2"]}>
                      <div className={styles["icon-5"]}>
                        <div className={styles["div-192"]}>
                          <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"1040\"><use href=\"#svg117005589_864\" data-f2c-idx=\"1041\"></use></svg>"} />
                        </div>
                      </div>
                      <div className={styles["div-193"]}>
                        <p className={styles["p-130"]}>{slots[321] ?? "Multiple industry awards for branding, design and digital innovation."}</p>
                      </div>
                    </div>
                    <div className={styles["legal"]}>
                      <div className={styles["div-194"]}>
                        <div className={styles["p-131"]}>
                          <a className={styles["a-7"]} href="./privacy-policy">{slots[322] ?? "Privacy Policy"}</a>
                        </div>
                      </div>
                      <div className={styles["div-182"]}>
                        <div className={styles["p-132"]}>
                          <a className={styles["a-7"]} href="./term-of-service">{slots[323] ?? "Terms of Service"}</a>
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
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 14.096 8.909\" overflow=\"visible\" id=\"svg-246205585_2363\" data-f2c-idx=\"1086\"><path d=\"M 4.1 0 C 4.507 0 4.883 0.032 5.226 0.126 C 5.571 0.189 5.853 0.315 6.103 0.472 C 6.353 0.629 6.541 0.85 6.666 1.133 C 6.791 1.417 6.854 1.763 6.854 2.141 C 6.854 2.582 6.76 2.959 6.541 3.242 C 6.353 3.526 6.04 3.777 5.665 3.966 C 6.197 4.124 6.604 4.407 6.854 4.785 C 7.104 5.163 7.261 5.635 7.261 6.17 C 7.261 6.611 7.167 6.989 7.01 7.304 C 6.854 7.619 6.604 7.902 6.322 8.091 C 6.015 8.293 5.677 8.442 5.321 8.531 C 4.945 8.626 4.57 8.689 4.194 8.689 L 0 8.689 L 0 0 Z M 3.849 3.525 C 4.194 3.525 4.476 3.431 4.694 3.274 C 4.913 3.117 5.008 2.833 5.008 2.487 C 5.008 2.298 4.976 2.109 4.913 1.984 C 4.851 1.858 4.757 1.763 4.632 1.669 C 4.505 1.597 4.367 1.544 4.225 1.511 C 4.068 1.48 3.912 1.48 3.724 1.48 L 1.909 1.48 L 1.909 3.526 L 3.85 3.526 Z M 3.944 7.241 C 4.131 7.241 4.319 7.209 4.476 7.178 C 4.632 7.146 4.789 7.083 4.913 6.989 C 5.041 6.896 5.148 6.778 5.226 6.642 C 5.289 6.485 5.352 6.296 5.352 6.076 C 5.352 5.635 5.226 5.32 4.976 5.1 C 4.726 4.911 4.381 4.817 3.975 4.817 L 1.909 4.817 L 1.909 7.241 L 3.944 7.241 Z M 9.984 7.209 C 10.234 7.461 10.609 7.587 11.11 7.587 C 11.455 7.587 11.768 7.493 12.018 7.335 C 12.268 7.146 12.425 6.957 12.487 6.768 L 14.021 6.768 C 13.77 7.524 13.395 8.059 12.895 8.405 C 12.393 8.72 11.799 8.909 11.079 8.909 C 10.619 8.911 10.162 8.825 9.733 8.657 C 9.347 8.512 9.003 8.275 8.732 7.965 C 8.441 7.675 8.226 7.318 8.106 6.926 C 7.949 6.516 7.886 6.076 7.886 5.572 C 7.886 5.1 7.949 4.659 8.106 4.25 C 8.257 3.855 8.48 3.492 8.763 3.179 C 9.045 2.896 9.389 2.645 9.764 2.487 C 10.182 2.319 10.629 2.233 11.079 2.235 C 11.611 2.235 12.081 2.33 12.487 2.55 C 12.895 2.77 13.207 3.022 13.457 3.4 C 13.708 3.746 13.896 4.155 14.021 4.596 C 14.083 5.037 14.115 5.478 14.083 5.981 L 9.545 5.981 C 9.545 6.485 9.733 6.957 9.984 7.209 Z M 11.955 3.903 C 11.736 3.683 11.392 3.557 10.985 3.557 C 10.746 3.554 10.51 3.608 10.296 3.714 C 10.109 3.809 9.984 3.935 9.859 4.061 C 9.743 4.183 9.667 4.336 9.639 4.502 C 9.608 4.659 9.577 4.785 9.577 4.911 L 12.393 4.911 C 12.331 4.439 12.174 4.124 11.955 3.903 Z M 9.201 0.598 L 12.706 0.598 L 12.706 1.448 L 9.202 1.448 L 9.202 0.598 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"1087\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 12 12\" overflow=\"visible\" id=\"svg-2027912071_1367\" data-f2c-idx=\"1088\"><path d=\"M 6 0 C 2.688 0 0 2.688 0 6 C 0 9.312 2.688 12 6 12 C 9.306 12 12 9.312 12 6 C 12 2.688 9.306 0 6 0 Z M 9.963 2.766 C 10.701 3.666 11.11 4.791 11.121 5.954 C 10.952 5.922 9.26 5.577 7.555 5.792 C 7.516 5.707 7.483 5.616 7.445 5.525 C 7.339 5.275 7.226 5.027 7.106 4.783 C 8.993 4.015 9.853 2.909 9.963 2.766 Z M 6 0.885 C 7.302 0.885 8.492 1.373 9.397 2.174 C 9.306 2.303 8.531 3.338 6.709 4.022 C 5.87 2.48 4.939 1.217 4.796 1.022 C 5.191 0.93 5.595 0.884 6 0.885 Z M 3.82 1.367 C 4.507 2.319 5.141 3.307 5.72 4.328 C 3.325 4.966 1.21 4.952 0.983 4.952 C 1.317 3.379 2.367 2.053 3.82 1.367 Z M 0.872 6.006 L 0.872 5.85 C 1.094 5.856 3.579 5.889 6.137 5.121 C 6.287 5.407 6.423 5.7 6.553 5.993 C 6.488 6.013 6.416 6.032 6.352 6.052 C 3.709 6.904 2.303 9.233 2.186 9.429 C 1.34 8.49 0.872 7.27 0.872 6.006 Z M 6 11.128 C 4.861 11.13 3.754 10.75 2.857 10.048 C 2.948 9.859 3.989 7.855 6.878 6.846 C 6.892 6.84 6.898 6.84 6.911 6.833 C 7.398 8.09 7.764 9.391 8.005 10.718 C 7.371 10.99 6.689 11.13 6 11.128 Z M 8.857 10.249 C 8.805 9.937 8.531 8.44 7.861 6.599 C 9.469 6.345 10.874 6.761 11.05 6.82 C 10.828 8.219 10.034 9.462 8.857 10.249 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"1089\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 11.865 10.725\" overflow=\"visible\" id=\"svg1348218177_486\" data-f2c-idx=\"1090\"><path d=\"M 9.345 0.001 L 6.347 3.427 L 3.755 0.001 L 0 0.001 L 4.486 5.866 L 0.235 10.725 L 2.055 10.725 L 5.336 6.976 L 8.204 10.725 L 11.865 10.725 L 7.189 4.543 L 11.164 0 L 9.344 0 Z M 8.707 9.637 L 2.125 1.032 L 3.207 1.032 L 9.715 9.636 L 8.707 9.636 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"1091\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 20 26.001\" overflow=\"visible\" id=\"svg117005589_864\" data-f2c-idx=\"1092\"><path d=\"M 10 6.192 C 15.523 6.192 20 10.626 20 16.096 C 20 21.567 15.523 26.001 10 26.001 C 4.477 26.001 0 21.567 0 16.096 C 0 10.626 4.477 6.192 10 6.192 Z M 10 8.668 C 5.858 8.668 2.5 11.994 2.5 16.096 C 2.5 20.199 5.858 23.525 10 23.525 C 14.142 23.525 17.5 20.199 17.5 16.096 C 17.5 11.994 14.142 8.668 10 8.668 Z M 10 10.525 L 11.653 13.843 L 15.35 14.376 L 12.675 16.957 L 13.306 20.604 L 10 18.882 L 6.694 20.603 L 7.325 16.957 L 4.65 14.374 L 8.348 13.842 Z M 17.5 0.001 L 17.5 3.716 L 15.796 5.124 C 14.382 4.39 12.839 3.932 11.25 3.776 L 11.25 0.001 Z M 8.75 0 L 8.75 3.776 C 7.162 3.932 5.619 4.389 4.205 5.123 L 2.5 3.716 L 2.5 0.001 Z\" fill=\"var(--token-85c12642-1128-4572-a3b3-1395f0b3a3fb, rgb(181, 254, 3))\" data-f2c-idx=\"1093\"></path></svg>"} />
      </div>
      <div className={styles["div-198"]}>
        <span className={styles["span-119"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button-2"]}>
          <SvgGraphic className={styles["svg-10"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"1097\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"1098\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
