import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { getGallery } from "../data/galleries";

export const Route = createFileRoute("/gallery/$id")({
  component: GalleryIntro,
});

function GalleryIntro() {
  const prefersReducedMotion = useReducedMotion();
  const { id } = Route.useParams();
  const gallery = getGallery(id);

  if (!gallery) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#1a1a1a] p-8 text-[#f3ead3]">
        Gallery not found.
      </main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
      className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-[#f3ead3]"
    >
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#c9a84c]">
            Gallery {gallery.id} — {gallery.title}
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">{gallery.theme}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#f3ead3]/85">{gallery.introText}</p>
          <Link
            to="/reveal/$id"
            params={{ id: gallery.id }}
            className="mt-10 inline-flex rounded-full border border-[#c9a84c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#f3ead3] transition hover:bg-[#c9a84c] hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f3ead3]"
          >
            Enter Gallery
          </Link>
        </div>
        <img
          src={gallery.artworkPath}
          alt={`${gallery.theme} artwork`}
          className="w-full rounded-3xl border border-[#c9a84c]/30 shadow-2xl"
        />
      </section>
    </motion.main>
  );
}
