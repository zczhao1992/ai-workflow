import { type LucideProps } from "lucide-react";

import { type TaskParam, TaskType } from "./task";
import { type AppNode } from "./appNode";

export enum WorkflowStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
}

export type WorkflowTask = {
    type: TaskType;
    label: string;
    icon: React.FC<LucideProps>;
    isEntryPoint?: boolean;
    inputs: TaskParam[];
    outputs: TaskParam[];
};

export type WorkflowExecutionPlanPhase = {
    phase: number;
    nodes: AppNode[];
};

export type WorkflowExecutionPlan = WorkflowExecutionPlanPhase[];

export enum WorkflowExecutionStatus {
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
}

export enum WorkflowExecutionTrigger {
    MANUAL = "MANUAL",
    CRON = "CRON",
}

export enum ExecutionPhaseStatus {
    CREATED = "CREATED",
    PENDING = "PENDING",
    RUNNING = "RUNNING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
}