class TaskCard {
  constructor(titleText, descText, dueDate, priority, project) {
    this.titleText = titleText;
    this.descText = descText;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  }

  createCard() {
    const card = document.createElement("div");
    card.className = "task-card";
    const titleText = document.createElement("h3");
    const descText = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");
    const project = document.createElement("p");
    titleText.textContent = this.titleText;
    descText.textContent = this.descText;
    dueDate.textContent = this.dueDate;
    priority.textContent = this.priority;
    project.textContent = this.project;
    card.appendChild(titleText);
    card.appendChild(descText);
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(project);
    return card;
  }
}

export { TaskCard };
