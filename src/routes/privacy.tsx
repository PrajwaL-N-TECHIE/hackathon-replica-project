import { createFileRoute } from "@tanstack/react-router";
import { ReferenceExperience } from "@/components/reference-experience";
import { pageMetadata } from "@/lib/page-metadata";

export const Route = createFileRoute("/privacy")({
  head: () => pageMetadata("Privacy Policy — Hack the North", "How Hack the North collects, protects, and uses participant information."),
  component: () => <ReferenceExperience path="/privacy" />,
});