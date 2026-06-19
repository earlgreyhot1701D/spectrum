import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import landingBg from "@/assets/landing-bg.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spectrum" },
      {
        name: "description",
        content:
          "Restore artworks inspired by the colors, symbols, and stories that help communities express identity and belonging.",
      },
      { property: "og:title", content: "Spectrum" },
      {
        property: "og:description",
        content:
          "Restore artworks inspired by the colors, symbols, and stories that help communities express identity and belonging.",
      },
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
  const prefersReducedMotion = useReducedMotion();
  const initialState = prefersReducedMotion ? "show" : "hidden";

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a] bg-cover bg-center"
      style={{ backgroundImage: `url(${landingBg.url})` }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        variants={container}
        initial={initialState}
        animate="show"
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          variants={item}
          className="leading-none"
          style={{
            color: "var(--spectrum-cream)",
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: "clamp(64px, 10vw, 144px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
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
          className="mt-1"
          style={{ color: "var(--spectrum-gold)" }}
          aria-hidden
        >
          <path
            d="M10 7 Q110 14 210 7"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.85"
          />
        </motion.svg>

        <motion.p
          variants={item}
          className="mt-6"
          style={{
            color: "var(--spectrum-cream)",
            opacity: 1,
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(16px, 1.2vw, 19px)",
            lineHeight: 1.6,
            maxWidth: "34rem",
            marginInline: "auto",
          }}
        >
          Restore artworks inspired by the colors, symbols, and stories that help communities
          express identity and belonging.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12"
          style={{ color: "var(--spectrum-gold)" }}
          aria-hidden
        >
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
          className="mt-6"
          style={{
            color: "var(--spectrum-cream)",
            opacity: 0.75,
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 1vw, 16px)",
            lineHeight: 1.65,
            maxWidth: "34rem",
            marginInline: "auto",
          }}
        >
          Throughout history, people have used art, color, and symbols to tell stories about who
          they are and where they belong.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3"
          style={{
            color: "var(--spectrum-ember)",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(14px, 1vw, 16px)",
            fontStyle: "italic",
            letterSpacing: "0.02em",
          }}
        >
          Tonight, a gallery waits to be restored.
        </motion.p>

        {/* Cream plaque button with notched corners — matches reference */}
        <motion.div
          variants={item}
          whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
          className="relative mt-8 block"
          style={{
            width: "100%",
            maxWidth: 260,
            aspectRatio: "260 / 64",
            filter: "drop-shadow(0 14px 36px rgba(0,0,0,0.5))",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <svg
            viewBox="0 0 360 110"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            className="absolute inset-0"
            aria-hidden
          >
            {/* Outer plaque with notched corners */}
            <path
              d="M10,0 L350,0 L360,10 L360,100 L350,110 L10,110 L0,100 L0,10 Z"
              fill="var(--spectrum-cream)"
              stroke="var(--spectrum-gold)"
              strokeWidth="1.25"
            />
            {/* Inner hairline frame with matching notches */}
            <path
              d="M16,8 L344,8 L352,16 L352,94 L344,102 L16,102 L8,94 L8,16 Z"
              fill="none"
              stroke="var(--spectrum-gold)"
              strokeWidth="0.75"
              opacity="0.7"
            />
          </svg>

          <Link
            to="/gallery/$id"
            params={{ id: "1" }}
            aria-label="Begin Restoration"
            className="relative z-10 flex h-full w-full items-center justify-center"
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(11px, 1.1vw, 13px)",
                letterSpacing: "0.22em",
                color: "var(--spectrum-ink)",
                fontWeight: 600,
              }}
            >
              BEGIN RESTORATION
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
