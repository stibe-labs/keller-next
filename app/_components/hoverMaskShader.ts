import * as THREE from "three"

export interface HoverMaskShaderOptions {
  container: HTMLElement
  canvas: HTMLCanvasElement
  baseSrc: string
  hoverSrc: string
  circleBoost?: number
  curl?: number
  parallax?: boolean
  parallaxAmount?: number
  parallaxSmoothing?: number
  shrinkTimeSeconds?: number
  splatRadius?: number
  texture?: number
  radius?: number
  blur?: number
  timeSpeed?: number
  velocityDissipation?: number
  pressureIterations?: number
  onHoverChange?: (isHovered: boolean) => void
}

const SIM_VERTEX_SHADER = `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }`
const ADVECTION_FRAGMENT_SHADER = `precision highp float;
      varying vec2 vUv;
      uniform sampler2D u_velocity;
      uniform sampler2D u_source;
      uniform vec2 u_texelSize;
      uniform float u_dt;
      uniform float u_dissipationMultiply;
      void main() {
        vec2 vel = texture2D(u_velocity, vUv).xy;
        vec2 pos = vUv - vel * u_texelSize * u_dt;
        gl_FragColor = texture2D(u_source, pos) * u_dissipationMultiply;
      }`
const MAIN_FRAGMENT_SHADER = `precision highp float;
varying vec2 vUv;
uniform float u_time;
uniform vec2 u_mouse;
      uniform float u_progress;
      uniform vec2 u_planeRes;
      uniform float u_radius;
      uniform float u_blur;
      uniform float u_circleBoost;
      uniform float u_noiseFreq;
      uniform float u_noiseStrength;
      uniform float u_noiseSize;
      uniform float u_timeSpeed;
      uniform sampler2D u_frontImage;
      uniform float u_frontImageAspect;
      uniform float u_containerAspect;
      uniform vec2 u_windowSize;
      uniform vec2 u_containerOffset;
      uniform vec2 u_parallaxOffset;
      uniform float u_parallaxMax;

              // Simplex noise 3D from https://github.com/ashima/webgl-noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
        // First corner
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0 + 3.0 * C.x = -0.5 = -D.y

        // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  // mod(p,7*7)

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        // Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }

      uniform sampler2D u_densityTex;

      void main() {
        vec2 uv = vUv;

        // Sample density directly - blob circularity is achieved via elliptical splats
        float density = texture2D(u_densityTex, uv).r * u_circleBoost * u_progress;

        // Noise for liquid texture edges
        float offx = uv.x + (u_time * u_timeSpeed * 0.1) + sin(uv.y + u_time * u_timeSpeed * 0.1);
        float offy = uv.y - cos(u_time * u_timeSpeed * 0.001) * 0.01;
        float effectiveNoiseFreq = u_noiseFreq / u_noiseSize;
        float n1 = snoise(vec3(offx * effectiveNoiseFreq, offy * effectiveNoiseFreq, u_time * u_timeSpeed)) - 1.0;
        float n2 = snoise(vec3(offx * effectiveNoiseFreq * 0.5, offy * effectiveNoiseFreq * 0.5, u_time * u_timeSpeed * 0.7)) - 1.0;
        float n = (n1 + n2 * 0.5) * 0.7;

        float finalMask = smoothstep(0.35, 0.55, (n * u_noiseStrength) + pow(density, 1.5));

        // Responsive UV mapping for front image (maintains aspect ratio like object-fit: cover)
        // For "cover": scale up so the image fills the container, cropping excess
        vec2 responsiveUV = uv;
        
        if (u_frontImageAspect > 0.0 && u_containerAspect > 0.0) {
            if (u_frontImageAspect > u_containerAspect) {
              // Image is wider than container - fit height, crop width
              float scale = u_frontImageAspect / u_containerAspect;
              responsiveUV.x = (uv.x - 0.5) / scale + 0.5;
            } else {
              // Image is taller than container - fit width, crop height
              float scale = u_containerAspect / u_frontImageAspect;
              responsiveUV.y = (uv.y - 0.5) / scale + 0.5;
            }
        }

        // Parallax the REVEALED (front) image: move opposite to cursor (add offset so image shifts away from cursor)
        vec2 inset = u_parallaxMax / u_planeRes;
        vec2 baseUV = inset + responsiveUV * (1.0 - 2.0 * inset);
        vec2 parallaxUV = u_parallaxOffset / u_planeRes;
        vec2 sampleUV = baseUV + parallaxUV;

        // Sample the front image with parallax and apply the mask
        vec4 frontColor = texture2D(u_frontImage, sampleUV);
        float outAlpha = frontColor.a * finalMask;
        // Hard cutoff: fully transparent where mask is negligible
        if (outAlpha < 0.01) outAlpha = 0.0;

        // Output straight alpha - THREE's default blend (SRC_ALPHA, ONE_MINUS_SRC_ALPHA) 
        // produces correct premultiplied result for canvas compositing
        gl_FragColor = vec4(frontColor.rgb, outAlpha);
      }`
const SPLAT_VELOCITY_SHADER = `precision highp float;
varying vec2 vUv;
uniform vec2 u_point;
uniform vec2 u_splatColor;
uniform float u_radius;
      uniform float u_aspectRatio;
      uniform sampler2D u_target;
      void main() {
        vec2 p = vUv - u_point;
        // Correct for aspect ratio so blob appears circular in pixel space
        // aspectRatio = width/height
        // Wide (aspect > 1): UV-X maps to more pixels, so compress X to compensate
        // Tall (aspect < 1): UV-Y maps to more pixels, so compress Y to compensate  
        p.x *= max(u_aspectRatio, 1.0);
        p.y *= max(1.0 / u_aspectRatio, 1.0);
        float splat = exp(-dot(p, p) / (u_radius * u_radius));
        vec4 base = texture2D(u_target, vUv);
        base.xy += splat * u_splatColor;
        gl_FragColor = base;
      }`
const SPLAT_DENSITY_SHADER = `precision highp float;
varying vec2 vUv;
uniform vec2 u_point;
uniform float u_radius;
uniform float u_aspectRatio;
uniform float u_densityAmount;
uniform sampler2D u_target;
      void main() {
        vec2 p = vUv - u_point;
        // Correct for aspect ratio so blob appears circular in pixel space
        p.x *= max(u_aspectRatio, 1.0);
        p.y *= max(1.0 / u_aspectRatio, 1.0);
        float splat = exp(-dot(p, p) / (u_radius * u_radius));
        float base = texture2D(u_target, vUv).r;
        gl_FragColor = vec4(base + splat * u_densityAmount, 0.0, 0.0, 1.0);
      }`
const DIVERGENCE_SHADER = `precision highp float;
varying vec2 vUv;
uniform sampler2D u_velocity;
uniform vec2 u_texelSize;
void main() {
  float L = texture2D(u_velocity, vUv - vec2(u_texelSize.x, 0.0)).x;
float R = texture2D(u_velocity, vUv + vec2(u_texelSize.x, 0.0)).x;
        float T = texture2D(u_velocity, vUv + vec2(0.0, u_texelSize.y)).y;
        float B = texture2D(u_velocity, vUv - vec2(0.0, u_texelSize.y)).y;
        float div = 0.5 * ((R - L) + (T - B));
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }`
const PRESSURE_SHADER = `precision highp float;
varying vec2 vUv;
uniform sampler2D u_pressure;
uniform sampler2D u_divergence;
uniform vec2 u_texelSize;
      void main() {
        float L = texture2D(u_pressure, vUv - vec2(u_texelSize.x, 0.0)).r;
        float R = texture2D(u_pressure, vUv + vec2(u_texelSize.x, 0.0)).r;
        float T = texture2D(u_pressure, vUv + vec2(0.0, u_texelSize.y)).r;
        float B = texture2D(u_pressure, vUv - vec2(0.0, u_texelSize.y)).r;
        float C = texture2D(u_divergence, vUv).r;
        float p = (L + R + T + B - C) * 0.25;
        gl_FragColor = vec4(p, 0.0, 0.0, 1.0);
      }`
const GRADIENT_SUBTRACT_SHADER = `precision highp float;
varying vec2 vUv;
uniform sampler2D u_velocity;
uniform sampler2D u_pressure;
uniform vec2 u_texelSize;
      void main() {
        float L = texture2D(u_pressure, vUv - vec2(u_texelSize.x, 0.0)).r;
        float R = texture2D(u_pressure, vUv + vec2(u_texelSize.x, 0.0)).r;
        float T = texture2D(u_pressure, vUv + vec2(0.0, u_texelSize.y)).r;
        float B = texture2D(u_pressure, vUv - vec2(0.0, u_texelSize.y)).r;
        vec2 vel = texture2D(u_velocity, vUv).xy;
        vel.x -= 0.5 * (R - L);
        vel.y -= 0.5 * (T - B);
        gl_FragColor = vec4(vel, 0.0, 1.0);
      }`
const CURL_SHADER = `precision highp float;
varying vec2 vUv;
uniform sampler2D u_velocity;
uniform vec2 u_texelSize;
uniform float u_curl;
void main() {
        float vL = texture2D(u_velocity, vUv - vec2(u_texelSize.x, 0.0)).y;
        float vR = texture2D(u_velocity, vUv + vec2(u_texelSize.x, 0.0)).y;
        float vT = texture2D(u_velocity, vUv + vec2(0.0, u_texelSize.y)).x;
        float vB = texture2D(u_velocity, vUv - vec2(0.0, u_texelSize.y)).x;
        float curl = (vR - vL) - (vT - vB);
        vec2 vel = texture2D(u_velocity, vUv).xy;
        float strength = u_curl * 0.00015;
        vel.x += strength * (vT - vB);
        vel.y += strength * (vL - vR);
        gl_FragColor = vec4(vel, 0.0, 1.0);
      }`

function checkWebGLSupport(canvas: HTMLCanvasElement): boolean {
  try {
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl")
    return !!gl
  } catch {
    return false
  }
}

// -------------------------------------------------------------
// WebGL Three.js Navier-Stokes Eulerian Simulation
// -------------------------------------------------------------
function initWebGLSimulation(opts: HoverMaskShaderOptions): () => void {
  const {
    container,
    canvas,
    baseSrc,
    hoverSrc,
    circleBoost = 0.55,
    curl = 20,
    parallax = true,
    parallaxAmount = 5,
    parallaxSmoothing = 0.25,
    shrinkTimeSeconds = 1.5,
    splatRadius = 0.1,
    texture = 0.4,
    radius = 100,
    blur = 0.5,
    timeSpeed = 5,
    velocityDissipation = 0.99,
    pressureIterations = 25,
    onHoverChange
  } = opts

  let isRendering = false
  let animFrameId = 0
  let isDisposed = false

  let renderer: THREE.WebGLRenderer
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  } catch (err) {
    console.warn("WebGL context creation failed for hover mask shader:", err)
    return () => {}
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setClearColor(0, 0)

  const initialW = Math.max(container.clientWidth, 300)
  const initialH = Math.max(container.clientHeight, 200)
  renderer.setSize(initialW, initialH)

  const camera = new THREE.PerspectiveCamera(
    180 * (2 * Math.atan(initialH / 2 / 800)) / Math.PI,
    initialW / initialH,
    1,
    5000
  )
  camera.position.set(0, 0, 800)

  const scene = new THREE.Scene()

  const mapRadius = (val: number) => 10 + (val - 10) * (190 / 990)
  const mapBlur = (val: number) => 0.2 + val * 2.8
  const mapCircleBoost = (val: number) => 0.5 + val * 3.5
  const mapTimeSpeed = (val: number) => val * 0.1
  const mapTexture = (val: number) => ({
    freq: 2 + val * 12,
    strength: val * 3,
    size: 1 - val * 0.7
  })

  const texConfig = mapTexture(texture)
  const simScale = 0.5
  let simW = Math.max(1, Math.floor(initialW * simScale))
  let simH = Math.max(1, Math.floor(initialH * simScale))

  const loader = new THREE.TextureLoader()
  const frontTex = loader.load(hoverSrc || baseSrc, () => {
    if (frontTex.image && !isDisposed) {
      uniforms.u_frontImageAspect.value = frontTex.image.width / frontTex.image.height
      if (isRendering) renderer.render(scene, camera)
    }
  })
  frontTex.minFilter = THREE.LinearFilter

  const rtOpts: THREE.RenderTargetOptions = {
    type: THREE.HalfFloatType,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    generateMipmaps: false,
    depthBuffer: false,
    stencilBuffer: false
  }

  const createRT = (w: number, h: number) => new THREE.WebGLRenderTarget(w, h, rtOpts)
  let velA = createRT(simW, simH)
  let velB = createRT(simW, simH)
  let divergenceRT = createRT(simW, simH)
  let pressureA = createRT(simW, simH)
  let pressureB = createRT(simW, simH)
  let densityRT = createRT(simW, simH)
  let densityTempRT = createRT(simW, simH)

  const disposeRTs = () => {
    velA.dispose()
    velB.dispose()
    divergenceRT.dispose()
    pressureA.dispose()
    pressureB.dispose()
    densityRT.dispose()
    densityTempRT.dispose()
  }

  const resizeRTs = (w: number, h: number) => {
    const nextW = Math.max(1, Math.floor(w * simScale))
    const nextH = Math.max(1, Math.floor(h * simScale))
    if (nextW !== simW || nextH !== simH) {
      simW = nextW
      simH = nextH
      disposeRTs()
      velA = createRT(simW, simH)
      velB = createRT(simW, simH)
      divergenceRT = createRT(simW, simH)
      pressureA = createRT(simW, simH)
      pressureB = createRT(simW, simH)
      densityRT = createRT(simW, simH)
      densityTempRT = createRT(simW, simH)
    }
  }

  const simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const simGeom = new THREE.PlaneGeometry(2, 2, 1, 1)
  const prevMouse = { x: 0.5, y: 0.5 }
  const mouseDelta = { x: 0, y: 0 }

  const uniforms = {
    u_time: { value: 0 },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    u_progress: { value: 0 },
    u_planeRes: { value: new THREE.Vector2(1, 1) },
    u_radius: { value: mapRadius(radius) },
    u_blur: { value: mapBlur(blur) },
    u_circleBoost: { value: mapCircleBoost(circleBoost) },
    u_noiseFreq: { value: texConfig.freq },
    u_noiseStrength: { value: texConfig.strength },
    u_noiseSize: { value: texConfig.size },
    u_timeSpeed: { value: mapTimeSpeed(timeSpeed) },
    u_frontImage: { value: frontTex },
    u_frontImageAspect: { value: 1 },
    u_containerAspect: { value: 1 },
    u_parallaxOffset: { value: new THREE.Vector2(0, 0) },
    u_parallaxMax: { value: parallax ? Math.max(0, Math.min(200, parallaxAmount ?? 0)) : 0 },
    u_windowSize: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    u_containerOffset: { value: new THREE.Vector2(0, 0) },
    u_simResolution: { value: new THREE.Vector2(simW, simH) },
    u_densityTex: { value: densityRT.texture }
  }

  const mainGeom = new THREE.PlaneGeometry(1, 1, 1, 1)
  const mainMaterial = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: MAIN_FRAGMENT_SHADER,
    transparent: true
  })
  const mainMesh = new THREE.Mesh(mainGeom, mainMaterial)
  scene.add(mainMesh)

  const simScene = new THREE.Scene()
  const texelSize = new THREE.Vector2(1 / simW, 1 / simH)

  const splatVelocityMat = new THREE.ShaderMaterial({
    vertexShader: SIM_VERTEX_SHADER,
    fragmentShader: SPLAT_VELOCITY_SHADER,
    uniforms: {
      u_point: { value: new THREE.Vector2(0.5, 0.5) },
      u_splatColor: { value: new THREE.Vector2(0, 0) },
      u_radius: { value: 0.02 },
      u_aspectRatio: { value: 1 },
      u_target: { value: velA.texture }
    },
    depthWrite: false
  })
  const simMesh = new THREE.Mesh(simGeom, splatVelocityMat)
  simScene.add(simMesh)

  const splatDensityMat = new THREE.ShaderMaterial({
    vertexShader: SIM_VERTEX_SHADER,
    fragmentShader: SPLAT_DENSITY_SHADER,
    uniforms: {
      u_point: { value: new THREE.Vector2(0.5, 0.5) },
      u_radius: { value: 0.02 },
      u_aspectRatio: { value: 1 },
      u_densityAmount: { value: 1 },
      u_target: { value: densityRT.texture }
    },
    depthWrite: false
  })

  const advectionMat = new THREE.ShaderMaterial({
    vertexShader: SIM_VERTEX_SHADER,
    fragmentShader: ADVECTION_FRAGMENT_SHADER,
    uniforms: {
      u_velocity: { value: velA.texture },
      u_source: { value: velA.texture },
      u_texelSize: { value: texelSize.clone() },
      u_dt: { value: 1 },
      u_dissipationMultiply: { value: 0.99 }
    },
    depthWrite: false
  })

  const divergenceMat = new THREE.ShaderMaterial({
    vertexShader: SIM_VERTEX_SHADER,
    fragmentShader: DIVERGENCE_SHADER,
    uniforms: {
      u_velocity: { value: velA.texture },
      u_texelSize: { value: texelSize.clone() }
    },
    depthWrite: false
  })

  const pressureMat = new THREE.ShaderMaterial({
    vertexShader: SIM_VERTEX_SHADER,
    fragmentShader: PRESSURE_SHADER,
    uniforms: {
      u_pressure: { value: pressureA.texture },
      u_divergence: { value: divergenceRT.texture },
      u_texelSize: { value: texelSize.clone() }
    },
    depthWrite: false
  })

  const gradSubtractMat = new THREE.ShaderMaterial({
    vertexShader: SIM_VERTEX_SHADER,
    fragmentShader: GRADIENT_SUBTRACT_SHADER,
    uniforms: {
      u_velocity: { value: velA.texture },
      u_pressure: { value: pressureA.texture },
      u_texelSize: { value: texelSize.clone() }
    },
    depthWrite: false
  })

  const curlMat = new THREE.ShaderMaterial({
    vertexShader: SIM_VERTEX_SHADER,
    fragmentShader: CURL_SHADER,
    uniforms: {
      u_velocity: { value: velA.texture },
      u_texelSize: { value: texelSize.clone() },
      u_curl: { value: curl }
    },
    depthWrite: false
  })

  const densityAdvectMat = new THREE.ShaderMaterial({
    vertexShader: SIM_VERTEX_SHADER,
    fragmentShader: ADVECTION_FRAGMENT_SHADER,
    uniforms: {
      u_velocity: { value: velA.texture },
      u_source: { value: densityRT.texture },
      u_texelSize: { value: texelSize.clone() },
      u_dt: { value: 1 },
      u_dissipationMultiply: { value: 0.93 }
    },
    depthWrite: false
  })

  const currentPlaneSize = new THREE.Vector2()
  const updateSize = () => {
    if (isDisposed) return
    const cw = Math.max(container.clientWidth, 2)
    const ch = Math.max(container.clientHeight, 2)
    currentPlaneSize.set(cw, ch)
    mainMesh.position.set(0, 0, 0)
    mainMesh.scale.set(cw, ch, 1)
    renderer.setSize(cw, ch, false)
    camera.aspect = cw / ch
    camera.updateProjectionMatrix()
    camera.position.z = 800
    camera.lookAt(0, 0, 0)

    uniforms.u_planeRes.value.set(cw, ch)
    uniforms.u_windowSize.value.set(window.innerWidth, window.innerHeight)
    const rect = container.getBoundingClientRect()
    uniforms.u_containerOffset.value.set(rect.left, rect.top)

    const aspect = cw / ch
    uniforms.u_containerAspect.value = aspect
    if (frontTex.image) {
      uniforms.u_frontImageAspect.value = frontTex.image.width / frontTex.image.height
    }
    resizeRTs(cw, ch)
    texelSize.set(1 / simW, 1 / simH)
    uniforms.u_simResolution.value.set(simW, simH)
    if (isRendering) renderer.render(scene, camera)
  }
  updateSize()

  let targetProgress = 0
  const clock = new THREE.Clock()
  const targetParallax = new THREE.Vector2(0, 0)

  const isVisible = () => {
    const rect = container.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0
  }

  const animate = () => {
    if (isDisposed) return
    if (!isVisible() && targetProgress === 0 && uniforms.u_progress.value < 0.001) {
      isRendering = false
      return
    }
    isRendering = true
    animFrameId = requestAnimationFrame(animate)

    const dt = clock.getDelta()
    uniforms.u_time.value += dt

    if (!parallax) {
      uniforms.u_parallaxOffset.value.set(0, 0)
      targetParallax.set(0, 0)
    } else {
      const smoothVal = Math.max(0, Math.min(1, parallaxSmoothing ?? 0))
      if (smoothVal === 0) {
        uniforms.u_parallaxOffset.value.copy(targetParallax)
      } else {
        const baseRate = 0.04
        const rate = baseRate + (0.25 - baseRate) * smoothVal
        const factor = 1 - Math.exp(-dt / Math.max(1e-6, rate))
        uniforms.u_parallaxOffset.value.lerp(targetParallax, factor)
      }
    }

    const mouse = uniforms.u_mouse.value
    mouseDelta.x = mouse.x - prevMouse.x
    mouseDelta.y = mouse.y - prevMouse.y
    prevMouse.x = mouse.x
    prevMouse.y = mouse.y

    const cw = Math.max(container.clientWidth, 2)
    const ch = Math.max(container.clientHeight, 2)
    const aspect = cw / ch
    uniforms.u_containerAspect.value = aspect
    uniforms.u_planeRes.value.set(cw, ch)

    const curSize = renderer.getSize(new THREE.Vector2())
    if (curSize.x !== cw || curSize.y !== ch) {
      renderer.setSize(cw, ch, false)
      camera.aspect = aspect
      camera.updateProjectionMatrix()
      mainMesh.scale.set(cw, ch, 1)
    }
    resizeRTs(cw, ch)

    const px = mouse.x
    const py = mouse.y
    const sRadius = Math.max(0.005, splatRadius)
    const vDissipation = Math.max(0.9, Math.min(1, velocityDissipation))
    const densityDissipation = 0.01 ** (1 / (60 * Math.max(0.5, Math.min(10, shrinkTimeSeconds))))
    const iterations = Math.max(10, Math.min(50, Math.round(pressureIterations)))

    texelSize.set(1 / simW, 1 / simH)
    advectionMat.uniforms.u_texelSize.value.copy(texelSize)
    divergenceMat.uniforms.u_texelSize.value.copy(texelSize)
    pressureMat.uniforms.u_texelSize.value.copy(texelSize)
    gradSubtractMat.uniforms.u_texelSize.value.copy(texelSize)
    densityAdvectMat.uniforms.u_texelSize.value.copy(texelSize)

    const gl = renderer.getContext()
    gl.disable(gl.BLEND)

    // 1. Splat velocity
    splatVelocityMat.uniforms.u_point.value.set(px, py)
    splatVelocityMat.uniforms.u_aspectRatio.value = aspect
    splatVelocityMat.uniforms.u_splatColor.value.set(mouseDelta.x * 30, mouseDelta.y * 30)
    splatVelocityMat.uniforms.u_radius.value = sRadius
    splatVelocityMat.uniforms.u_target.value = velA.texture
    simMesh.material = splatVelocityMat
    renderer.setRenderTarget(velB)
    renderer.render(simScene, simCamera)

    // 2. Splat density
    splatDensityMat.uniforms.u_point.value.set(px, py)
    splatDensityMat.uniforms.u_aspectRatio.value = aspect
    splatDensityMat.uniforms.u_radius.value = sRadius
    splatDensityMat.uniforms.u_densityAmount.value = 1
    splatDensityMat.uniforms.u_target.value = densityRT.texture
    simMesh.material = splatDensityMat
    renderer.setRenderTarget(densityTempRT)
    renderer.render(simScene, simCamera)

    // 3. Advect velocity
    advectionMat.uniforms.u_velocity.value = velB.texture
    advectionMat.uniforms.u_source.value = velB.texture
    advectionMat.uniforms.u_dt.value = 1
    advectionMat.uniforms.u_dissipationMultiply.value = vDissipation
    simMesh.material = advectionMat
    renderer.setRenderTarget(velA)
    renderer.render(simScene, simCamera)

    // 4. Vorticity / Curl
    if (curl > 0) {
      curlMat.uniforms.u_velocity.value = velA.texture
      curlMat.uniforms.u_curl.value = curl
      simMesh.material = curlMat
      renderer.setRenderTarget(velB)
      renderer.render(simScene, simCamera)
    }

    const activeVelTex = curl > 0 ? velB.texture : velA.texture

    // 5. Divergence
    divergenceMat.uniforms.u_velocity.value = activeVelTex
    simMesh.material = divergenceMat
    renderer.setRenderTarget(divergenceRT)
    renderer.render(simScene, simCamera)

    // 6. Pressure Jacobi iterations
    pressureMat.uniforms.u_divergence.value = divergenceRT.texture
    let pRead = pressureA
    let pWrite = pressureB
    for (let i = 0; i < iterations; i++) {
      pressureMat.uniforms.u_pressure.value = pRead.texture
      simMesh.material = pressureMat
      renderer.setRenderTarget(pWrite)
      renderer.render(simScene, simCamera)
      const tmp = pRead
      pRead = pWrite
      pWrite = tmp
    }

    // 7. Gradient subtract
    const velIn = curl > 0 ? velB : velA
    const velOut = curl > 0 ? velA : velB
    gradSubtractMat.uniforms.u_velocity.value = velIn.texture
    gradSubtractMat.uniforms.u_pressure.value = pRead.texture
    simMesh.material = gradSubtractMat
    renderer.setRenderTarget(velOut)
    renderer.render(simScene, simCamera)

    // 8. Advect density
    densityAdvectMat.uniforms.u_velocity.value = velOut.texture
    densityAdvectMat.uniforms.u_source.value = densityTempRT.texture
    densityAdvectMat.uniforms.u_dt.value = 1
    densityAdvectMat.uniforms.u_dissipationMultiply.value = densityDissipation
    simMesh.material = densityAdvectMat
    renderer.setRenderTarget(densityRT)
    renderer.render(simScene, simCamera)

    if (curl <= 0) {
      const tmp = velA
      velA = velB
      velB = tmp
    }

    // 9. Composite final image onto screen
    renderer.setRenderTarget(null)
    renderer.clear()
    gl.enable(gl.BLEND)

    uniforms.u_densityTex.value = densityRT.texture
    uniforms.u_parallaxMax.value = parallax ? Math.max(0, Math.min(200, parallaxAmount ?? 0)) : 0
    uniforms.u_blur.value = mapBlur(blur)
    uniforms.u_circleBoost.value = mapCircleBoost(circleBoost)

    const curTex = mapTexture(texture)
    uniforms.u_noiseFreq.value = curTex.freq
    uniforms.u_noiseStrength.value = curTex.strength
    uniforms.u_noiseSize.value = curTex.size
    uniforms.u_timeSpeed.value = mapTimeSpeed(timeSpeed)
    uniforms.u_radius.value = mapRadius(radius)

    uniforms.u_progress.value += (targetProgress - uniforms.u_progress.value) * 0.08

    renderer.render(scene, camera)
  }

  if (isVisible()) animate()

  let resizeTimer: any = null
  const onResize = () => {
    if (!resizeTimer) {
      resizeTimer = setTimeout(() => {
        updateSize()
        if (isRendering) renderer.render(scene, camera)
        resizeTimer = null
      }, 100)
    }
  }

  const ro = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { width: w, height: h } = entry.contentRect
      if (w !== currentPlaneSize.x || h !== currentPlaneSize.y) {
        updateSize()
      }
    })
    onResize()
  })
  ro.observe(container)
  window.addEventListener("resize", onResize)

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isRendering && isVisible()) {
        animate()
      }
    })
  }, { root: null, rootMargin: "50px", threshold: 0.01 })
  io.observe(container)

  const maxParallax = parallax ? Math.max(0, Math.min(200, parallaxAmount ?? 0)) : 0
  let isHovered = false

  const onMouseMove = (e: MouseEvent) => {
    const rect = container.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = 1 - (e.clientY - rect.top) / rect.height
    if (nx >= 0 && nx <= 1 && ny >= 0 && ny <= 1) {
      targetProgress = 1
      if (!isHovered) {
        isHovered = true
        container.classList.add("is-hovered")
        onHoverChange?.(true)
      }
      if (!isRendering && isVisible()) animate()
      const clX = Math.max(0, Math.min(1, nx))
      const clY = Math.max(0, Math.min(1, ny))
      uniforms.u_mouse.value.set(clX, clY)
      if (parallax && maxParallax > 0) {
        targetParallax.set((clX - 0.5) * 2 * maxParallax, (clY - 0.5) * 2 * maxParallax)
      }
    } else {
      targetProgress = 0
      targetParallax.set(0, 0)
      if (isHovered) {
        isHovered = false
        container.classList.remove("is-hovered")
        onHoverChange?.(false)
      }
    }
  }

  const onMouseLeave = () => {
    targetProgress = 0
    targetParallax.set(0, 0)
    if (isHovered) {
      isHovered = false
      container.classList.remove("is-hovered")
      onHoverChange?.(false)
    }
  }

  window.addEventListener("mousemove", onMouseMove)
  container.addEventListener("mouseleave", onMouseLeave)

  return () => {
    isDisposed = true
    if (animFrameId) cancelAnimationFrame(animFrameId)
    ro.disconnect()
    io.disconnect()
    window.removeEventListener("resize", onResize)
    if (resizeTimer) clearTimeout(resizeTimer)
    window.removeEventListener("mousemove", onMouseMove)
    container.removeEventListener("mouseleave", onMouseLeave)

    disposeRTs()
    simGeom.dispose()
    splatVelocityMat.dispose()
    splatDensityMat.dispose()
    advectionMat.dispose()
    divergenceMat.dispose()
    pressureMat.dispose()
    gradSubtractMat.dispose()
    curlMat.dispose()
    densityAdvectMat.dispose()
    mainGeom.dispose()
    mainMaterial.dispose()
    renderer.dispose()
  }
}

// -------------------------------------------------------------
// High-Precision 2D Canvas Organic Fluid Puddle Fallback
// Produces the EXACT crisp undulating liquid contour & 2.5D parallax
// -------------------------------------------------------------
function initCanvas2DSimulation(opts: HoverMaskShaderOptions): () => void {
  const {
    container,
    canvas,
    hoverSrc,
    onHoverChange
  } = opts

  const ctx = canvas.getContext("2d")
  if (!ctx) return () => {}

  const hoverImg = new Image()
  hoverImg.crossOrigin = "anonymous"
  hoverImg.src = hoverSrc

  const maskCanvas = document.createElement("canvas")
  const maskCtx = maskCanvas.getContext("2d")

  let animId: number | null = null
  let isHovered = false
  let lastX = 0
  let lastY = 0
  let hasPrev = false
  let lastTimestamp = performance.now()
  let time = 0

  let currentParallaxX = 0
  let currentParallaxY = 0
  let targetParallaxX = 0
  let targetParallaxY = 0

  interface HarmonicDrop {
    x: number
    y: number
    vx: number
    vy: number
    r: number
    targetR: number
    life: number
    maxLife: number
    phase: number
    freq: number
  }

  const drops: HarmonicDrop[] = []

  const resize = () => {
    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = Math.round(rect.width || 729)
    const h = Math.round(rect.height || 720)

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr
      canvas.height = h * dpr
      maskCanvas.width = w * dpr
      maskCanvas.height = h * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      if (maskCtx) {
        maskCtx.setTransform(1, 0, 0, 1, 0, 0)
        maskCtx.scale(dpr, dpr)
      }
    }
  }
  resize()

  const spawnDrop = (x: number, y: number, vx: number, vy: number) => {
    drops.push({
      x,
      y,
      vx: vx * 0.25,
      vy: vy * 0.25,
      r: 10,
      targetR: 85 + Math.random() * 20,
      life: 1.5,
      maxLife: 1.5,
      phase: Math.random() * Math.PI * 2,
      freq: 3 + Math.floor(Math.random() * 3)
    })
    if (drops.length > 55) drops.shift()
  }

  const render = (now: number) => {
    const dt = Math.min((now - lastTimestamp) / 1000, 0.05)
    lastTimestamp = now
    time += dt * 3.5

    const rect = container.getBoundingClientRect()
    const w = rect.width || 729
    const h = rect.height || 720

    currentParallaxX += (targetParallaxX - currentParallaxX) * 0.1
    currentParallaxY += (targetParallaxY - currentParallaxY) * 0.1

    for (let i = drops.length - 1; i >= 0; i--) {
      const d = drops[i]
      d.r += (d.targetR - d.r) * 0.28
      d.x += d.vx * 0.3
      d.y += d.vy * 0.3
      d.vx *= 0.92
      d.vy *= 0.92
      d.life -= dt

      if (d.life < 0.6) {
        d.targetR *= 0.88
      }
      if (d.life <= 0 || d.r < 2) {
        drops.splice(i, 1)
      }
    }

    if (maskCtx) {
      maskCtx.clearRect(0, 0, w, h)
      maskCtx.fillStyle = "#ffffff"

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i]
        const progress = Math.max(0, d.life / d.maxLife)
        const currentR = d.r * Math.min(1, progress * 1.5)

        // Draw organic liquid contour with undulating noise harmonics (exact match to WebGL snoise contour)
        maskCtx.beginPath()
        const segments = 28
        for (let s = 0; s <= segments; s++) {
          const theta = (s / segments) * Math.PI * 2
          const wobble =
            Math.sin(theta * d.freq + time * 2.2 + d.phase) * 0.14 +
            Math.cos(theta * 2 - time * 1.8) * 0.09
          const r = currentR * (1 + wobble)
          const px = d.x + Math.cos(theta) * r
          const py = d.y + Math.sin(theta) * r
          if (s === 0) maskCtx.moveTo(px, py)
          else maskCtx.lineTo(px, py)
        }
        maskCtx.closePath()
        maskCtx.fill()
      }
    }

    ctx.clearRect(0, 0, w, h)

    if (drops.length > 0 && hoverImg.complete && hoverImg.naturalWidth > 0) {
      // 1. Draw crisp fluid droplet mask
      ctx.drawImage(maskCanvas, 0, 0, w, h)

      // 2. Reveal secondary image with 2.5D parallax inside the mask
      ctx.globalCompositeOperation = "source-in"

      const imgW = hoverImg.naturalWidth
      const imgH = hoverImg.naturalHeight
      const scale = Math.max(w / imgW, h / imgH) * 1.05
      const renderW = imgW * scale
      const renderH = imgH * scale
      const offsetX = (w - renderW) * 0.5 + currentParallaxX
      const offsetY = (h - renderH) * 0.5 + currentParallaxY

      ctx.drawImage(hoverImg, offsetX, offsetY, renderW, renderH)
      ctx.globalCompositeOperation = "source-over"
    }

    if (isHovered || drops.length > 0) {
      animId = requestAnimationFrame(render)
    } else {
      ctx.clearRect(0, 0, w, h)
      animId = null
    }
  }

  const onMouseEnter = (e: MouseEvent) => {
    isHovered = true
    container.classList.add("is-hovered")
    onHoverChange?.(true)
    resize()
    const rect = container.getBoundingClientRect()
    lastX = e.clientX - rect.left
    lastY = e.clientY - rect.top
    hasPrev = true
    spawnDrop(lastX, lastY, 0, 0)
    lastTimestamp = performance.now()
    if (!animId) animId = requestAnimationFrame(render)
  }

  const onMouseMove = (e: MouseEvent) => {
    const rect = container.getBoundingClientRect()
    const curX = e.clientX - rect.left
    const curY = e.clientY - rect.top

    // Parallax shifts away from cursor
    targetParallaxX = ((curX / rect.width) - 0.5) * -16
    targetParallaxY = ((curY / rect.height) - 0.5) * -16

    if (hasPrev) {
      const dx = curX - lastX
      const dy = curY - lastY
      const dist = Math.hypot(dx, dy)
      const steps = Math.max(1, Math.floor(dist / 14))
      for (let s = 1; s <= steps; s++) {
        const ix = lastX + (dx * s) / steps
        const iy = lastY + (dy * s) / steps
        spawnDrop(ix, iy, dx, dy)
      }
    } else {
      spawnDrop(curX, curY, 0, 0)
    }

    lastX = curX
    lastY = curY
    hasPrev = true

    if (!animId) {
      lastTimestamp = performance.now()
      animId = requestAnimationFrame(render)
    }
  }

  const onMouseLeave = () => {
    isHovered = false
    hasPrev = false
    container.classList.remove("is-hovered")
    onHoverChange?.(false)
    targetParallaxX = 0
    targetParallaxY = 0
  }

  container.addEventListener("mouseenter", onMouseEnter)
  container.addEventListener("mousemove", onMouseMove)
  container.addEventListener("mouseleave", onMouseLeave)
  window.addEventListener("resize", resize)

  return () => {
    if (animId) cancelAnimationFrame(animId)
    container.removeEventListener("mouseenter", onMouseEnter)
    container.removeEventListener("mousemove", onMouseMove)
    container.removeEventListener("mouseleave", onMouseLeave)
    window.removeEventListener("resize", resize)
  }
}

export function initHoverMaskRevealThree(opts: HoverMaskShaderOptions): () => void {
  if (!opts.container || !opts.canvas) return () => {}

  // Check WebGL hardware support:
  // If supported: run authentic Three.js Navier-Stokes Eulerian fluid simulation!
  // If unsupported (e.g. headless/software browser): run crisp 2D harmonic fluid simulation!
  if (checkWebGLSupport(opts.canvas)) {
    try {
      return initWebGLSimulation(opts)
    } catch (err) {
      console.warn("WebGL initialization failed, falling back to 2D harmonic fluid simulation:", err)
      return initCanvas2DSimulation(opts)
    }
  } else {
    return initCanvas2DSimulation(opts)
  }
}
