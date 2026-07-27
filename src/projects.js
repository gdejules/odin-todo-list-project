import { Todo } from "./todos.js";

export class Project {
  constructor() {
    this.tasks = [];
  }

  #addTask(task) {
    this.tasks.push(task);
  }

  addTaskToProject(taskObject) {
    const newTask = new Todo(
      taskObject.title,
      taskObject.description,
      taskObject.dueDate,
      taskObject.priority,
      taskObject.project,
    );
    this.#addTask(newTask);
    return newTask;
  }

  getLastTask() {
    return this.tasks[this.tasks.length - 1];
  }
}

export const general = new Project();
