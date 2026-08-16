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
  const priority = document.querySelector(
    "input[name='priority']:checked",
  ).value;
  const project = document.getElementById("project-select").value;

  const taskObject = new Todo(title, description, dueDate, priority, project);
  taskObject.saveToStorage();
  console.log;
  general.addTaskToProject(taskObject);

  const lastTask = general.getLastTask();
  console.log(lastTask);
  // const titleText = general.getLastTask().title;
  // const descText = general.getLastTask().description;
  // const dateInfo = general.getLastTask().date;
  // const priorityInfo = general.getLastTask().priority;
  // const projectInfo = general.getLastTask().project;

  const newTaskCard = new TaskCard(
    lastTask.title,
    lastTask.description,
    lastTask.date,
    lastTask.priority,
    lastTask.project,
  );

  mainContent.appendChild(newTaskCard.createCard());

  form.reset();
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTask = localStorage.getItem("todoData");

  if (savedTask) {
    const newTask = JSON.parse(savedTask);
    const newTaskCard = new TaskCard(
      newTask.title,
      newTask.description,
      newTask.date,
      newTask.priority,
      newTask.project,
    );

    mainContent.appendChild(newTaskCard.createCard());
  }
});
