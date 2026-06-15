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

        {/* Cream plaque button — matches reference */}
        <motion.button
          variants={item}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative mt-12 px-14 py-5"
          style={{
            backgroundColor: "#f3ead3",
            border: "1px solid #c9a84c",
            boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
          }}
        >
          {/* inner hairline */}
          <span
            className="pointer-events-none absolute inset-[6px] border"
            style={{ borderColor: "rgba(201,168,76,0.55)" }}
          />
          <span
            className="relative block text-[#3a2f1d]"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: "15px",
              letterSpacing: "0.35em",
            }}
          >
            BEGIN RESTORATION
          </span>
        </motion.button>

        <motion.svg
          variants={item}
          width="36"
          height="14"
          viewBox="0 0 36 14"
          className="mt-3 text-[#c9a84c]"
          aria-hidden
        >
          <path
            d="M2 7 Q9 2 18 7 Q27 12 34 7 M18 7 L18 12"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.7"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
