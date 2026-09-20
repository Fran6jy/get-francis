/* ============ Get Francis ============ */

const PROJECTS = [
  {
    title: "Amúyọ̀",
    kind: "Native Windows application",
    role: "Systems / video",
    cat: ["systems"],
    badge: "Private",
    body: "A creator studio for Windows: screen recording, live streaming, timeline editing, captions, webcam picture in picture and platform ready export, written as a real native app rather than an Electron wrapper.",
    points: [
      "DXGI Desktop Duplication, Windows Graphics Capture and WASAPI audio mixing",
      "Hardware H.264 and HEVC through NVENC with an x264 fallback, plus RTMPS live output",
      "Crash resilience: fragmented MP4 keeps interrupted recordings playable, with a session journal and startup recovery",
      "Continuous low disk monitoring, dropped frame reporting and an opt in encode profiler"
    ],
    tags: ["C++23", "Qt 6", "FFmpeg", "D3D11", "NVENC", "SQLite"],
    links: []
  },
  {
    title: "RemotePadi",
    kind: "Peer to peer infrastructure",
    role: "Systems / networking",
    cat: ["systems"],
    badge: "Private",
    body: "Low latency end to end encrypted remote desktop. Two machines anywhere hole punch through a rendezvous server and talk directly, so nothing sits in the media path.",
    points: [
      "Rust host core with zero copy DXGI to NVENC capture and encode, plus PipeWire on Linux",
      "One UDP socket carrying control, video and an exit tunnel as separate encrypted lanes",
      "Noise handshake with per datagram ChaCha20-Poly1305, STUN hole punching and relay fallback",
      "Chroma auto negotiation from 4:4:4 down to 4:2:0 based on real GPU encoder capability"
    ],
    tags: ["Rust", "Tauri", "HEVC", "D3D11VA", "Tokio", "TypeScript"],
    links: []
  },
  {
    title: "NHS Capacity and Demand Intelligence Platform",
    kind: "Analytics and ML platform",
    role: "Data science",
    cat: ["data", "ai"],
    badge: "Live",
    body: "A production grade platform that moves NHS operations from reactive reporting to predictive and prescriptive intelligence, from raw ingestion through to an executive facing dashboard.",
    points: [
      "Medallion bronze, silver and gold architecture on DuckDB and Postgres with pluggable Kafka ingestion",
      "30, 60 and 90 day forecasts for bed occupancy, waiting times, A&E demand and workforce gaps using Prophet, XGBoost and LightGBM",
      "Composite risk score blending peer relative pressure with an absolute safety overlay, so system wide surges still escalate",
      "Natural language to SQL retrieval layer with forecasting, workforce, risk and executive agents"
    ],
    tags: ["Python", "DuckDB", "Prophet", "XGBoost", "RAG", "Streamlit", "Power BI"],
    links: [
      { label: "Live site", href: "https://timelyrounds.vercel.app" },
      { label: "Repository", href: "https://github.com/Fran6jy/nhs-capacity-intelligence-platform" }
    ]
  },
  {
    title: "Biometric Warehouse, dbt",
    kind: "Analytics engineering",
    role: "Data engineering",
    cat: ["data"],
    badge: "Public",
    body: "A dbt Core analytics layer over a GDPR conscious biometric verification pipeline. The original proof of concept specified a Snowflake star schema and shipped an empty schema file, so this is that warehouse built for real.",
    points: [
      "Two staging models and one mart at date by region grain, targeting both Snowflake and DuckDB",
      "57 tests covering types, uniqueness, referential integrity and the single analytics eligibility rule",
      "Consent filtering as a modelled rule: 72 of 500 readings excluded and the exclusion is auditable",
      "Generated documentation with the full lineage graph published on GitHub Pages"
    ],
    tags: ["dbt Core", "Snowflake", "DuckDB", "SQL", "GitHub Pages"],
    links: [
      { label: "Repository", href: "https://github.com/Fran6jy/biometric-warehouse-dbt" },
      { label: "Docs and lineage", href: "https://fran6jy.github.io/biometric-warehouse-dbt/" }
    ]
  },
  {
    title: "LodgeOS",
    kind: "Natural language finance engine",
    role: "AI systems",
    cat: ["ai", "data"],
    badge: "Private",
    body: "A natural language operating system for structured records. Speak, type or photograph a transaction and it becomes a validated, auditable ledger entry. A transaction engine with a Telegram front end, not a chatbot.",
    points: [
      "Pipeline of intent parse, schema validation, routing, domain plugin, store and respond",
      "Deterministic rule based categorisation with no model in the loop, LLM reserved for genuine ambiguity",
      "Append only corrections with a soft void audit trail and hallucination guarded targeting",
      "123 tests and a regression harness gating 95 percent domain, intent and category accuracy"
    ],
    tags: ["Python", "FastAPI", "SQLite", "faster-whisper", "Vision models", "Telegram"],
    links: []
  },
  {
    title: "FootballStox",
    kind: "Agentic live market",
    role: "Agentic AI",
    cat: ["ai", "product"],
    badge: "Live",
    body: "A live match stock market where every footballer is a tradeable asset and an autonomous market maker agent reprices the board in real time by reasoning about match context, not by looking up a multiplier table.",
    points: [
      "The agent reads live commentary and weighs situation: a missed open net at 0-0 in the 89th minute is priced very differently from the same miss at 4-0",
      "Users trade against the agent's valuations while its reasoning streams live to the feed",
      "Supabase Realtime with a server sent events fallback so the app runs with zero configuration",
      "Provider chain across OpenRouter, Anthropic and OpenAI with an offline heuristic fallback"
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Postgres", "Recharts"],
    links: [{ label: "Live site", href: "https://footballstox.vercel.app" }]
  },
  {
    title: "Chronael",
    kind: "Machine learning research",
    role: "ML engineering",
    cat: ["data", "ai"],
    badge: "Live",
    body: "A neural network that plays chess like a specific human by imitation, learning to predict the move that player actually chose. Train it on Carlsen and it plays Carlsen flavoured chess.",
    points: [
      "ResNet policy network over 17x8x8 board planes oriented to the side to move",
      "Softmax restricted to legal moves, so it is structurally incapable of an illegal move",
      "Scored on move match accuracy against held out games, the metric used in the Maia Chess papers",
      "An earlier fine tuned language model version was deleted for playing weakly and illegally, a metric beat a demo",
      "Runs in the browser via ONNX behind a beginner facing teaching app with hints and take backs"
    ],
    tags: ["PyTorch", "ONNX", "TypeScript", "Chessground", "Stockfish WASM"],
    links: [
      { label: "Play it", href: "https://chronael.vercel.app" },
      { label: "Repository", href: "https://github.com/Fran6jy/Chronael" }
    ]
  },
  {
    title: "Awosanmo",
    kind: "Self hosted media platform",
    role: "Full stack",
    cat: ["product", "systems"],
    badge: "Deployed",
    body: "A private, self hosted media download and streaming platform, tuned to run on a 1 vCPU and 1 GB free tier box. Add a file or link and stream it from anywhere before the transfer finishes.",
    points: [
      "Sequential transfer with HTTP range requests, so video starts playing early and seeks fast",
      "Siloed multi user accounts with rotating refresh sessions, revocation and optional TOTP two factor",
      "Full file manager: folders, drag and drop, bulk delete, ZIP download, previews and an in browser EPUB reader",
      "Running on an Oracle Ubuntu VM behind nginx and a Cloudflare tunnel"
    ],
    tags: ["TypeScript", "Node", "Docker", "nginx", "Cloudflare"],
    links: [{ label: "Repository", href: "https://github.com/Fran6jy/Awosanmo" }]
  },
  {
    title: "StudioOS",
    kind: "Multi provider AI studio",
    role: "AI systems",
    cat: ["ai", "product"],
    badge: "Private",
    body: "A narration studio that puts cloud and local voice engines behind one interface, so a script can be voiced by a hosted API or by a model running on your own GPU without changing the workflow.",
    points: [
      "One provider abstraction spanning ElevenLabs, Fish Audio, OpenAI and four local engines",
      "Local GPU cloning through XTTS-v2 and Chatterbox, with Kokoro for preset voices and no key required",
      "Isolated Python sidecar environments so engines with conflicting dependencies coexist",
      "Reference transcript storage and bundled FFmpeg fallback for awkward upload formats"
    ],
    tags: ["TypeScript", "Next.js", "Python", "CUDA", "PowerShell"],
    links: []
  },
  {
    title: "SubUnited",
    kind: "Marketplace platform",
    role: "Full stack",
    cat: ["product"],
    badge: "Public",
    body: "A subscription management and digital access marketplace, built security first with a Nigeria focused catalogue and the credential handling treated as the core problem rather than an afterthought.",
    points: [
      "Prisma schema covering marketplace, credentials, purchases, payments, wallets, notifications, jobs and audit logs",
      "AES-256-GCM encryption utilities and Argon2id password hashing",
      "Redis and BullMQ job queues, Zod validated environment and security headers middleware",
      "Docker Compose infrastructure with a seeded sample catalogue"
    ],
    tags: ["Next.js 15", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Better Auth"],
    links: [{ label: "Repository", href: "https://github.com/Fran6jy/subunited" }]
  },
  {
    title: "NatureLogue, for CHAI Origins",
    kind: "Founder and commerce build",
    role: "Co-founder / full stack",
    cat: ["product"],
    badge: "Live",
    body: "The storefront and field journal for CHAI Origins, a premium heritage botanical drinks brand I co-founded through Naturelogue Ltd. Education and commerce are interwoven, so you read why a flower matters and the blend is sitting right there in the story.",
    points: [
      "Two collections and four blends built on 21 named botanicals, including a doum palm chai base new to the market",
      "Stripe checkout, inventory and order database, moderated reviews and a lightweight CMS",
      "Signature motif, one flower with many homes: sorrel, zobo, bissap, karkadé, agua de Jamaica, as an interactive map",
      "Page temperature shifts as you scroll between the two collections, a feature rather than an inconsistency"
    ],
    tags: ["Next.js", "Stripe", "Postgres", "Tailwind v4", "Framer Motion"],
    links: [{ label: "Live site", href: "https://naturelogue.vercel.app" }]
  },
  {
    title: "Liz Ikamba",
    kind: "Client website",
    role: "Front end / migration",
    cat: ["product"],
    badge: "Live",
    body: "A real client site for an Afro soul folk singer and multi instrumentalist, migrated from WordPress to a static Astro build. Hosting cost went from roughly 120 pounds a year to the price of the domain.",
    points: [
      "A migration, not a redesign: same content, same URLs, same embeds, same visual identity",
      "Replaced Genesis, Elementor, Fluent Forms and WooCommerce with static files on a free tier",
      "Content manager and forms set up so the owner can edit without touching code"
    ],
    tags: ["Astro", "TypeScript", "Static hosting"],
    links: [{ label: "Live site", href: "https://lizikamba.com" }]
  },
  {
    title: "SupportGram",
    kind: "Care operations platform",
    role: "Full stack / AI",
    cat: ["ai", "product"],
    badge: "Private",
    body: "Support workers write messy notes. Agencies get clean care records. A mobile first app for quick shift notes, AI cleanup into a structured visit record, and a manager dashboard for review, search, export and compliance.",
    points: [
      "A rushed one line note on a phone becomes a typed record: client, time, personal care, medication, family contact, incidents, mileage",
      "Worker reviews before submitting, manager reviews after, so the AI never has the final word",
      "Built around the worker's reality, tired and typing on a phone, rather than around manager forms"
    ],
    tags: ["TypeScript", "Next.js", "Postgres", "LLM"],
    links: []
  },
  {
    title: "AI Math Assistant",
    kind: "Tool calling agent",
    role: "Agentic AI",
    cat: ["ai"],
    badge: "Public",
    body: "A natural language maths assistant that routes work through a LangChain tool calling agent, covering calculus helpers, equation solving, statistics and matrix operations.",
    points: [
      "Structured Zod schemas for every tool, with the agent trace visible in the interface",
      "Photograph a problem and a vision model reads it before the tool agent solves it",
      "Voice questions and spoken answers through the Web Speech API",
      "Runs in demo mode with no API key, executing the maths toolkit locally"
    ],
    tags: ["LangChain.js", "Express", "React", "mathjs", "Zod"],
    links: [{ label: "Repository", href: "https://github.com/Fran6jy/Agentic-Sytem" }]
  },
  {
    title: "The Black Rose Signature",
    kind: "Luxury e-commerce",
    role: "Front end",
    cat: ["product"],
    badge: "Live",
    body: "A cinematic identity brand store rather than a catalogue, with scroll triggered storytelling, a persistent cart and a Stripe ready Express backend.",
    points: [
      "GSAP scroll animations, parallax hero and quick view product modals",
      "RESTful product API with filtering, search and checkout endpoints",
      "Fully responsive down to mobile with a considered typographic and colour system"
    ],
    tags: ["JavaScript", "Express", "GSAP", "REST"],
    links: [
      { label: "Live site", href: "https://black-rose-signature.vercel.app" },
      { label: "Repository", href: "https://github.com/Fran6jy/eCommerce" }
    ]
  }
];

/* ---------- render ---------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function cardHTML(p) {
  const live = /live|deployed/i.test(p.badge);
  return `
  <article class="card reveal" data-cat="${p.cat.join(" ")}">
    <div class="card__top">
      <span class="card__kind">${esc(p.kind)}</span>
      <span class="card__badge${live ? " card__badge--live" : ""}">${esc(p.badge)}</span>
    </div>
    <h3 class="card__title">${esc(p.title)}</h3>
    <p class="card__role">${esc(p.role)}</p>
    <p class="card__body">${esc(p.body)}</p>
    <ul class="card__points">${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    ${p.links.length ? `<div class="card__links">${p.links
      .map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
      .join("")}</div>` : ""}
    <div class="card__foot">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
  </article>`;
}

const grid = document.getElementById("projectGrid");
grid.innerHTML = PROJECTS.map(cardHTML).join("");

/* ---------- filtering ---------- */
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => {
      c.classList.remove("is-active");
      c.setAttribute("aria-selected", "false");
    });
    chip.classList.add("is-active");
    chip.setAttribute("aria-selected", "true");

    const f = chip.dataset.filter;
    grid.querySelectorAll(".card").forEach((card) => {
      const match = f === "all" || card.dataset.cat.split(" ").includes(f);
      card.classList.toggle("is-hidden", !match);
      if (match) card.classList.add("is-in");
    });
  });
});

/* ---------- pointer glow ---------- */
grid.addEventListener("pointermove", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
});

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add("is-in"), Math.min(i * 55, 220));
      io.unobserve(entry.target);
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- nav ---------- */
const nav = document.getElementById("nav");
const links = document.querySelector(".nav__links");
const toggle = document.getElementById("navToggle");

const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
links.addEventListener("click", (e) => {
  if (e.target.tagName !== "A") return;
  links.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
});

document.getElementById("year").textContent = new Date().getFullYear();
