const todoInput = document.querySelector("#todoInput");
const addTodo = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");

addTodo.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = todoInput.value;

  todoList.append(listItem);
});
