/**
 * 节点注册表
 *
 */

import { TaskType } from "@/types/task";
import { type WorkflowTask } from "@/types/workflow";

import { StartTask } from "./StartTask";
import { LLMTask } from "./LLMTask";

type Registry = {
  [K in TaskType]: WorkflowTask & { type: K };
};

export const TaskRegistry: Registry = {
  START: StartTask,
  LLM: LLMTask,
};
