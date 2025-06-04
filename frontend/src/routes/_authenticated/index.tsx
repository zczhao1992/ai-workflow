import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/views/landingPage";

export const Route = createFileRoute("/_authenticated/")({
    component: () => <LandingPage />,
});