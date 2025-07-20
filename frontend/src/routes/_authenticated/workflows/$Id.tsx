import { createFileRoute } from "@tanstack/react-router";

import WorkFlow from "@/views/workflows";

export const Route = createFileRoute("/_authenticated/workflows/$Id")({
  component: () => {
    return (
      <>
        <WorkFlow />
      </>
    );
  },
});
