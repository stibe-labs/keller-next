"use client"

import styles from "./styles.module.css"
import HoverMaskRevealThree from "./HoverMaskRevealThree"

export default function HoverMaskReveal2({ slots = [] }: { slots?: string[] }) {
  const baseImg = slots[0] ?? "https://framerusercontent.com/images/nBIbhTXVIXz1M6Xt5uSsfxxrOp0.webp?width=1264&height=848"
  const hoverImg = slots[1] ?? "https://framerusercontent.com/images/0eU6Tby2I8KUO0fKQcdUU4w9KE.webp?width=1024&height=1024"

  return (
    <HoverMaskRevealThree
      imageBase={baseImg}
      imageHover={hoverImg}
      className={styles["div-53"]}
    />
  )
}
