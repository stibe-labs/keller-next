"use client"

import React, { useEffect, useRef, useState } from "react"
import { initHoverMaskRevealThree } from "./hoverMaskShader"

export interface HoverMaskRevealThreeProps {
  imageBase: { src: string; srcSet?: string; alt?: string; positionX?: string; positionY?: string } | string
  imageHover: { src: string; srcSet?: string; alt?: string; positionX?: string; positionY?: string } | string
  borderRadius?: number | string
  radius?: number
  blur?: number
  circleBoost?: number
  texture?: number
  timeSpeed?: number
  splatRadius?: number
  velocityDissipation?: number
  shrinkTimeSeconds?: number
  curl?: number
  pressureIterations?: number
  parallax?: boolean
  parallaxAmount?: number
  parallaxSmoothing?: number
  preview?: boolean
  style?: React.CSSProperties
  className?: string
}

export default function HoverMaskRevealThree(props: HoverMaskRevealThreeProps) {
  const {
    imageBase,
    imageHover,
    borderRadius = 0,
    radius = 100,
    blur = 0.5,
    circleBoost = 0.55,
    texture = 0.4,
    timeSpeed = 5,
    splatRadius = 0.1,
    velocityDissipation = 0.99,
    shrinkTimeSeconds = 1.5,
    curl = 20,
    pressureIterations = 25,
    parallax = true,
    parallaxAmount = 5,
    parallaxSmoothing = 0.25,
    style,
    className
  } = props

  const baseObj = typeof imageBase === "string" ? { src: imageBase } : imageBase
  const hoverObj = typeof imageHover === "string" ? { src: imageHover } : imageHover

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isCoarse = window.matchMedia ? window.matchMedia("(pointer: coarse)").matches : false
      const isNarrow = window.matchMedia ? window.matchMedia("(max-width: 768px)").matches : false
      setIsMobile(isCoarse || isNarrow)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const cleanup = initHoverMaskRevealThree({
      container,
      canvas,
      baseSrc: baseObj?.src || "",
      hoverSrc: hoverObj?.src || baseObj?.src || "",
      circleBoost,
      curl,
      parallax,
      parallaxAmount,
      parallaxSmoothing,
      shrinkTimeSeconds,
      splatRadius,
      texture,
      radius,
      blur,
      timeSpeed,
      velocityDissipation,
      pressureIterations
    })

    return cleanup
  }, [
    isMobile,
    baseObj?.src,
    hoverObj?.src,
    circleBoost,
    curl,
    parallax,
    parallaxAmount,
    parallaxSmoothing,
    shrinkTimeSeconds,
    splatRadius,
    texture,
    radius,
    blur,
    timeSpeed,
    velocityDissipation,
    pressureIterations
  ])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius,
        overflow: "clip",
        ...style
      }}
    >
      <figure
        style={{
          position: "absolute",
          inset: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
          width: "100%",
          height: "100%"
        }}
      >
        <img
          src={baseObj?.src}
          srcSet={baseObj?.srcSet}
          alt={baseObj?.alt || "Back image"}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${baseObj?.positionX || "50%"} ${baseObj?.positionY || "50%"}`,
            margin: 0,
            padding: 0,
            userSelect: "none",
            pointerEvents: "none",
            display: "block"
          }}
        />
      </figure>

      {!isMobile && (
        <canvas
          ref={canvasRef}
          id="stage"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            pointerEvents: "none",
            mixBlendMode: "normal",
            background: "transparent"
          }}
        />
      )}
    </div>
  )
}
