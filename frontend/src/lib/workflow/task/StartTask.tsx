/**
 * 节点工具-入口
 *
 */

import { Zap } from "lucide-react";

import { TaskParamType, TaskType } from "@/types/task";
import { type WorkflowTask } from "@/types/workflow";

export const StartTask = {
  type: TaskType.START,
  label: "API入口",
  icon: (props) => <Zap {...props} />,
  isEntryPoint: true,
  inputs: [
    {
      label: "模型入口",
      name: "Website Url",
      type: TaskParamType.STRING,
      required: true,
      hideHandle: true,
    },
  ] as const,
  outputs: [
    {
      label: "页面",
      name: "Web page",
      type: TaskParamType.BROWSER_INSTANCE,
    },
  ] as const,
} satisfies WorkflowTask;
