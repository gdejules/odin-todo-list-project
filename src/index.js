import "./styles.css";

const mainContent = document.getElementById("content");

const greeting = document.createElement("span");
greeting.textContent = "Let's create your todo list!";
mainContent.appendChild(greeting);
