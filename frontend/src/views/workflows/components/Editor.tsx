import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";
import { FlowValidationContextProvider } from "@/context/FlowValidationContext";
import TaskMenu from "./TaskMenu";

export default function Editor({ workflowId }: { workflowId: string }) {
  console.log(workflowId);

  return (
    <FlowValidationContextProvider>
      <ReactFlowProvider>
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* <Topbar
          title="编辑器"
          subtitle={workflow.name}
          workflowId={workflow.id}
          isPublished={workflow.status === WorkflowStatus.PUBLISHED}
        /> */}
          <section className="flex h-full overflow-auto">
            <TaskMenu />
            <FlowEditor />
          </section>
        </div>
      </ReactFlowProvider>
    </FlowValidationContextProvider>
  );
}
