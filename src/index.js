import "./styles.css";
import { Todo } from "./todos.js";
import { Project, general } from "./projects.js";
import { TaskCard } from "./render.js";

const mainContent = document.getElementById("content");

const form = document.querySelector(".form-sample");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("date").value;
  const priority = document.getElementById("priority").value;
  const project = document.getElementById("project-select").value;
  console.log(title);
  console.log(description);

  const taskObject = {
    title: title,
    description: description,
    date: dueDate,
    priority: priority,
    project: project,
  };

  general.addTaskToProject(taskObject);
  console.log(general.getLastTask());

  const titleText = general.getLastTask().title;
  const descText = general.getLastTask().description;
  const dateInfo = general.getLastTask().date;
  const priorityInfo = general.getLastTask().priority;
  const projectInfo = general.getLastTask().project;

  const newTaskCard = new TaskCard(
    titleText,
    descText,
    dueDate,
    priority,
    project,
  );

  mainContent.appendChild(newTaskCard.createCard());

  form.reset();
});
