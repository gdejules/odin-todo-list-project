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

  saveToStorage() {
    localStorage.setItem("todoData", JSON.stringify(this.tasks));
  }
}

export const general = new Project();
