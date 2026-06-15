import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/final")({
  component: () => (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f3ead3] p-8">Final</div>
  ),
});
