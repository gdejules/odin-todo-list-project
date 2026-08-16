import { Todo } from "./todos.js";

export class Project {
  constructor() {
    this.tasks = [];
  }

  addTaskToProject(taskObject) {
    this.tasks.push(taskObject);
  }

  getLastTask() {
    return this.tasks[this.tasks.length - 1];
  }
}

export const general = new Project();
