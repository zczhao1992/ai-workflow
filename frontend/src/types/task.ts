export enum TaskType {
  START = "START",
}

export enum TaskParamType {
  STRING = "STRING",
  BROWSER_INSTANCE = "BROWSER_INSTANCE",
  SELECT = "SELECT",
  CREDENTIAL = "CREDENTIAL",
}

export interface TaskParam {
  name: string;
  label: string;
  type: TaskParamType;
  helperText?: string;
  required?: boolean;
  hideHandle?: boolean;
  [key: string]: any;
}
