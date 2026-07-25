import "./styles.css";
import { Todo, general } from "./todos.js";
import { TaskCard } from "./render.js";

const mainContent = document.getElementById("content");

const form = document.querySelector(".form-sample");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  console.log(title);
  console.log(description);

  const taskObject = {
    title: title,
    description: description,
  };

  general.addTaskToProject(taskObject);
  console.log(general.getLastTask());

  const titleText = general.getLastTask().title;
  const descText = general.getLastTask().description;

  const newTaskCard = new TaskCard(titleText, descText);

  mainContent.appendChild(newTaskCard.createCard());

  form.reset();
});
