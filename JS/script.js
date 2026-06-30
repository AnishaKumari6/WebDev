// const button = document.getElementById("btn");
// const title = document.getElementById("title");
// const description = document.getElementById("description");
// const todoList = document.getElementById("todo-list");
// button.addEventListener("click", function () {
//     if (title.value.trim() === "" || description.value.trim() === "") {
//         alert("Please fill all fields");
//         return;}
//     const li = document.createElement("div");
//     li.classList.add("todo-item");
//     const heading = document.createElement("h3");
//     heading.innerText = title.value;
//     const para = document.createElement("p");
//     para.innerText = description.value;
//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.addEventListener("click", function () {
//         li.remove();
//     });
//     deleteBtn.style.backgroundColor="red";
//     // deleteBtn.style.boarderRadius=45px
//     li.appendChild(heading);
//     li.appendChild(para);
//     li.appendChild(deleteBtn);
//     todoList.appendChild(li);
//     title.value = "";
//     description.value = "";
// });

console.log('1');
console.log('2');
setTimeout(() => console.log('3'), 3000);
setTimeout(() => console.log('4'), 1000);
Promise.resolve().then(() => console.log('8'));
console.log('5');
setTimeout(() => console.log('6'), 2000);
Promise.resolve().then(() => console.log('7'));
console.log('9');
// 1,2,5,9,8,7,4,6,3