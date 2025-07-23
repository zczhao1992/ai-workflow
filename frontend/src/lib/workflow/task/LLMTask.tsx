/**
 * 节点工具-LLM
 *
 */

import { Cpu } from "lucide-react";

import { TaskParamType, TaskType } from "@/types/task";
import { type WorkflowTask } from "@/types/workflow";

export const LLMTask = {
  type: TaskType.LLM,
  label: "LLM",
  icon: (props) => <Cpu {...props} />,
  isEntryPoint: false,
  inputs: [
    {
      label: "页面",
      name: "Web page",
      type: TaskParamType.BROWSER_INSTANCE,
    },
    {
      label: "模型",
      name: "model",
      type: TaskParamType.SELECT,
      required: true,
      hideHandle: true,
      options: [
        { label: "ChatGPT", value: "ChatGPT" },
        { label: "DeepSeek", value: "DeepSeek" },
      ],
    },
  ] as const,
  outputs: [
    {
      label: "结果",
      name: "result",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
