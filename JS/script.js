const button = document.getElementById("btn");
const title = document.getElementById("title");
const description = document.getElementById("description");
const todoList = document.getElementById("todo-list");

button.addEventListener("click", function () {
    if (title.value.trim() === "" || description.value.trim() === "") {
        alert("Please fill all fields");
        return;
    }
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const heading = document.createElement("h3");
    heading.innerText = title.value;
    const para = document.createElement("p");
    para.innerText = description.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
        todo.remove();
    });
    todo.appendChild(heading);
    todo.appendChild(para);
    todo.appendChild(deleteBtn);
    todoList.appendChild(todo);

    title.value = "";
    description.value = "";
});