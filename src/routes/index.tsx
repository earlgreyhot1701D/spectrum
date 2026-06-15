import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";


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
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

function Index() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          variants={item}
          className="font-serif text-[#f3ead3] leading-none"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(80px, 12vw, 180px)",
            fontWeight: 500,
            letterSpacing: "-0.01em",
          }}
        >
          Spectrum
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-2 h-px w-40"
          style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
        />

        <motion.p
          variants={item}
          className="mt-10 max-w-xl text-[#f3ead3]/90 leading-relaxed"
          style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
        >
          Restore artworks inspired by the colors,
          <br />
          symbols, and stories that help communities
          <br />
          express identity and belonging.
        </motion.p>

        <motion.div variants={item} className="mt-8 text-[#c9a84c]" aria-hidden>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 1.5 L12 10 L20.5 11 L12 12 L11 20.5 L10 12 L1.5 11 L10 10 Z"
              fill="currentColor"
              opacity="0.85"
            />
          </svg>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-[#f3ead3]/90 leading-relaxed"
          style={{ fontSize: "clamp(15px, 1.1vw, 17px)" }}
        >
          Throughout history, people have used art,
          <br />
          color, and symbols to tell stories about
          <br />
          who they are and where they belong.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4"
          style={{ color: "#d97a5e", fontSize: "clamp(15px, 1.1vw, 17px)" }}
        >
          Tonight, a gallery waits to be restored.
        </motion.p>

        <motion.button
          variants={item}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 border border-[#c9a84c] bg-transparent px-12 py-4 text-[#f3ead3] uppercase transition-colors hover:bg-[#c9a84c]/10"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            letterSpacing: "0.3em",
            fontSize: "14px",
          }}
        >
          Begin Restoration
        </motion.button>
      </motion.div>
    </section>
  );
}
