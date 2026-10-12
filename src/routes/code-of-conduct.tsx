import { createFileRoute } from "@tanstack/react-router";
import { ReferenceExperience } from "@/components/reference-experience";
import { pageMetadata } from "@/lib/page-metadata";

export const Route = createFileRoute("/code-of-conduct")({
  head: () => pageMetadata("Code of Conduct — Hack the North", "Hack the North’s commitment to a welcoming, inclusive, and respectful hackathon."),
  component: () => <ReferenceExperience path="/code-of-conduct" />,
});