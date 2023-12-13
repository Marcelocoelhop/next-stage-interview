import { TaskDTO } from "../dtos/TaskDTO";
import { STORAGE_TASKS } from "./storageConfig";

export function setStorageTasks(tasks: TaskDTO[]) {
  localStorage.setItem(STORAGE_TASKS, JSON.stringify(tasks));
}

export function getStorageTasks() {
  const tasks = localStorage.getItem(STORAGE_TASKS);
  if (tasks?.length) {
    return JSON.parse(tasks);
  }
  return [];
}
