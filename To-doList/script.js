const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const saveBtn = document.getElementById("btn");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

displayTodos();

saveBtn.addEventListener("click", function () {

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title === "" || description === "") {
        alert("Please fill all fields");
        return;
    }

    todos.push({
        title: title,
        description: description,
        completed: false
    });

    localStorage.setItem("todos", JSON.stringify(todos));

    titleInput.value = "";
    descriptionInput.value = "";

    displayTodos();
});

function displayTodos() {

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {

        const div = document.createElement("div");
        div.className = "todo-item";

        if (todo.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>

            <button onclick="completeTodo(${index})">
                ${todo.completed ? "Completed" : "Complete"}
            </button>

            <button onclick="deleteTodo(${index})">
                Delete
            </button>
        `;

        todoList.appendChild(div);
    });

}

function completeTodo(index) {

    todos[index].completed = !todos[index].completed;

    localStorage.setItem("todos", JSON.stringify(todos));

    displayTodos();
}

function deleteTodo(index) {

    todos.splice(index, 1);

    localStorage.setItem("todos", JSON.stringify(todos));

    displayTodos();
}