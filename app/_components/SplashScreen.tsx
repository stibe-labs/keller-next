"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import styles from "./SplashScreen.module.css"

export default function SplashScreen() {
  const [dismissed, setDismissed] = useState(false)
  const [removed, setRemoved] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const dismissingRef = useRef(false)

  const handleDismiss = useCallback(() => {
    if (dismissingRef.current) return
    dismissingRef.current = true

    if (videoRef.current) {
      try {
        videoRef.current.pause()
        videoRef.current.muted = true
        videoRef.current.volume = 0
      } catch (e) {
        // ignore media cleanup error
      }
    }

    setDismissed(true)
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("keller-curtain-dismissed")
      window.dispatchEvent(new CustomEvent("keller:curtain-dismissed"))
    }

    // Unmount and release media only after curtain sweep has completely moved off-screen
    setTimeout(() => {
      if (videoRef.current) {
        try {
          videoRef.current.removeAttribute("src")
          videoRef.current.load()
        } catch (e) {}
      }
      setRemoved(true)
    }, 1300)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Fallback safety timer
    const safetyTimer = setTimeout(handleDismiss, 8000)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        handleDismiss()
      }
    }
    window.addEventListener("keydown", onKeyDown)

    // Play video 100% silent and muted
    video.playbackRate = 1.0
    video.volume = 0
    video.muted = true

    video.play().catch(() => {})

    const onEnded = () => handleDismiss()
    const onError = () => handleDismiss()
    const onTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        handleDismiss()
      }
    }

    video.addEventListener("ended", onEnded)
    video.addEventListener("error", onError)
    video.addEventListener("timeupdate", onTimeUpdate)

    return () => {
      clearTimeout(safetyTimer)
      window.removeEventListener("keydown", onKeyDown)
      if (video) {
        video.removeEventListener("ended", onEnded)
        video.removeEventListener("error", onError)
        video.removeEventListener("timeupdate", onTimeUpdate)
      }
    }
  }, [handleDismiss])

  if (removed) return null

  return (
    <aside
      id="splash-screen"
      className={`${styles.splashCurtainVertical} ${dismissed ? styles.dismissed : ""}`}
      role="dialog"
      aria-label="Welcome to Keller Adapt"
    >
      <div className={styles.curtainVerticalSheet}>
        <div className={styles.curtainWaterShimmer} />

        {/* Center Stage Video */}
        <div className={styles.splashCenterStage}>
          <video
            ref={videoRef}
            id="splash-video"
            src="/assets/brand/gemini_generated_video_cf484440.mp4"
            playsInline
            autoPlay
            muted
            preload="auto"
            className={styles.splashVideoSharp}
          />
        </div>

        {/* Liquid Water Waves */}
        <div className={styles.curtainWaterWaves} aria-hidden="true">
          <svg
            className={`${styles.curtainWaveSvg} ${styles.waveLayerSecondary}`}
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,40 Q1260,110 1080,45 Q900,-10 720,50 Q540,110 360,40 Q180,-10 0,45 Z"
              fill="rgba(242, 95, 68, 0.22)"
            />
          </svg>
          <svg
            className={`${styles.curtainWaveSvg} ${styles.waveLayerTertiary}`}
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,55 Q1300,10 1120,60 Q940,115 760,50 Q580,-10 400,60 Q200,120 0,50 Z"
              fill="rgba(242, 95, 68, 0.12)"
            />
          </svg>
          <svg
            className={`${styles.curtainWaveSvg} ${styles.waveLayerPrimary}`}
            viewBox="0 0 1440 140"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1440,0 L1440,30 Q1260,95 1080,35 Q900,-15 720,40 Q540,95 360,30 Q180,-15 0,35 Z"
              fill="#F0F0F0"
            />
          </svg>
        </div>
      </div>
    </aside>
  )
}
