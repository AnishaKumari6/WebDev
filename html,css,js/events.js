const btn = document.getElementById("btn");
const text = document.getElementById("text");
const input=document.getElementById("input")
btn.addEventListener("click", () => {
  text.textContent = "Button was clicked!";
});

input.addEventListener("input",(name)=>{
    text.textContent=name.target.value;
})
input.addEventListener("keydown",(name)=>{
    console.log(name.key);
})

