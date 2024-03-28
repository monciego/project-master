// Define the types
export type StatusClassMap = {
  [key in "pending" | "in_progress" | "completed"]: string;
};

export type StatusTextMap = {
  [key in "pending" | "in_progress" | "completed"]: string;
};

export type PriorityClassMap = {
  [key in "low" | "medium" | "high"]: string;
};

export type PriorityTextMap = {
  [key in "low" | "medium" | "high"]: string;
};

// Define the constants with explicit type annotations
export const PROJECT_STATUS_CLASS_MAP: StatusClassMap = {
  pending: "bg-amber-500",
  in_progress: "bg-blue-500",
  completed: "bg-green-500",
};

export const PROJECT_STATUS_TEXT_MAP: StatusTextMap = {
  pending: "Pending",
  in_progress: "In Progress",
  completed: "Completed",
};

export const TASK_STATUS_CLASS_MAP: StatusClassMap = {
  pending: "bg-amber-500",
  in_progress: "bg-blue-500",
  completed: "bg-green-500",
};

export const TASK_STATUS_TEXT_MAP: StatusTextMap = {
  pending: "Pending",
  in_progress: "In Progress",
  completed: "Completed",
};

export const TASK_PRIORITY_CLASS_MAP: PriorityClassMap = {
  low: "bg-gray-600",
  medium: "bg-amber-600",
  high: "bg-red-600",
};

export const TASK_PRIORITY_TEXT_MAP: PriorityTextMap = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
