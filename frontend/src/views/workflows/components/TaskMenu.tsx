import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { TaskRegistry } from "@/lib/workflow/task/registry";
import { TaskType } from "@/types/task";

export default function TaskMenu() {
  return (
    <aside className="w-[340px] min-w-[340px] max-w-[340px] border-r-2 border-separate h-full p-2 px-4 overflow-auto">
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={[
          "extraction",
          "interactions",
          "timing",
          "results",
          "storage",
        ]}
      >
        <AccordionItem value="interactions">
          <AccordionTrigger className="font-bold">用户行为</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1">
            <TaskMenuBtn taskType={TaskType.START} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="extraction">
          <AccordionTrigger className="font-bold">数据提取</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1"></AccordionContent>
        </AccordionItem>

        <AccordionItem value="storage">
          <AccordionTrigger className="font-bold">数据存储</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1"></AccordionContent>
        </AccordionItem>

        <AccordionItem value="timing">
          <AccordionTrigger className="font-bold">定时控制</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1"></AccordionContent>
        </AccordionItem>

        <AccordionItem value="results">
          <AccordionTrigger className="font-bold">网络钩子</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1"></AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

function TaskMenuBtn({ taskType }: { taskType: TaskType }) {
  const task = TaskRegistry[taskType];

  const onDragStart = (e: React.DragEvent, type: TaskType) => {
    e.dataTransfer.setData("application/reactflow", type);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <Button
      variant="secondary"
      className="flex justify-between items-center gap-2 border w-full"
      draggable
      onDragStart={(e) => onDragStart(e, taskType)}
    >
      <div className="flex items-center gap-2">
        <task.icon size={20} />
        {task.label}
      </div>
    </Button>
  );
}
