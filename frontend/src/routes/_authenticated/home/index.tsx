import { createFileRoute } from "@tanstack/react-router";
import { RootLayout } from "@/components/layout";
import Home from "@/views/home";

export const Route = createFileRoute("/_authenticated/home/")({
  component: () => {
    return (
      <>
        <RootLayout />

        <Home />
      </>
    );
  },
});
