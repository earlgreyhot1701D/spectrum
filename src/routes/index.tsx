import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import landingBg from "@/assets/landing-bg.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spectrum" },
      { name: "description", content: "Restore artworks inspired by the colors, symbols, and stories that help communities express identity and belonging." },
      { property: "og:title", content: "Spectrum" },
      { property: "og:description", content: "Restore artworks inspired by the colors, symbols, and stories that help communities express identity and belonging." },
    ],
  }),
  component: Index,
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

function Index() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a] bg-cover bg-center"
      style={{ backgroundImage: `url(${landingBg.url})` }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          variants={item}
          className="text-[#f3ead3] leading-none"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(72px, 11vw, 168px)",
            fontWeight: 500,
            letterSpacing: "-0.005em",
            textShadow: "0 2px 30px rgba(0,0,0,0.55)",
          }}
        >
          Spectrum
        </motion.h1>

        <motion.svg
          variants={item}
          width="220"
          height="14"
          viewBox="0 0 220 14"
          className="mt-1 text-[#c9a84c]"
          aria-hidden
        >
          <path d="M10 7 Q110 14 210 7" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.85" />
        </motion.svg>

        <motion.p
          variants={item}
          className="mt-10 max-w-xl text-[#f3ead3]/95 leading-[1.9]"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1vw, 16px)" }}
        >
          Restore artworks inspired by the colors,
          <br />
          symbols, and stories that help communities
          <br />
          express identity and belonging.
        </motion.p>

        <motion.div variants={item} className="mt-8 text-[#c9a84c]" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 1 L10.8 9.2 L19 10 L10.8 10.8 L10 19 L9.2 10.8 L1 10 L9.2 9.2 Z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-[#f3ead3]/95 leading-[1.9]"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(14px, 1vw, 16px)" }}
        >
          Throughout history, people have used art,
          <br />
          color, and symbols to tell stories about
          <br />
          who they are and where they belong.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3"
          style={{
            color: "#d97a5e",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 1vw, 16px)",
          }}
        >
          Tonight, a gallery waits to be restored.
        </motion.p>

        {/* Cream plaque button with notched corners — matches reference */}
        <motion.button
          variants={item}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="relative mt-12"
          style={{
            width: 360,
            height: 110,
            filter: "drop-shadow(0 14px 36px rgba(0,0,0,0.5))",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
          aria-label="Begin Restoration"
        >
          <svg
            viewBox="0 0 360 110"
            width="360"
            height="110"
            className="absolute inset-0"
            aria-hidden
          >
            {/* Outer plaque with notched corners */}
            <path
              d="M10,0 L350,0 L360,10 L360,100 L350,110 L10,110 L0,100 L0,10 Z"
              fill="#f3ead3"
              stroke="#c9a84c"
              strokeWidth="1.25"
            />
            {/* Inner hairline frame with matching notches */}
            <path
              d="M16,8 L344,8 L352,16 L352,94 L344,102 L16,102 L8,94 L8,16 Z"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="0.75"
              opacity="0.7"
            />
          </svg>

          <span className="relative z-10 flex h-full w-full flex-col items-center justify-center">
            <span
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "16px",
                letterSpacing: "0.38em",
                color: "#3a2f1d",
                fontWeight: 500,
              }}
            >
              BEGIN RESTORATION
            </span>
            {/* Palmette ornament inside plaque */}
            <svg
              width="28"
              height="12"
              viewBox="0 0 28 12"
              className="mt-2"
              aria-hidden
            >
              <g fill="#c9a84c" opacity="0.85">
                <path d="M14 1 L15 6 L14 11 L13 6 Z" />
                <path d="M14 6 Q10 3 6 6 Q10 4 14 6 Z" />
                <path d="M14 6 Q18 3 22 6 Q18 4 14 6 Z" />
                <path d="M14 6 Q9 5 4 8 Q9 6 14 6 Z" />
                <path d="M14 6 Q19 5 24 8 Q19 6 14 6 Z" />
              </g>
            </svg>
          </span>
        </motion.button>

      </motion.div>
    </section>
  );
}
