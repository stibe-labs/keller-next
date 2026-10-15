"use client"

import { useEffect } from "react"

interface FramerRuntimeProps {
  scriptSrc?: string
  animatorCode?: string
}

export default function FramerRuntime({ scriptSrc, animatorCode }: FramerRuntimeProps) {
  useEffect(() => {
    if (typeof window === "undefined") return

    // 1. Ensure polyfills & container requirements
    window.process = {
      ...window.process,
      env: { ...window.process?.env, NODE_ENV: "production" },
    }

    // 2. Evaluate animator if not yet present
    const anyWindow = window as any
    if (animatorCode && typeof anyWindow.animator === "undefined") {
      try {
        const fn = new Function(animatorCode + "\nif(typeof animator !== 'undefined') return animator;")
        const res = fn()
        if (res) anyWindow.animator = res
      } catch (e) {
        console.warn("Animator evaluation notice:", e)
      }
    }

    // 3. Trigger appear animations smoothly
    const triggerAppear = () => {
      try {
        const appearScript = document.getElementById("__framer__appearAnimationsContent")
        const bpScript = document.getElementById("__framer__breakpoints")

        if (typeof anyWindow.animator !== "undefined" && appearScript && bpScript) {
          const content = JSON.parse(appearScript.textContent || (appearScript as any).text || "{}")
          const breakpoints = JSON.parse(bpScript.textContent || (bpScript as any).text || "[]")
          const activeHash = anyWindow.animator.getActiveVariantHash(breakpoints)

          // Temporarily ensure MotionIsMounted is false so appear animations can start
          const prevMotionMounted = anyWindow.MotionIsMounted
          anyWindow.MotionIsMounted = false

          anyWindow.animator.animateAppearEffects(
            content,
            (selector: string, keyframes: any, options: any) => {
              const elements = document.querySelectorAll(selector)
              elements.forEach((el) => {
                for (const [prop, kf] of Object.entries(keyframes)) {
                  anyWindow.animator.startOptimizedAppearAnimation(
                    el,
                    prop,
                    kf,
                    options[prop]
                  )
                }
              })
            },
            "data-framer-appear-id",
            "__Appear_Animation_Transform__",
            false,
            activeHash
          )

          if (prevMotionMounted !== undefined) {
            anyWindow.MotionIsMounted = prevMotionMounted
          }
        }
      } catch (e) {
        // Fallback: directly transition all appear elements to visible
      }

      // Safety fallback: reveal any appear elements that might be stuck at 0.001
      document.querySelectorAll("[data-framer-appear-id]").forEach((el) => {
        const htmlEl = el as HTMLElement
        if (htmlEl.style.opacity === "0.001" || htmlEl.style.opacity === "") {
          htmlEl.style.opacity = "1"
          htmlEl.style.transform = "none"
        }
      })
    }

    triggerAppear()
    const appearTimer1 = setTimeout(triggerAppear, 50)
    const appearTimer2 = setTimeout(triggerAppear, 200)

    // 4. Inject module script for main Framer bundle
    let src =
      scriptSrc ||
      "/assets/framerusercontent.com/sites/48iqDcsyBgp1ESyfs1JsJD/script_main.Ck6VmPDG.mjs"
    src = src.replace(/^\.\.\//, "/").replace(/^assets/, "/assets")
    if (!src.startsWith("/")) src = "/" + src

    const existingMain = document.querySelector(`script[data-framer-bundle="main"]`)
    if (!existingMain) {
      const script = document.createElement("script")
      script.type = "module"
      script.async = true
      script.dataset.framerBundle = "main"
      script.src = src
      document.body.appendChild(script)
    }

    return () => {
      clearTimeout(appearTimer1)
      clearTimeout(appearTimer2)
    }
  }, [scriptSrc, animatorCode])

  return null
}

