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

// console.log('1');
// console.log('2');
// setTimeout(() => console.log('3'), 3000);
// setTimeout(() => console.log('4'), 1000);
// Promise.resolve().then(() => console.log('8'));
// console.log('5');
// setTimeout(() => console.log('6'), 2000);
// Promise.resolve().then(() => console.log('7'));
// console.log('9');
// // 1,2,5,9,8,7,4,6,3

// function login(){
//     console.log('login');
//     setTimeout(() => console.log('login success'), 5000);
// }
// function getUserData(){
//     console.log('getUserData');
//     setTimeout(() => console.log('user data'), 2000);
// }
// function getUserPosts(){
//     console.log('getUserPosts');
//     setTimeout(() => console.log('user posts'), 1000); 
// }
// function getUserComments(){
//     console.log('getUserComments');
//     setTimeout(() => console.log('user comments'), 3000);
// }   

function getProducts() {
    return new Promise((resolve, reject) => {
        console.log('getProducts'); 
        setTimeout(() => {
            let success = true; 
            if (success) {
                console.log('products fetched successfully');
                resolve('products data');
            } else {
                console.log('error fetching products');
                reject('error fetching products');
            }   
        }, 2000);
}
function getOffers() {
    return new Promise((resolve, reject) => {
        console.log('getOffers');
        setTimeout(() => {
            let success = true;
            if (success) {
                console.log('offers fetched successfully');
                resolve('offers data');
            } else {
                console.log('error fetching offers');
                reject('error fetching offers');
            }
        }, 1000);
    });
}

function getCategories() {
    return new Promise((resolve, reject) => {
        console.log('getCategories');
        setTimeout(() => {
            let success = true;
            if (success) {
                console.log('categories fetched successfully');
                resolve('categories data');
            } else {
                console.log('error fetching categories');
                reject('error fetching categories');
            }
        }, 1500);
    });
}
          