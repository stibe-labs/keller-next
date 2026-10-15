import fs from "fs"
import path from "path"
import FramerRuntime from "./FramerRuntime"

interface FramerPageProps {
  pageName: "home" | "about" | "portfolio"
}

function extractBalancedTag(str: string, tagId: string): string {
  const start = str.indexOf(`<div id="${tagId}"`)
  if (start === -1) return ""
  let depth = 0
  let end = -1
  const tagRe = /<\/?div\b[^>]*>/g
  tagRe.lastIndex = start
  let m: RegExpExecArray | null
  while ((m = tagRe.exec(str)) !== null) {
    if (m[0].startsWith("</div")) {
      depth--
      if (depth === 0) {
        end = m.index + m[0].length
        break
      }
    } else if (!m[0].endsWith("/>")) {
      depth++
    }
  }
  return end !== -1 ? str.slice(start, end) : ""
}

export default function FramerPage({ pageName }: FramerPageProps) {
  const filePath = path.join(process.cwd(), "data", "framer-sources", `${pageName}.html`)
  let html = fs.readFileSync(filePath, "utf8")

  // Normalize all relative assets to absolute /assets/
  html = html
    .replace(/(href|src)=["'](?:\.\.\/)?assets\//g, '$1="/assets/')
    .replace(/srcset=["']([^"']*)["']/g, (match, val) => {
      const fixed = val.replace(/(^|\s|,)(?:\.\.\/)?assets\//g, '$1/assets/')
      return `srcset="${fixed}"`
    })
    .replace(/url\((['"]?)(?:\.\.\/)?assets\//g, 'url($1/assets/')

  // 1. Extract <style> blocks
  const styles = (html.match(/<style\b[^>]*>[\s\S]*?<\/style>/gi) || []).join("\n")

  // 2. Extract <div id="main" ...> with 100% balanced tags
  const mainHtml = extractBalancedTag(html, "main")

  // 3. Extract <div id="__framer-badge-container">
  const badgeHtml = extractBalancedTag(html, "__framer-badge-container")

  // 4. Extract <div id="svg-templates">
  const svgHtml = extractBalancedTag(html, "svg-templates")

  // 5. Extract data payload scripts (appear data, breakpoints, handover)
  const appearContentMatch = html.match(/<script type="framer\/appear" id="__framer__appearAnimationsContent">[\s\S]*?<\/script>/)
  const breakpointsMatch = html.match(/<script type="framer\/appear" id="__framer__breakpoints">[\s\S]*?<\/script>/)
  const handoverMatch = html.match(/<script type="framer\/handover" id="__framer__handoverData">[\s\S]*?<\/script>/)

  // 6. Extract animator script
  const animatorMatch = html.match(/<script>var animator=\(\(\)=>[\s\S]*?<\/script>/)
  const animatorCode = animatorMatch ? animatorMatch[0].replace(/<\/?script>/g, "") : ""

  // Find module script src for FramerRuntime
  const scriptMainMatch = html.match(/src="([^"]*script_main[^"]*)"/)
  let scriptSrc = scriptMainMatch
    ? scriptMainMatch[1]
    : "/assets/framerusercontent.com/sites/48iqDcsyBgp1ESyfs1JsJD/script_main.Ck6VmPDG.mjs"
  scriptSrc = scriptSrc.replace(/^\.\.\//, "/").replace(/^assets\//, "/assets/")
  if (!scriptSrc.startsWith("/")) scriptSrc = "/" + scriptSrc

  const fullFramerHtml = `
${styles}
<script>
  typeof document<"u"&&(window.process={...window.process,env:{...window.process?.env,NODE_ENV:"production"}});
  if (typeof window !== "undefined") {
    window.addEventListener("error", function(e) {
      if (e.message && (e.message.includes("WebGL") || e.message.includes("webgl"))) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return true;
      }
    }, true);
    window.addEventListener("unhandledrejection", function(e) {
      if (e.reason && String(e.reason).includes("WebGL")) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return true;
      }
    }, true);
  }
</script>
${mainHtml}
${badgeHtml}
${svgHtml}
${appearContentMatch ? appearContentMatch[0] : ""}
${breakpointsMatch ? breakpointsMatch[0] : ""}
${handoverMatch ? handoverMatch[0] : ""}
`.trim()

  return (
    <>
      <div
        id="framer-content-root"
        suppressHydrationWarning
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: fullFramerHtml }}
      />
      <FramerRuntime scriptSrc={scriptSrc} animatorCode={animatorCode} />
    </>
  )
}

