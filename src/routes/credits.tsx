import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";

export const Route = createFileRoute("/credits")({
  component: CreditsScreen,
});

function CreditsScreen() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.main
      initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
      className="flex min-h-screen items-center justify-center bg-[#1a1a1a] px-6 py-10 text-center text-[#f3ead3]"
    >
      <section className="max-w-3xl rounded-3xl border border-[#c9a84c]/25 bg-black/30 p-8 shadow-2xl md:p-12">
        <p className="text-sm uppercase tracking-[0.34em] text-[#c9a84c]">Credits</p>
        <h1 className="mt-4 font-serif text-7xl leading-none md:text-9xl">Spectrum</h1>
        <p className="mt-8 text-xl text-[#f3ead3]/90">
          AI Assisted. Human Approved. Powered by NLP.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#f3ead3]/70">
          Thank you for restoring the gallery and spending time with these stories of identity,
          community, expression, progress, and belonging.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex rounded-full border border-[#c9a84c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition hover:bg-[#c9a84c] hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f3ead3]"
        >
          Play Again
        </Link>
      </section>
    </motion.main>
  );
}
