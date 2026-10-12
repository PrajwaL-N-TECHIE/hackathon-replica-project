import { createFileRoute } from "@tanstack/react-router";
import { ReferenceExperience } from "@/components/reference-experience";
import { pageMetadata } from "@/lib/page-metadata";

export const Route = createFileRoute("/travel-guidelines")({
  head: () => pageMetadata("Travel Guidelines — Hack the North", "Travel, busing, flights, and reimbursement guidelines for Hack the North attendees."),
  component: () => <ReferenceExperience path="/travel-guidelines" />,
});