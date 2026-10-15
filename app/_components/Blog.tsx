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

export default function Blog({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-224"]}>
        <div className={styles["div-225"]}>
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
                          <a className={styles["a"]} href="./blog">{slots[3] ?? "Blog"}</a>
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
            <main className={styles["main-3"]}>
              <div className={styles["container-15"]}>
                <div className={styles["text-10"]}>
                  <div className={styles["div-226"]}>
                    <h2 className={styles["h2-7"]}>
                      <div className={styles["span-151"]}>
                        <span className={styles["span-152"]}>{slots[5] ?? "S"}</span>
                        <span className={styles["span-153"]}>{slots[6] ?? "t"}</span>
                        <span className={styles["span-154"]}>{slots[7] ?? "r"}</span>
                        <span className={styles["span-155"]}>{slots[8] ?? "a"}</span>
                        <span className={styles["span-156"]}>{slots[9] ?? "i"}</span>
                        <span className={styles["span-152"]}>{slots[10] ?? "g"}</span>
                        <span className={styles["span-157"]}>{slots[11] ?? "h"}</span>
                        <span className={styles["span-153"]}>{slots[12] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-151"]}>
                        <span className={styles["span-158"]}>{slots[13] ?? "O"}</span>
                        <span className={styles["span-152"]}>{slots[14] ?? "u"}</span>
                        <span className={styles["span-153"]}>{slots[15] ?? "t"}</span>
                        <span className={styles["span-153"]}>{slots[16] ?? "t"}</span>
                        <span className={styles["span-155"]}>{slots[17] ?? "a"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-151"]}>
                        <span className={styles["span-153"]}>{slots[18] ?? "t"}</span>
                        <span className={styles["span-157"]}>{slots[19] ?? "h"}</span>
                        <span className={styles["span-159"]}>{slots[20] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-151"]}>
                        <span className={styles["span-152"]}>{slots[21] ?? "S"}</span>
                        <span className={styles["span-153"]}>{slots[22] ?? "t"}</span>
                        <span className={styles["span-152"]}>{slots[23] ?? "u"}</span>
                        <span className={styles["span-160"]}>{slots[24] ?? "d"}</span>
                        <span className={styles["span-156"]}>{slots[25] ?? "i"}</span>
                        <span className={styles["span-155"]}>{slots[26] ?? "o"}</span>
                      </div>
                    </h2>
                  </div>
                  <div className={styles["div-227"]}>
                    <div className={styles["p-145"]}>
                      <div className={styles["span-161"]}>
                        <span className={styles["span-162"]}>{slots[27] ?? "F"}</span>
                        <span className={styles["span-163"]}>{slots[28] ?? "r"}</span>
                        <span className={styles["span-164"]}>{slots[29] ?? "e"}</span>
                        <span className={styles["span-165"]}>{slots[30] ?? "s"}</span>
                        <span className={styles["span-164"]}>{slots[31] ?? "h"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[32] ?? "u"}</span>
                        <span className={styles["span-162"]}>{slots[33] ?? "p"}</span>
                        <span className={styles["span-162"]}>{slots[34] ?? "d"}</span>
                        <span className={styles["span-164"]}>{slots[35] ?? "a"}</span>
                        <span className={styles["span-163"]}>{slots[36] ?? "t"}</span>
                        <span className={styles["span-164"]}>{slots[37] ?? "e"}</span>
                        <span className={styles["span-165"]}>{slots[38] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[39] ?? "a"}</span>
                        <span className={styles["span-164"]}>{slots[40] ?? "n"}</span>
                        <span className={styles["span-162"]}>{slots[41] ?? "d"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[42] ?? "a"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-166"]}>{slots[43] ?? "l"}</span>
                        <span className={styles["span-164"]}>{slots[44] ?? "o"}</span>
                        <span className={styles["span-164"]}>{slots[45] ?? "o"}</span>
                        <span className={styles["span-162"]}>{slots[46] ?? "k"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[47] ?? "a"}</span>
                        <span className={styles["span-163"]}>{slots[48] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-167"]}>{slots[49] ?? "w"}</span>
                        <span className={styles["span-164"]}>{slots[50] ?? "h"}</span>
                        <span className={styles["span-164"]}>{slots[51] ?? "a"}</span>
                        <span className={styles["span-163"]}>{slots[52] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-163"]}>{slots[53] ?? "f"}</span>
                        <span className={styles["span-164"]}>{slots[54] ?? "u"}</span>
                        <span className={styles["span-164"]}>{slots[55] ?? "e"}</span>
                        <span className={styles["span-166"]}>{slots[56] ?? "l"}</span>
                        <span className={styles["span-165"]}>{slots[57] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[58] ?? "o"}</span>
                        <span className={styles["span-164"]}>{slots[59] ?? "u"}</span>
                        <span className={styles["span-163"]}>{slots[60] ?? "r"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[61] ?? "c"}</span>
                        <span className={styles["span-163"]}>{slots[62] ?? "r"}</span>
                        <span className={styles["span-164"]}>{slots[63] ?? "e"}</span>
                        <span className={styles["span-164"]}>{slots[64] ?? "a"}</span>
                        <span className={styles["span-163"]}>{slots[65] ?? "t"}</span>
                        <span className={styles["span-168"]}>{slots[66] ?? "i"}</span>
                        <span className={styles["span-164"]}>{slots[67] ?? "v"}</span>
                        <span className={styles["span-164"]}>{slots[68] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[69] ?? "h"}</span>
                        <span className={styles["span-164"]}>{slots[70] ?? "e"}</span>
                        <span className={styles["span-164"]}>{slots[71] ?? "a"}</span>
                        <span className={styles["span-163"]}>{slots[72] ?? "r"}</span>
                        <span className={styles["span-163"]}>{slots[73] ?? "t"}</span>
                        <span className={styles["span-162"]}>{slots[74] ?? "b"}</span>
                        <span className={styles["span-164"]}>{slots[75] ?? "e"}</span>
                        <span className={styles["span-164"]}>{slots[76] ?? "a"}</span>
                        <span className={styles["span-163"]}>{slots[77] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-162"]}>{slots[78] ?? "p"}</span>
                        <span className={styles["span-166"]}>{slots[79] ?? "l"}</span>
                        <span className={styles["span-164"]}>{slots[80] ?? "u"}</span>
                        <span className={styles["span-165"]}>{slots[81] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[82] ?? "a"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-163"]}>{slots[83] ?? "f"}</span>
                        <span className={styles["span-164"]}>{slots[84] ?? "e"}</span>
                        <span className={styles["span-167"]}>{slots[85] ?? "w"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-163"]}>{slots[86] ?? "t"}</span>
                        <span className={styles["span-164"]}>{slots[87] ?? "h"}</span>
                        <span className={styles["span-168"]}>{slots[88] ?? "i"}</span>
                        <span className={styles["span-164"]}>{slots[89] ?? "n"}</span>
                        <span className={styles["span-162"]}>{slots[90] ?? "g"}</span>
                        <span className={styles["span-165"]}>{slots[91] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-167"]}>{slots[92] ?? "w"}</span>
                        <span className={styles["span-164"]}>{slots[93] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-166"]}>{slots[94] ?? "j"}</span>
                        <span className={styles["span-164"]}>{slots[95] ?? "u"}</span>
                        <span className={styles["span-165"]}>{slots[96] ?? "s"}</span>
                        <span className={styles["span-163"]}>{slots[97] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[98] ?? "c"}</span>
                        <span className={styles["span-164"]}>{slots[99] ?? "a"}</span>
                        <span className={styles["span-164"]}>{slots[100] ?? "n"}</span>
                        <span className={styles["span-168"]}>{slots[101] ?? "’"}</span>
                        <span className={styles["span-163"]}>{slots[102] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-165"]}>{slots[103] ?? "s"}</span>
                        <span className={styles["span-164"]}>{slots[104] ?? "h"}</span>
                        <span className={styles["span-164"]}>{slots[105] ?? "u"}</span>
                        <span className={styles["span-163"]}>{slots[106] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[107] ?? "u"}</span>
                        <span className={styles["span-162"]}>{slots[108] ?? "p"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-161"]}>
                        <span className={styles["span-164"]}>{slots[109] ?? "a"}</span>
                        <span className={styles["span-162"]}>{slots[110] ?? "b"}</span>
                        <span className={styles["span-164"]}>{slots[111] ?? "o"}</span>
                        <span className={styles["span-164"]}>{slots[112] ?? "u"}</span>
                        <span className={styles["span-163"]}>{slots[113] ?? "t"}</span>
                        <span className={styles["span-168"]}>{slots[114] ?? "."}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["card-2"]}>
                  <div className={styles["div-228"]}>
                    <div className={styles["div-229"]}>
                      <div className={styles["div-230"]}>
                        <BlogCard slots={["https://framerusercontent.com/images/KaR22TVlWcuZxMoxPA3qD2brU.png?scale-down-to=1024&width=673&height=1200","May 8, 2026","Design Tools","Creative Tools Reinvented, Fueling Modern Workflows and Beyond","6\n             min read"]} />
                      </div>
                    </div>
                    <div className={styles["div-229"]}>
                      <div className={styles["div-230"]}>
                        <BlogCard slots={["https://framerusercontent.com/images/KC8i4IExRQ0tTrAfZRk8XLIUtJs.jpg?scale-down-to=1024&width=904&height=1200","May 7, 2026","Inspiration","The Growth and Global Influence of Social Platforms Worldwide","6\n             min read"]} />
                      </div>
                    </div>
                    <div className={styles["div-229"]}>
                      <div className={styles["div-230"]}>
                        <BlogCard slots={["https://framerusercontent.com/images/NUIVvpsheByetI1gO5ud9XSOEI4.png?scale-down-to=1024&width=800&height=1200","May 6, 2026","AI","The Evolution of Design in the Age of AI: Breakthrough or Rebuild?","5\n             min read"]} />
                      </div>
                    </div>
                    <div className={styles["div-229"]}>
                      <div className={styles["div-230"]}>
                        <BlogCard slots={["https://framerusercontent.com/images/94u345VTNl5SRv8HaOPVHkaxjNw.jpg?scale-down-to=1024&width=3648&height=5472","May 4, 2026","Mobile Apps","Designing for Mobile First: How Apps Are Defining the Future of UX","4\n             min read"]} />
                      </div>
                    </div>
                    <div className={styles["div-231"]} />
                  </div>
                </div>
              </div>
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
                          <span className={styles["span-92"]}>{slots[115] ?? "C"}</span>
                          <span className={styles["span-93"]}>{slots[116] ?? "u"}</span>
                          <span className={styles["span-94"]}>{slots[117] ?? "r"}</span>
                          <span className={styles["span-95"]}>{slots[118] ?? "i"}</span>
                          <span className={styles["span-96"]}>{slots[119] ?? "o"}</span>
                          <span className={styles["span-93"]}>{slots[120] ?? "u"}</span>
                          <span className={styles["span-97"]}>{slots[121] ?? "s"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-98"]}>{slots[122] ?? "a"}</span>
                          <span className={styles["span-99"]}>{slots[123] ?? "b"}</span>
                          <span className={styles["span-96"]}>{slots[124] ?? "o"}</span>
                          <span className={styles["span-93"]}>{slots[125] ?? "u"}</span>
                          <span className={styles["span-100"]}>{slots[126] ?? "t"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-101"]}>{slots[127] ?? "h"}</span>
                          <span className={styles["span-96"]}>{slots[128] ?? "o"}</span>
                          <span className={styles["span-102"]}>{slots[129] ?? "w"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-102"]}>{slots[130] ?? "w"}</span>
                          <span className={styles["span-103"]}>{slots[131] ?? "e"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-102"]}>{slots[132] ?? "w"}</span>
                          <span className={styles["span-96"]}>{slots[133] ?? "o"}</span>
                          <span className={styles["span-94"]}>{slots[134] ?? "r"}</span>
                          <span className={styles["span-103"]}>{slots[135] ?? "k"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-96"]}>{slots[136] ?? "o"}</span>
                          <span className={styles["span-93"]}>{slots[137] ?? "u"}</span>
                          <span className={styles["span-94"]}>{slots[138] ?? "r"}</span>
                        </div>
                        {" "}
                        <div className={styles["span-91"]}>
                          <span className={styles["span-104"]}>{slots[139] ?? "m"}</span>
                          <span className={styles["span-98"]}>{slots[140] ?? "a"}</span>
                          <span className={styles["span-93"]}>{slots[141] ?? "g"}</span>
                          <span className={styles["span-95"]}>{slots[142] ?? "i"}</span>
                          <span className={styles["span-105"]}>{slots[143] ?? "c"}</span>
                          <span className={styles["span-106"]}>{slots[144] ?? "?"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-159"]}>
                    <div className={styles["p-113"]}>
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[145] ?? "F"}</span>
                        <span className={styles["span-109"]}>{slots[146] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[147] ?? "o"}</span>
                        <span className={styles["span-110"]}>{slots[148] ?? "m"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[149] ?? "p"}</span>
                        <span className={styles["span-109"]}>{slots[150] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[151] ?? "o"}</span>
                        <span className={styles["span-108"]}>{slots[152] ?? "c"}</span>
                        <span className={styles["span-108"]}>{slots[153] ?? "e"}</span>
                        <span className={styles["span-112"]}>{slots[154] ?? "s"}</span>
                        <span className={styles["span-112"]}>{slots[155] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[156] ?? "t"}</span>
                        <span className={styles["span-108"]}>{slots[157] ?? "o"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[158] ?? "p"}</span>
                        <span className={styles["span-109"]}>{slots[159] ?? "r"}</span>
                        <span className={styles["span-113"]}>{slots[160] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[161] ?? "c"}</span>
                        <span className={styles["span-113"]}>{slots[162] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[163] ?? "n"}</span>
                        <span className={styles["span-111"]}>{slots[164] ?? "g"}</span>
                        <span className={styles["span-114"]}>{slots[165] ?? ","}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[166] ?? "d"}</span>
                        <span className={styles["span-108"]}>{slots[167] ?? "e"}</span>
                        <span className={styles["span-112"]}>{slots[168] ?? "s"}</span>
                        <span className={styles["span-113"]}>{slots[169] ?? "i"}</span>
                        <span className={styles["span-111"]}>{slots[170] ?? "g"}</span>
                        <span className={styles["span-108"]}>{slots[171] ?? "n"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[172] ?? "t"}</span>
                        <span className={styles["span-108"]}>{slots[173] ?? "o"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[174] ?? "d"}</span>
                        <span className={styles["span-108"]}>{slots[175] ?? "e"}</span>
                        <span className={styles["span-113"]}>{slots[176] ?? "l"}</span>
                        <span className={styles["span-113"]}>{slots[177] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[178] ?? "v"}</span>
                        <span className={styles["span-108"]}>{slots[179] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[180] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[181] ?? "y"}</span>
                        <span className={styles["span-114"]}>{slots[182] ?? ","}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-115"]}>{slots[183] ?? "w"}</span>
                        <span className={styles["span-108"]}>{slots[184] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[185] ?? "b"}</span>
                        <span className={styles["span-108"]}>{slots[186] ?? "e"}</span>
                        <span className={styles["span-113"]}>{slots[187] ?? "l"}</span>
                        <span className={styles["span-113"]}>{slots[188] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[189] ?? "e"}</span>
                        <span className={styles["span-108"]}>{slots[190] ?? "v"}</span>
                        <span className={styles["span-108"]}>{slots[191] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[192] ?? "e"}</span>
                        <span className={styles["span-108"]}>{slots[193] ?? "v"}</span>
                        <span className={styles["span-108"]}>{slots[194] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[195] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[196] ?? "y"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[197] ?? "b"}</span>
                        <span className={styles["span-109"]}>{slots[198] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[199] ?? "a"}</span>
                        <span className={styles["span-108"]}>{slots[200] ?? "n"}</span>
                        <span className={styles["span-111"]}>{slots[201] ?? "d"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[202] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[203] ?? "a"}</span>
                        <span className={styles["span-112"]}>{slots[204] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[205] ?? "q"}</span>
                        <span className={styles["span-108"]}>{slots[206] ?? "u"}</span>
                        <span className={styles["span-108"]}>{slots[207] ?? "e"}</span>
                        <span className={styles["span-112"]}>{slots[208] ?? "s"}</span>
                        <span className={styles["span-109"]}>{slots[209] ?? "t"}</span>
                        <span className={styles["span-113"]}>{slots[210] ?? "i"}</span>
                        <span className={styles["span-108"]}>{slots[211] ?? "o"}</span>
                        <span className={styles["span-108"]}>{slots[212] ?? "n"}</span>
                        <span className={styles["span-112"]}>{slots[213] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[214] ?? "b"}</span>
                        <span className={styles["span-108"]}>{slots[215] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[216] ?? "f"}</span>
                        <span className={styles["span-108"]}>{slots[217] ?? "o"}</span>
                        <span className={styles["span-109"]}>{slots[218] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[219] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[220] ?? "t"}</span>
                        <span className={styles["span-108"]}>{slots[221] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[222] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-111"]}>{slots[223] ?? "g"}</span>
                        <span className={styles["span-113"]}>{slots[224] ?? "l"}</span>
                        <span className={styles["span-108"]}>{slots[225] ?? "o"}</span>
                        <span className={styles["span-115"]}>{slots[226] ?? "w"}</span>
                        <span className={styles["span-116"]}>{slots[227] ?? "-"}</span>
                        <span className={styles["span-108"]}>{slots[228] ?? "u"}</span>
                        <span className={styles["span-111"]}>{slots[229] ?? "p"}</span>
                        <span className={styles["span-114"]}>{slots[230] ?? "."}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-117"]}>{slots[231] ?? "W"}</span>
                        <span className={styles["span-108"]}>{slots[232] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[233] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[234] ?? "a"}</span>
                        <span className={styles["span-108"]}>{slots[235] ?? "v"}</span>
                        <span className={styles["span-108"]}>{slots[236] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[237] ?? "a"}</span>
                        <span className={styles["span-108"]}>{slots[238] ?? "n"}</span>
                        <span className={styles["span-112"]}>{slots[239] ?? "s"}</span>
                        <span className={styles["span-115"]}>{slots[240] ?? "w"}</span>
                        <span className={styles["span-108"]}>{slots[241] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[242] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[243] ?? "e"}</span>
                        <span className={styles["span-111"]}>{slots[244] ?? "d"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[245] ?? "t"}</span>
                        <span className={styles["span-108"]}>{slots[246] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[247] ?? "e"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-110"]}>{slots[248] ?? "m"}</span>
                        <span className={styles["span-108"]}>{slots[249] ?? "o"}</span>
                        <span className={styles["span-112"]}>{slots[250] ?? "s"}</span>
                        <span className={styles["span-109"]}>{slots[251] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[252] ?? "c"}</span>
                        <span className={styles["span-108"]}>{slots[253] ?? "o"}</span>
                        <span className={styles["span-110"]}>{slots[254] ?? "m"}</span>
                        <span className={styles["span-110"]}>{slots[255] ?? "m"}</span>
                        <span className={styles["span-108"]}>{slots[256] ?? "o"}</span>
                        <span className={styles["span-108"]}>{slots[257] ?? "n"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[258] ?? "o"}</span>
                        <span className={styles["span-108"]}>{slots[259] ?? "n"}</span>
                        <span className={styles["span-108"]}>{slots[260] ?? "e"}</span>
                        <span className={styles["span-112"]}>{slots[261] ?? "s"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-109"]}>{slots[262] ?? "r"}</span>
                        <span className={styles["span-113"]}>{slots[263] ?? "i"}</span>
                        <span className={styles["span-111"]}>{slots[264] ?? "g"}</span>
                        <span className={styles["span-108"]}>{slots[265] ?? "h"}</span>
                        <span className={styles["span-109"]}>{slots[266] ?? "t"}</span>
                      </div>
                      {" "}
                      <div className={styles["span-107"]}>
                        <span className={styles["span-108"]}>{slots[267] ?? "h"}</span>
                        <span className={styles["span-108"]}>{slots[268] ?? "e"}</span>
                        <span className={styles["span-109"]}>{slots[269] ?? "r"}</span>
                        <span className={styles["span-108"]}>{slots[270] ?? "e"}</span>
                        <span className={styles["span-114"]}>{slots[271] ?? "."}</span>
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
                          <p className={styles["p-114"]}>{slots[272] ?? "What makes us different?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[273] ?? "We don’t just design pretty visuals, we build brands that move the needle. Every pixel, every strategy, every campaign is rooted in results. Our clients trust us because we combine creativity with measurable impact."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-164"]}>
                          <p className={styles["p-116"]}>{slots[274] ?? "How long does a project take?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[275] ?? "Timelines depend on the scope, some branding projects can be done in weeks, while larger websites or campaigns may take months. What’s consistent is our commitment to meeting deadlines without sacrificing quality."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-165"]}>
                          <p className={styles["p-117"]}>{slots[276] ?? "How much does the service cost?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[277] ?? "No cookie-cutter pricing here. Every project is unique, and costs are tailored to scope and complexity. We’re upfront from the start, so there are no surprises, just value-packed work that pays off."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-166"]}>
                          <p className={styles["p-118"]}>{slots[278] ?? "What industries do you work with?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[279] ?? "We’ve collaborated with startups, global names, and organizations of every kind. While we’re not tied to one industry, we’re drawn to teams chasing bold, future-focused ideas."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-167"]}>
                          <p className={styles["p-119"]}>{slots[280] ?? "Do you only work with big brands?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[281] ?? "Not at all. We work with ambitious founders, growing startups, and established global brands alike. Whether you’re scaling fast or just starting out, our approach adapts to your goals."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-160"]}>
                    <div className={styles["close"]}>
                      <div className={styles["question-icon"]}>
                        <div className={styles["div-168"]}>
                          <p className={styles["p-120"]}>{slots[282] ?? "Do you offer ongoing support?"}</p>
                        </div>
                        <div className={styles["icon-4"]}>
                          <div className={styles["div-162"]} />
                        </div>
                      </div>
                      <div className={styles["answer"]}>
                        <div className={styles["div-163"]}>
                          <p className={styles["p-115"]}>{slots[283] ?? "Absolutely. Whether it’s website updates, new campaigns, or long-term brand growth, we stick around. Many of our clients become long-term partners because we grow as they grow."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["div-169"]}>
              <div className={styles["div-170"]}>
                <div className={styles["div-232"]} />
              </div>
            </div>
          </section>
          <footer className={styles["footer-3"]}>
            <div className={styles["ticker"]}>
              <div className={styles["div-172"]}>
                <section className={styles["section-3"]}>
                  <ul className={styles["ul-5"] + " " + styles["loop-4"]}>
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
                          <a className={styles["a-5"]} href="https://www.framer.com/?via=essadonzo">{slots[284] ?? "[ Made in Framer ]"}</a>
                        </div>
                      </div>
                      <div className={styles["content-13"]}>
                        <div className={styles["year"]}>
                          <div className={styles["copyright-year-auto"]}>
                            <div className={styles["div-180"]}>
                              <p className={styles["p-122"]}>{slots[285] ?? "© 2026"}</p>
                              <div className={styles["p-123"]} />
                            </div>
                          </div>
                        </div>
                        <div className={styles["div-181"]}>
                          <Border3 slots={[]} />
                        </div>
                        <div className={styles["div-182"]}>
                          <p className={styles["p-124"]}>{slots[286] ?? "All Rights Reserved"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["time-text"]}>
                  <div className={styles["time-4"]}>
                    <div className={styles["div-183"]}>
                      <p className={styles["p-125"]}>{slots[287] ?? "New York"}</p>
                    </div>
                    <div className={styles["div-184"]}>
                      <div className={styles["div-185"]}>
                        <span className={styles["span-118"]}>{slots[288] ?? "04:55 AM"}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-186"]}>
                    <p className={styles["p-126"]}>{slots[289] ?? "Creating Dope stuff for brands everywhere."}</p>
                  </div>
                </div>
                <div className={styles["links"]}>
                  <div className={styles["footer-links"]}>
                    <div className={styles["content-14"]}>
                      <div className={styles["links-2"]}>
                        <div className={styles["div-187"]}>
                          <p className={styles["p-127"]}>{slots[290] ?? "Company"}</p>
                        </div>
                        <div className={styles["menu-2"]}>
                          <div className={styles["div-110"]}>
                            <div className={styles["p-98"]}>
                              <a className={styles["a-3"]} href="./">{slots[291] ?? "Home"}</a>
                            </div>
                          </div>
                          <div className={styles["div-111"]}>
                            <div className={styles["p-99"]}>
                              <a className={styles["a-3"]} href="./about">{slots[292] ?? "About"}</a>
                            </div>
                          </div>
                          <div className={styles["div-112"]}>
                            <div className={styles["p-100"]}>
                              <a className={styles["a-3"]} href="./portfolio">{slots[293] ?? "Portfolio"}</a>
                            </div>
                          </div>
                          <div className={styles["div-113"]}>
                            <div className={styles["p-101"]}>
                              <a className={styles["a-6"]} href="./blog">{slots[294] ?? "Blog"}</a>
                            </div>
                          </div>
                          <div className={styles["div-114"]}>
                            <div className={styles["p-102"]}>
                              <a className={styles["a-3"]} href="./contact">{slots[295] ?? "Contact"}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["contact"]}>
                        <div className={styles["div-187"]}>
                          <p className={styles["p-127"]}>{slots[296] ?? "Contact"}</p>
                        </div>
                        <div className={styles["address-tel-email"]}>
                          <div className={styles["div-188"]}>
                            <p className={styles["p-128"]}>{slots[297] ?? "1200 Creative Street Suite 500, New York 94103, NY"}</p>
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
                        <p className={styles["p-129"]}>{slots[298] ?? "Psst... interested in dope updates?"}</p>
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
                          <SvgGraphic className={styles["svg-8"]} html={"<svg style=\"width:100%;height:100%;\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"806\"><use href=\"#svg117005589_864\" data-f2c-idx=\"807\"></use></svg>"} />
                        </div>
                      </div>
                      <div className={styles["div-193"]}>
                        <p className={styles["p-130"]}>{slots[299] ?? "Multiple industry awards for branding, design and digital innovation."}</p>
                      </div>
                    </div>
                    <div className={styles["legal"]}>
                      <div className={styles["div-194"]}>
                        <div className={styles["p-131"]}>
                          <a className={styles["a-7"]} href="./privacy-policy">{slots[300] ?? "Privacy Policy"}</a>
                        </div>
                      </div>
                      <div className={styles["div-182"]}>
                        <div className={styles["p-132"]}>
                          <a className={styles["a-7"]} href="./term-of-service">{slots[301] ?? "Terms of Service"}</a>
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
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 14.096 8.909\" overflow=\"visible\" id=\"svg-246205585_2363\" data-f2c-idx=\"852\"><path d=\"M 4.1 0 C 4.507 0 4.883 0.032 5.226 0.126 C 5.571 0.189 5.853 0.315 6.103 0.472 C 6.353 0.629 6.541 0.85 6.666 1.133 C 6.791 1.417 6.854 1.763 6.854 2.141 C 6.854 2.582 6.76 2.959 6.541 3.242 C 6.353 3.526 6.04 3.777 5.665 3.966 C 6.197 4.124 6.604 4.407 6.854 4.785 C 7.104 5.163 7.261 5.635 7.261 6.17 C 7.261 6.611 7.167 6.989 7.01 7.304 C 6.854 7.619 6.604 7.902 6.322 8.091 C 6.015 8.293 5.677 8.442 5.321 8.531 C 4.945 8.626 4.57 8.689 4.194 8.689 L 0 8.689 L 0 0 Z M 3.849 3.525 C 4.194 3.525 4.476 3.431 4.694 3.274 C 4.913 3.117 5.008 2.833 5.008 2.487 C 5.008 2.298 4.976 2.109 4.913 1.984 C 4.851 1.858 4.757 1.763 4.632 1.669 C 4.505 1.597 4.367 1.544 4.225 1.511 C 4.068 1.48 3.912 1.48 3.724 1.48 L 1.909 1.48 L 1.909 3.526 L 3.85 3.526 Z M 3.944 7.241 C 4.131 7.241 4.319 7.209 4.476 7.178 C 4.632 7.146 4.789 7.083 4.913 6.989 C 5.041 6.896 5.148 6.778 5.226 6.642 C 5.289 6.485 5.352 6.296 5.352 6.076 C 5.352 5.635 5.226 5.32 4.976 5.1 C 4.726 4.911 4.381 4.817 3.975 4.817 L 1.909 4.817 L 1.909 7.241 L 3.944 7.241 Z M 9.984 7.209 C 10.234 7.461 10.609 7.587 11.11 7.587 C 11.455 7.587 11.768 7.493 12.018 7.335 C 12.268 7.146 12.425 6.957 12.487 6.768 L 14.021 6.768 C 13.77 7.524 13.395 8.059 12.895 8.405 C 12.393 8.72 11.799 8.909 11.079 8.909 C 10.619 8.911 10.162 8.825 9.733 8.657 C 9.347 8.512 9.003 8.275 8.732 7.965 C 8.441 7.675 8.226 7.318 8.106 6.926 C 7.949 6.516 7.886 6.076 7.886 5.572 C 7.886 5.1 7.949 4.659 8.106 4.25 C 8.257 3.855 8.48 3.492 8.763 3.179 C 9.045 2.896 9.389 2.645 9.764 2.487 C 10.182 2.319 10.629 2.233 11.079 2.235 C 11.611 2.235 12.081 2.33 12.487 2.55 C 12.895 2.77 13.207 3.022 13.457 3.4 C 13.708 3.746 13.896 4.155 14.021 4.596 C 14.083 5.037 14.115 5.478 14.083 5.981 L 9.545 5.981 C 9.545 6.485 9.733 6.957 9.984 7.209 Z M 11.955 3.903 C 11.736 3.683 11.392 3.557 10.985 3.557 C 10.746 3.554 10.51 3.608 10.296 3.714 C 10.109 3.809 9.984 3.935 9.859 4.061 C 9.743 4.183 9.667 4.336 9.639 4.502 C 9.608 4.659 9.577 4.785 9.577 4.911 L 12.393 4.911 C 12.331 4.439 12.174 4.124 11.955 3.903 Z M 9.201 0.598 L 12.706 0.598 L 12.706 1.448 L 9.202 1.448 L 9.202 0.598 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"853\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 12 12\" overflow=\"visible\" id=\"svg-2027912071_1367\" data-f2c-idx=\"854\"><path d=\"M 6 0 C 2.688 0 0 2.688 0 6 C 0 9.312 2.688 12 6 12 C 9.306 12 12 9.312 12 6 C 12 2.688 9.306 0 6 0 Z M 9.963 2.766 C 10.701 3.666 11.11 4.791 11.121 5.954 C 10.952 5.922 9.26 5.577 7.555 5.792 C 7.516 5.707 7.483 5.616 7.445 5.525 C 7.339 5.275 7.226 5.027 7.106 4.783 C 8.993 4.015 9.853 2.909 9.963 2.766 Z M 6 0.885 C 7.302 0.885 8.492 1.373 9.397 2.174 C 9.306 2.303 8.531 3.338 6.709 4.022 C 5.87 2.48 4.939 1.217 4.796 1.022 C 5.191 0.93 5.595 0.884 6 0.885 Z M 3.82 1.367 C 4.507 2.319 5.141 3.307 5.72 4.328 C 3.325 4.966 1.21 4.952 0.983 4.952 C 1.317 3.379 2.367 2.053 3.82 1.367 Z M 0.872 6.006 L 0.872 5.85 C 1.094 5.856 3.579 5.889 6.137 5.121 C 6.287 5.407 6.423 5.7 6.553 5.993 C 6.488 6.013 6.416 6.032 6.352 6.052 C 3.709 6.904 2.303 9.233 2.186 9.429 C 1.34 8.49 0.872 7.27 0.872 6.006 Z M 6 11.128 C 4.861 11.13 3.754 10.75 2.857 10.048 C 2.948 9.859 3.989 7.855 6.878 6.846 C 6.892 6.84 6.898 6.84 6.911 6.833 C 7.398 8.09 7.764 9.391 8.005 10.718 C 7.371 10.99 6.689 11.13 6 11.128 Z M 8.857 10.249 C 8.805 9.937 8.531 8.44 7.861 6.599 C 9.469 6.345 10.874 6.761 11.05 6.82 C 10.828 8.219 10.034 9.462 8.857 10.249 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"855\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 11.865 10.725\" overflow=\"visible\" id=\"svg1348218177_486\" data-f2c-idx=\"856\"><path d=\"M 9.345 0.001 L 6.347 3.427 L 3.755 0.001 L 0 0.001 L 4.486 5.866 L 0.235 10.725 L 2.055 10.725 L 5.336 6.976 L 8.204 10.725 L 11.865 10.725 L 7.189 4.543 L 11.164 0 L 9.344 0 Z M 8.707 9.637 L 2.125 1.032 L 3.207 1.032 L 9.715 9.636 L 8.707 9.636 Z\" fill=\"var(--token-257525d4-6c22-465e-abda-2ed99fbe4a25, rgba(255, 255, 255, 0.6))\" data-f2c-idx=\"857\"></path></svg>"} />
        <SvgGraphic className={styles["svg-9"]} html={"<svg viewBox=\"0 0 20 26.001\" overflow=\"visible\" id=\"svg117005589_864\" data-f2c-idx=\"858\"><path d=\"M 10 6.192 C 15.523 6.192 20 10.626 20 16.096 C 20 21.567 15.523 26.001 10 26.001 C 4.477 26.001 0 21.567 0 16.096 C 0 10.626 4.477 6.192 10 6.192 Z M 10 8.668 C 5.858 8.668 2.5 11.994 2.5 16.096 C 2.5 20.199 5.858 23.525 10 23.525 C 14.142 23.525 17.5 20.199 17.5 16.096 C 17.5 11.994 14.142 8.668 10 8.668 Z M 10 10.525 L 11.653 13.843 L 15.35 14.376 L 12.675 16.957 L 13.306 20.604 L 10 18.882 L 6.694 20.603 L 7.325 16.957 L 4.65 14.374 L 8.348 13.842 Z M 17.5 0.001 L 17.5 3.716 L 15.796 5.124 C 14.382 4.39 12.839 3.932 11.25 3.776 L 11.25 0.001 Z M 8.75 0 L 8.75 3.776 C 7.162 3.932 5.619 4.389 4.205 5.123 L 2.5 3.716 L 2.5 0.001 Z\" fill=\"var(--token-85c12642-1128-4572-a3b3-1395f0b3a3fb, rgb(181, 254, 3))\" data-f2c-idx=\"859\"></path></svg>"} />
      </div>
      <div className={styles["div-198"]}>
        <span className={styles["span-119"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button-2"]}>
          <SvgGraphic className={styles["svg-10"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"863\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"864\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
