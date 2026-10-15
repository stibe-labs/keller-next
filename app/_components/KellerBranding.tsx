"use client"

import { useEffect } from "react"
import { initHoverMaskRevealThree } from "./hoverMaskShader"

export default function KellerBranding() {
  useEffect(() => {
    // 0. Ensure title
    document.title = "Keller Adapt — Engineered for Sensory Freedom & Developmental Progress"

    // 1. Mount Store Snackbar
    let sb = document.getElementById("keller-store-snackbar")
    if (!sb) {
      sb = document.createElement("div")
      sb.id = "keller-store-snackbar"
      sb.className = "keller-snackbar"
      sb.setAttribute("role", "alert")
      sb.setAttribute("aria-live", "polite")
      sb.innerHTML = `
        <div class="keller-snackbar-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <path d="M3 6h18"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
        <div class="keller-snackbar-content">
          <div class="keller-snackbar-title">Store Launching Soon!</div>
          <div class="keller-snackbar-desc">Our official online store is launching soon! Keller Adapt sensory pods and adaptive equipment are currently available worldwide on Amazon & Etsy.</div>
        </div>
        <button type="button" class="keller-snackbar-close" aria-label="Close notification">✕</button>
      `
      document.body.appendChild(sb)

      const closeBtn = sb.querySelector(".keller-snackbar-close")
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          (window as any).hideStoreSnackbar?.()
        })
      }
    }

    let snackbarTimer: any = null
    const anyWindow = window as any
    anyWindow.showStoreSnackbar = (productName?: string, customDesc?: string) => {
      const el = document.getElementById("keller-store-snackbar")
      if (!el) return
      const titleEl = el.querySelector(".keller-snackbar-title")
      const descEl = el.querySelector(".keller-snackbar-desc")
      if (customDesc) {
        if (titleEl) titleEl.textContent = productName || "Keller Adapt Product"
        if (descEl) descEl.textContent = customDesc
      } else if (productName && typeof productName === "string") {
        if (titleEl) titleEl.textContent = `${productName} — Launching Soon!`
        if (descEl) descEl.textContent = `${productName} will be available on our official store soon. Currently available worldwide on Amazon & Etsy.`
      } else {
        if (titleEl) titleEl.textContent = "Store Launching Soon!"
        if (descEl) descEl.textContent = "Our official online store is launching soon! Keller Adapt sensory pods and adaptive equipment are currently available worldwide on Amazon & Etsy."
      }
      el.classList.add("show")
      if (snackbarTimer) clearTimeout(snackbarTimer)
      snackbarTimer = setTimeout(anyWindow.hideStoreSnackbar, 5000)
    }

    anyWindow.hideStoreSnackbar = () => {
      const el = document.getElementById("keller-store-snackbar")
      if (el) el.classList.remove("show")
      if (snackbarTimer) {
        clearTimeout(snackbarTimer)
        snackbarTimer = null
      }
    }

    const showSnackbar = (title: string, desc?: string) => {
      anyWindow.showStoreSnackbar?.(title, desc)
    }

    // 2. Setup Multi-Product Hero Rotator
    const slides = [
      "/assets/hero-slides/slide_0.webp?v=keller-rightside-v2",
      "/assets/hero-slides/slide_1.webp?v=keller-rightside-v2",
      "/assets/hero-slides/slide_2.webp?v=keller-rightside-v2",
      "/assets/hero-slides/slide_3.webp?v=keller-rightside-v2",
      "/assets/hero-slides/slide_4.webp?v=keller-rightside-v2",
      "/assets/hero-slides/slide_5.webp?v=keller-rightside-v2",
      "/assets/hero-slides/slide_6.webp?v=keller-rightside-v2",
    ]
    const slideAlts = [
      "Keller Adapt - Calm Cave Sensory Pod Blue",
      "Keller Adapt - Calm Cave Sensory Pod Purple",
      "Keller Adapt - Calm Cave Sensory Pod Purple Play",
      "Keller Adapt - SafeSpace Sensory Pod and Hammock",
      "Keller Adapt - Mesh Sensory Hammock Terracotta",
      "Keller Adapt - Trio of Colorful Sensory Hammock Pods",
      "Keller Adapt - LayerNest Dual Compression Hammock",
    ]

    let currentSlideIdx = 0
    function setupRotatorContainer(parent: Element | null) {
      if (!parent) return
      let wrapper = parent.querySelector(".hero-rotator-wrapper")
      if (!wrapper) {
        wrapper = document.createElement("div")
        wrapper.className = "hero-rotator-wrapper"

        slides.forEach((src, idx) => {
          const img = document.createElement("img")
          img.className = "hero-rotator-slide" + (idx === currentSlideIdx ? " active" : "")
          img.src = src
          img.alt = slideAlts[idx]
          img.decoding = "async"
          wrapper!.appendChild(img)
        })

        const origImg = parent.querySelector("img:not(.hero-rotator-slide)") as HTMLElement | null
        if (origImg) origImg.style.display = "none"

        parent.appendChild(wrapper)
      }
    }

    const rotatorTargets = document.querySelectorAll(".framer-16lsn04, .framer-1rxm8vu")
    rotatorTargets.forEach(setupRotatorContainer)

    const rotatorInterval = setInterval(() => {
      currentSlideIdx = (currentSlideIdx + 1) % slides.length
      document.querySelectorAll(".hero-rotator-wrapper").forEach((wrapper) => {
        const allSlides = wrapper.querySelectorAll(".hero-rotator-slide")
        allSlides.forEach((s, idx) => {
          if (idx === currentSlideIdx) {
            s.classList.add("active")
          } else {
            s.classList.remove("active")
          }
        })
      })
    }, 4500)

    // 3. Product Marquee
    const productItems = [
      "CalmCave", "SafeSpace", "SoloNest", "FlowState", "FlowSwing",
      "GroupFlow", "GroupHug", "LayerNest", "SensePath", "TheraSpace",
      "LightLoops", "LumaSwing", "SymphonySense", "BalanceBench", "HugMate",
      "CalmCave", "SafeSpace", "SoloNest", "FlowState", "FlowSwing"
    ]

    const marqueeHTML = `
      <div class="keller-product-marquee" aria-label="Keller Adapt Products Lineup">
        <div class="keller-product-marquee-track">
          ${productItems
            .map(
              (p) =>
                `<button type="button" class="keller-product-item" data-product="${p}" aria-label="Explore ${p}">${p}</button>`
            )
            .join("")}
        </div>
      </div>
    `

    // 4. Enforce Keller Adapt branding texts
    const enforceTexts = () => {
      // Hero headline with word-by-word mask reveal
      const heroWords = ["Empowering", "every", "child", "to", "learn,", "play", "&", "thrive."]
      const heroHeadlineHTML = heroWords
        .map(
          (word, idx) =>
            `<span class="keller-word-mask"><span class="keller-word" style="--w-idx:${idx}">${word}</span></span>`
        )
        .join(" ")

      document.querySelectorAll(".framer-iml60k h1").forEach((h1) => {
        if (!h1.querySelector(".keller-word")) {
          h1.innerHTML = heroHeadlineHTML
        }
      })

      // Subtitle
      const expectedSubtitle =
        "Therapist-designed sensory pods, adaptive equipment, and pediatric therapy tools made with clinical care and radical affordability."
      document.querySelectorAll(".framer-1kg6ep7 p").forEach((p) => {
        if (!p.classList.contains("keller-subtitle-reveal")) {
          p.classList.add("keller-subtitle-reveal")
        }
        if (p.textContent?.trim() !== expectedSubtitle) {
          p.textContent = expectedSubtitle
        }
      })

      // Go to Store Button
      document.querySelectorAll(".framer-18sahde-container").forEach((c) => {
        if (!c.classList.contains("keller-btn-reveal")) {
          c.classList.add("keller-btn-reveal")
        }
        const link = c.querySelector("a")
        if (link && link.getAttribute("href") !== "javascript:void(0)") {
          link.setAttribute("href", "javascript:void(0)")
          link.setAttribute("role", "button")
          link.setAttribute("aria-label", "Go to Store - Launching Soon")
        }
        const p = c.querySelector("p")
        if (p && p.textContent?.trim().toUpperCase() !== "GO TO STORE") {
          p.textContent = "Go to Store"
        }
      })

      // Product Marquee into partner logo container
      document.querySelectorAll(".framer-1bx5ur0-container").forEach((container) => {
        if (!container.querySelector(".keller-product-marquee")) {
          container.innerHTML = marqueeHTML
        }
      })

      // Problem Section from Pitch Deck — Rendered in Exact Original Framer Card Design
      const problemPillars = [
        {
          title: "Sensory Overload",
          subtext:
            "Everyday sights, sounds, and crowded spaces trigger unbearable sensory overload. Without an immediate, calming sanctuary to retreat to, anxiety quickly escalates into painful, exhausting meltdowns.",
          points: [
            "Extreme sensitivity to lights & loud noises",
            "Frequent anxiety, panic & distress meltdowns",
            "Inability to self-regulate in public spaces",
            "Lack of safe sensory decompression rooms",
          ],
          image: "/assets/problem-cards/calmcave_blue1.jpg",
          hoverImage: "/assets/products/calmcave.jpg",
          alt: "Sensory Overload - CalmCave Sensory Pod",
        },
        {
          title: "Equipment Costs",
          subtext:
            "Imported pediatric assistive equipment costs 5x to 10x more than accessible alternatives. Families already drained by clinical fees are priced out of basic therapeutic tools their children urgently need.",
          points: [
            "5-10x markup on imported therapy gear",
            "Exorbitant recurring clinical consultation fees",
            "Essential home therapy tools out of reach",
            "Zero insurance coverage for assistive equipment",
          ],
          image: "/assets/problem-cards/card2_equipment_cost.jpg",
          hoverImage: "/assets/products/flowstate.jpg",
          alt: "Equipment Costs - SafeSpace Inflatable Pod",
        },
        {
          title: "Access Barriers",
          subtext:
            "Over 80% of special schools and therapy clinics face a critical shortage of sensory tools. Fewer than 10 domestic manufacturers exist in India, leaving tier 2 & 3 communities severely underserved.",
          points: [
            "Over 80% of special schools lack sensory rooms",
            "Months-long waitlists at overburdened clinics",
            "Fewer than 10 domestic Indian manufacturers",
            "Tier 2 & 3 communities cut off from care",
          ],
          image: "/assets/problem-cards/card3_school_shortfall.jpg",
          hoverImage: "/assets/products/groupflow.jpg",
          alt: "Access Barriers - FlowSwing Movement Therapy",
        },
        {
          title: "Caregiver Burnout",
          subtext:
            "Parents navigate relentless caregiver fatigue, sleepless nights, and the heartbreak of watching their child struggle alone. Children feel misunderstood, excluded from peers, and stripped of dignity.",
          points: [
            "Relentless caregiver burnout & exhaustion",
            "Children feeling isolated & excluded from peers",
            "Chronic sleep deprivation & family strain",
            "Barriers to everyday childhood independence",
          ],
          image: "/assets/problem-cards/card4_emotional_strain.jpg",
          hoverImage: "/assets/products/grouphug.jpg",
          alt: "Caregiver Burnout - GroupHug Deep Compression",
        },
      ]

      const expectedProblemHeading = "The Problem & Emotional Reality"
      const expectedProblemSubheading =
        "1 in 36 children face sensory overload and developmental barriers daily — while families battle overwhelming costs, scarce resources, and emotional exhaustion."

      document
        .querySelectorAll(
          ".framer-1rthww2, [data-framer-name='Services'], [data-framer-name='Services (scroll container)'], .framer-leecil"
        )
        .forEach((section) => {
          // Section Heading (Exact keller-full neon lime)
          const headingH2 = section.querySelector(".framer-64rozy h2, [data-styles-preset='ltdbqJp2k'], h2") as HTMLElement | null
          if (headingH2 && headingH2.textContent?.trim() !== expectedProblemHeading) {
            headingH2.innerHTML = `The Problem &<br class="framer-text">Emotional Reality`
            headingH2.style.color = "#b5fe03"
            headingH2.style.setProperty("--framer-text-color", "#b5fe03")
          }

          // Section Subheading
          const subheadingP = section.querySelector(".framer-1u1dgaj p, .framer-17nf4q8 p") as HTMLElement | null
          if (subheadingP && subheadingP.textContent?.trim() !== expectedProblemSubheading) {
            subheadingP.textContent = expectedProblemSubheading
            subheadingP.style.color = "#ffffff"
          }

          // Bottom banner
          section.querySelectorAll("p").forEach((p) => {
            if (p.textContent && (p.textContent.includes("boldest ideas") || p.textContent.includes("Ready?"))) {
              p.innerHTML = `Every child deserves sensory calm, dignity, and independence. <a class="framer-text framer-styles-preset-14f145l" data-styles-preset="G5rqAFJbf" href="./contact" style="text-decoration:underline;font-weight:600;color:inherit">Join our mission</a>`
            }
          })

          // 4 Cards across desktop and responsive variants using EXACT keller-full card design
          const cards = section.querySelectorAll(".framer-GrZJh, [data-framer-name='Desktop']")
          cards.forEach((cardEl, idx) => {
            const card = cardEl as HTMLElement
            const pillar = problemPillars[idx % problemPillars.length]
            if (!pillar) return

            // 1. Card Title (Exact keller-full electric blue #1458e4 TcCXrNzmc)
            const titleContainer = card.querySelector(".framer-10ahakb")
            if (titleContainer) {
              const currentP = titleContainer.querySelector("p")
              if (!currentP) {
                titleContainer.innerHTML = `<p class="framer-text framer-styles-preset-56s851" data-styles-preset="TcCXrNzmc" dir="auto" style="--framer-text-color:var(--token-bd471799-7c28-40d8-97ea-a079a4323bc8, #1458e4);color:#1458e4">${pillar.title}</p>`
              } else if (currentP.textContent?.trim() !== pillar.title || currentP.style.color !== "rgb(20, 88, 228)") {
                currentP.textContent = pillar.title
                currentP.style.setProperty("--framer-text-color", "var(--token-bd471799-7c28-40d8-97ea-a079a4323bc8, #1458e4)")
                currentP.style.color = "#1458e4"
              }
            }

            // 2. Card Subtext
            const subtextP = card.querySelector(".framer-1bjd881 p, [data-styles-preset='cXdTrNGQ_'] p")
            if (subtextP && subtextP.textContent?.trim() !== pillar.subtext) {
              subtextP.textContent = pillar.subtext
            }

            // 3. 4 List Item Points
            const itemPs = card.querySelectorAll(".framer-c5o8d0 p, [data-styles-preset='BPkjAO3VR'] p")
            itemPs.forEach((p, pIdx) => {
              if (pIdx < pillar.points.length && p.textContent?.trim() !== pillar.points[pIdx]) {
                p.textContent = pillar.points[pIdx]
              }
            })

            // 4. Card Image with Authentic WebGL Liquid Hover Mask Shader
            const imgContainer = card.querySelector(".framer-1gn68gi, [data-framer-name='Image']") as HTMLElement | null
            if (imgContainer) {
              imgContainer.style.setProperty("width", "450px", "important")
              imgContainer.style.setProperty("height", "100%", "important")
              imgContainer.style.setProperty("min-height", "500px", "important")
              imgContainer.style.setProperty("border-radius", "0 16px 16px 0", "important")
              imgContainer.style.setProperty("overflow", "hidden", "important")
              imgContainer.style.setProperty("position", "relative", "important")

              if (!imgContainer.getAttribute("data-keller-shader-mounted")) {
                imgContainer.setAttribute("data-keller-shader-mounted", "true")
                imgContainer.innerHTML = `
                  <div class="keller-problem-hover-wrapper" style="width:100%;height:100%;min-height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0 16px 16px 0;overflow:hidden">
                    <figure style="position:absolute;inset:0;margin:0;padding:0;z-index:1;width:100%;height:100%">
                      <img class="keller-base-img" src="${pillar.image}" alt="${pillar.alt}" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;border-radius:0 16px 16px 0;user-select:none;pointer-events:none;display:block" />
                    </figure>
                    <canvas class="keller-problem-stage-canvas" style="position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;background:transparent;border-radius:0 16px 16px 0"></canvas>
                  </div>
                `

                const wrapper = imgContainer.querySelector(".keller-problem-hover-wrapper") as HTMLElement | null
                const canvas = imgContainer.querySelector(".keller-problem-stage-canvas") as HTMLCanvasElement | null
                if (canvas && wrapper) {
                  initHoverMaskRevealThree({
                    container: wrapper,
                    canvas: canvas,
                    baseSrc: pillar.image,
                    hoverSrc: pillar.hoverImage,
                    circleBoost: 0.55,
                    curl: 20,
                    parallax: true,
                    parallaxAmount: 5,
                    parallaxSmoothing: 0.25,
                    shrinkTimeSeconds: 1.5,
                    splatRadius: 0.1,
                    texture: 0.4,
                    radius: 100,
                    blur: 0.5,
                    timeSpeed: 5,
                    velocityDissipation: 0.99,
                    pressureIterations: 25,
                    onHoverChange: (isHovered) => {
                      if (isHovered) {
                        card.classList.add("is-hovered")
                      } else {
                        card.classList.remove("is-hovered")
                      }
                    }
                  })
                }
              }
            }
          })
        })

      // Joyful Girl Image & Pitch Deck Problem Details Table
      const joyfulGirlSrc = "/assets/Joyful Girl Playing Musical Sensory Panels.png"
      document
        .querySelectorAll('img[src*="Q2IQvGe4yD37SNtWrvJ3LnHlTkU"], .framer-1t2gtm6 img, [data-framer-name="Image + Award List"] img')
        .forEach((imgEl) => {
          const img = imgEl as HTMLImageElement
          if (img) {
            if (img.getAttribute("src") !== joyfulGirlSrc) {
              img.src = joyfulGirlSrc
              img.srcset = ""
              img.alt = "Joyful Girl Playing Musical Sensory Panels - Keller Adapt"
            }
            img.style.objectFit = "contain"
            img.style.borderRadius = "16px"
          }
        })

      // Pitch Deck Problem Details Table Rows
      const problemStatsTable = [
        ["Prevalence", "Pediatric Sensory & ASD Diagnosis", "1 in 36", "Children Globally"],
        ["Import Markup", "Customs & Foreign Brand Markup", "5x – 10x", "Price Barrier"],
        ["School Shortage", "Special Schools Lacking Sensory Tools", "80%+", "Facilities in India"],
        ["Domestic Supply", "Specialized Indian Manufacturers", "< 10", "Severe Shortage"],
        ["Therapy Burden", "Monthly Out-of-Pocket Clinical Fees", "₹25k–50k", "Zero Insurance"],
        ["Caregiver Strain", "Parents Facing Chronic Sleep Deprivation", "84%", "Relentless Burnout"],
        ["Affordability Target", "Keller Adapt Radical Price Reduction", "60–80%", "Clinical Savings"],
      ]

      const awardRows = document.querySelectorAll(
        ".framer-yYZI0, [data-framer-name='Equal Space - No hover']"
      )
      awardRows.forEach((row, rowIdx) => {
        const data = problemStatsTable[rowIdx % problemStatsTable.length]
        if (!data) return
        const pTags = row.querySelectorAll("p, time")
        if (pTags.length >= 4) {
          if (pTags[0].textContent?.trim() !== data[0]) pTags[0].textContent = data[0]
          if (pTags[1].textContent?.trim() !== data[1]) pTags[1].textContent = data[1]
          if (pTags[2].textContent?.trim() !== data[2]) pTags[2].textContent = data[2]
          if (pTags[3].textContent?.trim() !== data[3]) pTags[3].textContent = data[3]
        }
      })

      // 5. Product Categories Section: 5 Core Categories representing all Keller Adapt products
      const productCategories = [
        {
          id: "sensory-pods",
          name: "Sensory Pods & Sanctuaries",
          badgeName: "SENSORY PODS",
          img: "/assets/products/theraspace.jpg",
          hoverImg: "/assets/products/calmcave.jpg",
          desc: "Inflatable decompression sanctuaries & calming cocoons: SafeSpace™ Inflatable Pod, CalmCave™ Blackout Retreat, SoloNest™ Hammock, LayerNest™ 5-Layer Compression.",
        },
        {
          id: "interactive-panels",
          name: "Interactive Sensory Panels",
          badgeName: "INTERACTIVE PANELS",
          img: "/assets/products/cat_interactive_panels.png",
          hoverImg: "/assets/products/symphonysense.png",
          desc: "Switch-adapted multi-sensory wall panels & acoustic tactile tools: LightLoops™ Interactive Sensory Wall, SymphonySense™ Music Explorer, Musical Sensory Wall Tiles.",
        },
        {
          id: "swings-motion",
          name: "Vestibular Swings & Ball Pits",
          badgeName: "SWINGS & BALL PITS",
          img: "/assets/products/groupflow.jpg",
          hoverImg: "/assets/products/flowswing.jpg",
          desc: "Illuminated interactive ball pit swings & clinical motion equipment: LumaSwing™ Sound-Reactive Ball Pit, FlowSwing™ Center Swings, GroupFlow™ Hammock.",
        },
        {
          id: "balance-rehab",
          name: "Adaptive Balance & Rehab",
          badgeName: "BALANCE & REHAB",
          img: "/assets/products/sensepath.jpg",
          hoverImg: "/assets/products/balanceseat.png",
          desc: "Ergonomic rehabilitation equipment & sensory pathways: BalanceBench™ Adjustable Board, BalanceSeat™ Sensory Rocker, SensePath™ Resistance Tunnel & Stepping Stones.",
        },
        {
          id: "deep-pressure",
          name: "Deep Pressure & Compression",
          badgeName: "DEEP PRESSURE",
          img: "/assets/products/cat_deep_pressure.png",
          hoverImg: "/assets/products/grouphug.jpg",
          desc: "Calming proprioceptive compression tools: HugMate™ Deep Pressure Sensory Therapy Wrap, GroupHug™ Full-Body Sensory Canoe, TheraSpace™ Turnkey Clinic Suites.",
        },
      ]

      // Update Section Heading & Description (Exact keller-full electric blue & typography)
      document.querySelectorAll(".framer-167r8p7 h2").forEach((el) => {
        const h2 = el as HTMLElement
        h2.innerHTML = `Recent <br class="framer-text">Projects`
        h2.style.setProperty("--framer-text-color", "var(--token-bd471799-7c28-40d8-97ea-a079a4323bc8, #1458e4)")
        h2.style.color = "#1458e4"
      })

      const expectedProductSubtitle =
        "These aren’t just beautiful visuals, they’re real projects, real builds, delivering real outcomes."
      document.querySelectorAll(".framer-10hsh9t p").forEach((p) => {
        if (p.textContent?.trim() !== expectedProductSubtitle) {
          p.textContent = expectedProductSubtitle
        }
      })

      // Update "All Projects" Button
      document.querySelectorAll(".framer-166kzi0-container").forEach((c) => {
        const p = c.querySelector("p")
        if (p && p.textContent?.trim() !== "ALL PROJECTS") {
          p.textContent = "ALL PROJECTS"
        }
        const a = c.querySelector("a")
        if (a && a.getAttribute("href") !== "javascript:void(0)") {
          a.setAttribute("href", "javascript:void(0)")
          a.onclick = (e) => {
            e.preventDefault()
            showSnackbar("Keller Adapt Products Catalog", "All 5 product categories and 15+ assistive tools are entering clinical production. Launching soon on Keller Adapt store.")
          }
        }
      })

      // Populate / Update 5 Category Cards inside .framer-1brjm81 using EXACT keller-full card design
      document.querySelectorAll(".framer-1brjm81").forEach((workContainer) => {
        const existingCards = workContainer.querySelectorAll(".keller-product-card[data-card-version='v14']")
        if (existingCards.length !== productCategories.length) {
          workContainer.innerHTML = productCategories
            .map(
              (cat, idx) => `
              <a class="framer-2uwybp framer-z52icn keller-product-card a-4" data-card-version="v14" data-product-idx="${idx}" data-product-id="${cat.id}" data-product-name="${cat.name}" href="javascript:void(0)">
                <div class="framer-3tqoox projects" data-framer-name="Projects">
                  
                  <!-- Category Image & Fluid Liquid Canvas (Exact refer / keller-full container) -->
                  <div class="framer-149akc5-container project-image-desktop" data-framer-name="Project Image (Desktop)" name="Project Image (Desktop)">
                    <div class="div-53" style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0px;overflow:clip">
                      <figure class="figure-2" style="position:absolute;inset:0;margin:0;padding:0;z-index:1;width:100%;height:100%">
                        <img class="img-10" src="${cat.img}" alt="${cat.name} - Keller Adapt" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none;display:block" />
                      </figure>
                      <canvas class="keller-stage-canvas canvas-2" id="stage" style="position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;mix-blend-mode:normal;background:transparent"></canvas>
                    </div>
                  </div>

                  <!-- Category Name Badge (Exact refer Default badge) -->
                  <div class="framer-x3yxns-container project-name" data-framer-name="Project Name" name="Project Name">
                    <div name="Project Name" class="framer-0Z1Tm framer-NtA5C framer-kGBsP framer-bquhuw framer-v-bquhuw default-9" data-framer-name="Default">
                      <div class="framer-4ytlds left-bar" data-framer-name="Left bar"></div>
                      <div class="framer-llqf96 div-52" data-framer-component-type="RichTextContainer">
                        <p class="framer-text framer-styles-preset-11madwt p-41" data-styles-preset="DgOWZVGTO" dir="auto">${cat.badgeName}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </a>
            `
            )
            .join("")

          // Attach authentic Framer WebGL Liquid Mask Reveal shader pipeline to each card
          workContainer.querySelectorAll(".keller-product-card").forEach((cardEl, idx) => {
            const card = cardEl as HTMLElement
            const canvas = card.querySelector(".keller-stage-canvas") as HTMLCanvasElement | null
            const cat = productCategories[idx]
            if (!canvas || !cat) return

            // Click modal / snackbar
            card.addEventListener("click", () => {
              showSnackbar(cat.name, cat.desc)
            })

            // Initialize authentic Three.js Eulerian fluid Navier-Stokes simulation + Simplex noise shader
            initHoverMaskRevealThree({
              container: card,
              canvas: canvas,
              baseSrc: cat.img,
              hoverSrc: cat.hoverImg,
              circleBoost: 0.55,
              curl: 20,
              parallax: true,
              parallaxAmount: 5,
              parallaxSmoothing: 0.25,
              shrinkTimeSeconds: 1.5,
              splatRadius: 0.1,
              texture: 0.4,
              radius: 100,
              blur: 0.5,
              timeSpeed: 5,
              velocityDissipation: 0.99,
              pressureIterations: 25,
              onHoverChange: (isHovered) => {
                if (isHovered) {
                  card.classList.add("is-hovered")
                } else {
                  card.classList.remove("is-hovered")
                }
              }
            })
          })
        }
      })

      // About Section Headline
      const expectedAboutHeadline =
        "We design and manufacture clinical-grade pediatric assistive solutions that empower children with special needs to learn, play, and live with radical independence."
      document.querySelectorAll(".framer-mqe0bw").forEach((aboutEl) => {
        const container = aboutEl.querySelector(".framer-ifbj2k-container")
        if (container) {
          const txt = container.textContent || ""
          if (txt.includes("beyond design") || txt.includes("smart, scalable")) {
            const words = expectedAboutHeadline.split(" ")
            container.innerHTML = `
              <div style="display:inline-block;font-family:'Geist', sans-serif;font-size:45px;font-style:normal;font-weight:400;letter-spacing:-0.02em;line-height:1.25em;color:rgb(255, 255, 255)">
                ${words
                  .map(
                    (w, i) =>
                      `<span data-wg="${i * 2}" style="white-space:nowrap;display:inline"><span style="display:inline-block;will-change:transform, opacity, color, filter">${w}</span></span>`
                  )
                  .join('<span style="display:inline-block">&nbsp;</span>')}
              </div>
            `
          }
        }
      })

      // Ensure rotator container attached if newly rendered
      document.querySelectorAll(".framer-16lsn04, .framer-1rxm8vu").forEach(setupRotatorContainer)

      // Initial stat render & arrow listeners
      renderStat(currentStatIdx, false)
      attachStatListeners()

      // Attach scroll reveal observer for all headings, subheadings, cards, and paragraphs
      attachScrollObserver()
    }

    // 4. Quick Stats Auto-Rotation (700 ms) with Authentic Keller Adapt Data
    const quickStats = [
      {
        num: "8+ Years",
        desc: "Dedicated to researching, designing, and refining pediatric assistive technology & sensory therapy solutions in continuous collaboration with therapists, parents, and educators.",
      },
      {
        num: "500+",
        desc: "Children and therapy participants actively benefiting from our sensory pods, Hugmate compression systems, and adaptive therapy solutions.",
      },
      {
        num: "100+",
        desc: "Therapy centers, special schools, clinics, and rehabilitation facilities worldwide that trust Keller Adapt for sensory and motor development.",
      },
      {
        num: "60-80%",
        desc: "More affordable than imported assistive products, breaking financial barriers to bring clinical-grade pediatric therapy into every home and school.",
      },
      {
        num: "100+",
        desc: "Pediatric therapy products designed and manufactured in-house with clinical safety, sensory care, and radical durability.",
      },
    ]

    let currentStatIdx = 0
    let statAutoInterval: NodeJS.Timeout | null = null

    const renderStat = (idx: number, animate = true) => {
      currentStatIdx = idx

      // Update diamond indicators across desktop & mobile
      document.querySelectorAll(".framer-dq4192, [data-framer-name='Indicators']").forEach((container) => {
        const indicators = container.querySelectorAll(".framer-4QBk8")
        indicators.forEach((ind, i) => {
          const el = ind as HTMLElement
          if (i === idx) {
            el.className = "framer-4QBk8 framer-pge58e framer-v-pge58e"
            el.setAttribute("data-framer-name", "Active")
            el.style.setProperty("background-color", "var(--token-85c12642-1128-4572-a3b3-1395f0b3a3fb, #FFFFFF)", "important")
            el.style.opacity = "1"
            el.style.transform = "rotate(45deg) scale(1.3)"
          } else {
            el.className = "framer-4QBk8 framer-pge58e framer-v-kfyevz"
            el.setAttribute("data-framer-name", "Inactive")
            el.style.setProperty("background-color", "rgb(255, 255, 255)", "important")
            el.style.opacity = "0.35"
            el.style.transform = "rotate(45deg) scale(1)"
          }
        })
      })

      // Update Desktop Card number and description
      document.querySelectorAll(".framer-uwhkiv-container").forEach((card) => {
        const numP = card.querySelector(
          ".framer-styles-preset-3vn0yn, .framer-1dd1rch p, .framer-oedzb0 p, .framer-hl7egy p, .framer-1bnx694 p, .framer-o60pjs p"
        ) as HTMLElement | null
        const descP = card.querySelector(
          ".framer-styles-preset-1j6ngiv, .framer-vqbtcn p, .framer-86w321 p, .framer-1m19xcu p, .framer-1cm7tc4 p, .framer-17btgh6 p"
        ) as HTMLElement | null

        if (numP) {
          if (animate) {
            numP.style.transition = "opacity 0.22s ease-out, transform 0.22s ease-out"
            numP.style.opacity = "0"
            numP.style.transform = "translateY(6px)"
          }
          setTimeout(() => {
            numP.textContent = quickStats[idx].num
            if (animate) {
              numP.style.opacity = "1"
              numP.style.transform = "translateY(0)"
            }
          }, animate ? 160 : 0)
        }

        if (descP) {
          if (animate) {
            descP.style.transition = "opacity 0.22s ease-out, transform 0.22s ease-out"
            descP.style.opacity = "0"
            descP.style.transform = "translateY(4px)"
          }
          setTimeout(() => {
            descP.textContent = quickStats[idx].desc
            if (animate) {
              descP.style.opacity = "1"
              descP.style.transform = "translateY(0)"
            }
          }, animate ? 160 : 0)
        }
      })
    }

    let isHoveringStats = false

    const startStatAutoCycle = () => {
      if (statAutoInterval) clearInterval(statAutoInterval)
      statAutoInterval = setInterval(() => {
        if (isHoveringStats) return
        const nextIdx = (currentStatIdx + 1) % quickStats.length
        renderStat(nextIdx, true)
      }, 3500)
    }

    const attachStatListeners = () => {
      // Pause on hover so user can read comfortably
      document.querySelectorAll(".framer-uwhkiv-container").forEach((card) => {
        const el = card as HTMLElement
        el.onmouseenter = () => {
          isHoveringStats = true
        }
        el.onmouseleave = () => {
          isHoveringStats = false
        }
      })

      // Left Arrow
      document.querySelectorAll(".framer-3gtoeo-container").forEach((btn) => {
        const el = btn as HTMLElement
        el.style.cursor = "pointer"
        el.onclick = (e: MouseEvent) => {
          e.preventDefault()
          e.stopPropagation()
          const prevIdx = (currentStatIdx - 1 + quickStats.length) % quickStats.length
          renderStat(prevIdx, true)
          startStatAutoCycle()
        }
      })

      // Right Arrow
      document.querySelectorAll(".framer-11m0tck-container").forEach((btn) => {
        const el = btn as HTMLElement
        el.style.cursor = "pointer"
        el.onclick = (e: MouseEvent) => {
          e.preventDefault()
          e.stopPropagation()
          const nextIdx = (currentStatIdx + 1) % quickStats.length
          renderStat(nextIdx, true)
          startStatAutoCycle()
        }
      })

      // Indicators click
      document.querySelectorAll(".framer-dq4192, [data-framer-name='Indicators']").forEach((container) => {
        const indicators = container.querySelectorAll(".framer-4QBk8")
        indicators.forEach((ind, i) => {
          const el = ind as HTMLElement
          el.style.cursor = "pointer"
          el.onclick = (e: MouseEvent) => {
            e.preventDefault()
            e.stopPropagation()
            renderStat(i, true)
            startStatAutoCycle()
          }
        })
      })
    }

    // Trigger hero reveal
    const triggerHeroReveal = () => {
      document.querySelectorAll(".keller-word").forEach((el) => {
        el.classList.add("keller-revealed")
      })
      document.querySelectorAll(".keller-subtitle-reveal").forEach((el) => {
        el.classList.add("keller-revealed")
      })
      document.querySelectorAll(".keller-btn-reveal").forEach((el) => {
        el.classList.add("keller-revealed")
      })
    }

    window.addEventListener("keller:curtain-dismissed", triggerHeroReveal)

    // Universal Scroll Observer for all headings & texts
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view")
            scrollObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    )

    const attachScrollObserver = () => {
      const textElements = document.querySelectorAll(
        "h2, h3, h4, .framer-10ahakb p, .framer-x3yxns-container p, .framer-149akc5-container p, .framer-styles-preset-177h6q9 p, blockquote p, [data-styles-preset='ltdbqJp2k'], [data-styles-preset='WUD3Mokgm']"
      )
      textElements.forEach((el) => {
        if (!el.classList.contains("keller-scroll-reveal") && !el.closest(".framer-iml60k")) {
          el.classList.add("keller-scroll-reveal")
          scrollObserver.observe(el)
        }
      })
    }

    enforceTexts()
    startStatAutoCycle()
    const timer1 = setTimeout(enforceTexts, 100)
    const timer2 = setTimeout(enforceTexts, 500)
    const timer3 = setTimeout(enforceTexts, 1500)

    // Auto-reveal hero if splash is already dismissed or absent
    if (
      document.documentElement.classList.contains("keller-curtain-dismissed") ||
      !document.getElementById("splash-screen")
    ) {
      setTimeout(triggerHeroReveal, 100)
    } else {
      setTimeout(triggerHeroReveal, 3800)
    }

    // 5. Intercept Click on "Go to Store" & Product Marquee items
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // Product Marquee Click
      const item = target.closest(".keller-product-item")
      if (item) {
        e.preventDefault()
        e.stopPropagation()
        const product = item.getAttribute("data-product") || "Keller Adapt Product"
        anyWindow.showStoreSnackbar?.(product)
        return
      }

      // Go to Store Button Click
      const storeBtn = target.closest(
        'a[href*="contact"], .framer-18sahde-container a, .framer-18sahde-container, [data-framer-name="Hero"] a'
      )
      if (storeBtn) {
        const txt = (storeBtn.textContent || "").toLowerCase()
        if (txt.includes("store") || txt.includes("talk") || storeBtn.closest(".framer-18sahde-container")) {
          e.preventDefault()
          e.stopPropagation()
          anyWindow.showStoreSnackbar?.()
        }
      }
    }

    document.addEventListener("click", handleGlobalClick, true)

    return () => {
      clearInterval(rotatorInterval)
      if (statAutoInterval) clearInterval(statAutoInterval)
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      window.removeEventListener("keller:curtain-dismissed", triggerHeroReveal)
      scrollObserver.disconnect()
      document.removeEventListener("click", handleGlobalClick, true)
    }
  }, [])

  return null
}
