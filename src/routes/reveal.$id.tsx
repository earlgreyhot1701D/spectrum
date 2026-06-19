import { Link, createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { getGallery } from "../data/galleries";

export const Route = createFileRoute("/reveal/$id")({
  component: RevealExperience,
});

function RevealExperience() {
  const { id } = Route.useParams();
  const gallery = getGallery(id);
  const prefersReducedMotion = useReducedMotion();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [revealedCount, setRevealedCount] = useState(0);
  const [removedSections, setRemovedSections] = useState<number[]>([]);

  useEffect(() => {
    setQuestionIndex(0);
    setSelectedIndex(null);
    setRevealedCount(0);
    setRemovedSections([]);
  }, [id]);

  if (!gallery) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#1a1a1a] p-8 text-[#f3ead3]">
        Reveal not found.
      </main>
    );
  }

  const question = gallery.questions[questionIndex];
  const answered = selectedIndex !== null;
  const isCorrect = selectedIndex === question.correctIndex;
  const complete = revealedCount === gallery.questions.length;

  function chooseAnswer(index: number) {
    if (answered || complete) return;
    const nextRevealed = Math.min(revealedCount + 1, gallery.questions.length);
    setSelectedIndex(index);
    setRevealedCount(nextRevealed);

    if (questionIndex < gallery.questions.length - 1) {
      window.setTimeout(
        () => {
          setQuestionIndex((current) => current + 1);
          setSelectedIndex(null);
        },
        index === question.correctIndex ? 1500 : 3000,
      );
    }
  }

  return (
    <motion.main
      initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
      className="min-h-screen bg-[#1a1a1a] px-4 py-6 text-[#f3ead3] md:px-8"
    >
      <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-3xl border border-[#c9a84c]/30 bg-black shadow-2xl">
          <img
            src={gallery.artworkPath}
            alt={`${gallery.theme} artwork being restored`}
            className="h-full min-h-[48vh] w-full object-cover"
          />
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2" aria-hidden="true">
            {[0, 1, 2, 3]
              .filter((section) => !removedSections.includes(section))
              .map((section) => {
                const isRevealed = section < revealedCount;

                return (
                  <motion.div
                    key={section}
                    className="border border-[#f3ead3]/10 bg-[#090909]/90 backdrop-blur-sm"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isRevealed ? 0 : 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
                    onAnimationComplete={() => {
                      if (isRevealed) {
                        setRemovedSections((current) =>
                          current.includes(section) ? current : [...current, section],
                        );
                      }
                    }}
                  />
                );
              })}
          </div>
        </div>

        <aside className="rounded-3xl border border-[#c9a84c]/25 bg-black/35 p-6 shadow-xl md:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[#c9a84c]">
            Question {Math.min(questionIndex + 1, 4)} of 4
          </p>
          <h1 className="mt-3 font-serif text-4xl">
            {gallery.title}: {gallery.theme}
          </h1>
          {!complete ? (
            <div className="mt-6">
              <h2 className="text-xl leading-8 text-[#f3ead3]">{question.question}</h2>
              <div className="mt-5 grid gap-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedIndex === index;
                  const isAnswer = question.correctIndex === index;
                  const showCorrect = answered && isAnswer;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => chooseAnswer(index)}
                      disabled={answered}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm leading-6 transition focus:outline-none focus:ring-2 focus:ring-[#f3ead3] ${
                        showCorrect
                          ? "border-emerald-300 bg-emerald-900/45 text-white"
                          : isSelected
                            ? "border-[#d97a5e] bg-[#d97a5e]/20 text-white"
                            : "border-[#f3ead3]/20 bg-[#f3ead3]/5 text-[#f3ead3] hover:border-[#c9a84c]"
                      }`}
                    >
                      <span className="font-semibold text-[#c9a84c]">
                        {String.fromCharCode(65 + index)}.
                      </span>{" "}
                      {option}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence mode="wait">
                {answered ? (
                  <motion.div
                    key="feedback"
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                    className="mt-5 rounded-2xl border border-[#c9a84c]/25 bg-[#1a1a1a] p-4"
                    role="status"
                  >
                    <p className="font-semibold text-[#c9a84c]">
                      {isCorrect
                        ? "That's right."
                        : `The correct answer is ${String.fromCharCode(65 + question.correctIndex)}.`}
                    </p>
                    {!isCorrect ? (
                      <>
                        <p className="mt-2 text-sm leading-6 text-[#f3ead3]/85">
                          {question.explanation}
                        </p>
                        <a
                          href={question.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex text-sm font-semibold text-[#c9a84c] underline underline-offset-4"
                        >
                          Learn more
                        </a>
                      </>
                    ) : null}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-lg leading-8 text-[#f3ead3]/85">
                The artwork is fully restored. Take a moment with the full image, then continue to
                the lesson.
              </p>
              <Link
                to="/lesson/$id"
                params={{ id: gallery.id }}
                className="mt-8 inline-flex rounded-full border border-[#c9a84c] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition hover:bg-[#c9a84c] hover:text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f3ead3]"
              >
                Continue
              </Link>
            </div>
          )}
        </aside>
      </section>
    </motion.main>
  );
}
