import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";

export const Route = createFileRoute("/final")({
  component: FinalScreen,
});

function FinalScreen() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.main
      initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
      className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-[#f3ead3]"
    >
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <img
          src="/artwork/belonging.png"
          alt="Belonging final artwork"
          className="w-full rounded-3xl border border-[#c9a84c]/30 shadow-2xl"
        />
        <article className="rounded-3xl border border-[#c9a84c]/25 bg-black/30 p-7 md:p-10">
          <p className="text-sm uppercase tracking-[0.34em] text-[#c9a84c]">Final — Belonging</p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">Belonging</h1>
          <p className="mt-7 text-lg leading-8 text-[#f3ead3]/85">
            Four galleries have opened into one larger story: identity, community, expression, and
            progress. Belonging is the light that remains when every restored image can be seen
            fully — a reminder that the journey was never about passing a test. It was about
            discovering the colors, histories, and people that make the gallery whole.
          </p>
          <Link
            to="/credits"
            className="mt-9 inline-flex rounded-full border border-[#c9a84c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition hover:bg-[#c9a84c] hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f3ead3]"
          >
            View Credits
          </Link>
        </article>
      </section>
    </motion.main>
  );
}
