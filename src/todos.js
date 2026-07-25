export class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completion = false;
  }

  isDone() {
    this.completion = true;
  }
}

class Project {
  constructor() {
    this.tasks = [];
  }

  #addTask(task) {
    this.tasks.push(task);
  }

  addTaskToProject(taskObject) {
    const newTask = new Todo(taskObject.title, taskObject.description);
    this.#addTask(newTask);
    return newTask;
  }

  getLastTask() {
    return this.tasks[this.tasks.length - 1];
  }
}

export const general = new Project();
