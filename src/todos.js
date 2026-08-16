export class Todo {
  constructor(title, description, dueDate, priority, project) {
    this.id = crypto.getRandomValues(new Uint32Array(1));
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completion = false;
  }

  isDone() {
    this.completion = true;
  }
}
