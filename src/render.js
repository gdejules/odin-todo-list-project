class TaskCard {
  constructor(titleText, descText) {
    this.titleText = titleText;
    this.descText = descText;
  }

  createCard() {
    const card = document.createElement("div");
    card.className = "task-card";
    const titleText = document.createElement("h3");
    const descText = document.createElement("p");
    titleText.textContent = this.titleText;
    descText.textContent = this.descText;
    card.appendChild(titleText);
    card.appendChild(descText);
    return card;
  }
}

export { TaskCard };
