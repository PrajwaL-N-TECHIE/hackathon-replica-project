import { createFileRoute } from "@tanstack/react-router";
import { ReferenceExperience } from "@/components/reference-experience";
import { pageMetadata } from "@/lib/page-metadata";

export const Route = createFileRoute("/")({
  head: () => pageMetadata("Hack the North 2026 — Canada’s Biggest Hackathon", "September 18–20, 2026. Join 1,000+ hackers at Canada’s biggest hackathon for 36 hours of building, mentorship, and dreaming big."),
  component: () => <ReferenceExperience />,
});
