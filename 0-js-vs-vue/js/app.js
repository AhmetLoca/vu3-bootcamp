const todoInput = document.querySelector("#todoInput"); //input
const addTodo = document.querySelector("#addTodo"); //button
const todoList = document.querySelector("#todoList"); // ul

addTodo.addEventListener("click", () => {
  //butona click olunca
  const listItem = document.createElement("li"); // li olustur
  listItem.textContent = todoInput.value; // input içerisindeki degeri li'ye ata
  todoList.append(listItem); //ul içerisine li'i append et
});
