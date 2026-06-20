import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { getGallery } from "../data/galleries";

export const Route = createFileRoute("/lesson/$id")({
  component: LessonScreen,
});

function LessonScreen() {
  const prefersReducedMotion = useReducedMotion();
  const { id } = Route.useParams();
  const gallery = getGallery(id);

  if (!gallery) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#1a1a1a] p-8 text-[#f3ead3]">
        Lesson not found.
      </main>
    );
  }

  const nextTo = gallery.nextGallery ? "/gallery/$id" : "/final";

  return (
    <motion.main
      initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
      className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-[#f3ead3]"
    >
      <section className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <img
          src={gallery.artworkPath}
          alt={`${gallery.theme} artwork fully restored`}
          className="w-full rounded-3xl border border-[#c9a84c]/30 shadow-2xl"
        />
        <article className="self-center rounded-3xl border border-[#c9a84c]/25 bg-black/25 p-7 md:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a84c]">
            Lesson — {gallery.title}
          </p>
          <h1 className="mt-3 font-serif text-5xl md:text-7xl">{gallery.theme}</h1>
          <p className="mt-6 text-lg leading-8 text-[#f3ead3]/85">{gallery.lessonText}</p>
          <p className="mt-6 text-sm font-semibold text-[#c9a84c]">{gallery.lessonCredit}</p>
          {gallery.nextGallery ? (
            <Link
              to={nextTo}
              params={{ id: gallery.nextGallery }}
              className="mt-8 inline-flex rounded-full border border-[#c9a84c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition hover:bg-[#c9a84c] hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f3ead3]"
            >
              Continue
            </Link>
          ) : (
            <Link
              to={nextTo}
              className="mt-8 inline-flex rounded-full border border-[#c9a84c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition hover:bg-[#c9a84c] hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f3ead3]"
            >
              Continue
            </Link>
          )}
        </article>
      </section>
    </motion.main>
  );
}
