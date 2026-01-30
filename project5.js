const content=document.getElementById('show');
content.style.fontSize='24px';
const bg=document.body;
bg.style.backgroundColor='#eaf7d4';
bg.style.display='flex';
bg.style.justifyContent='center';
bg.style.alignItems='center';
content.innerHTML="MY Practice Project 5";
console.log("Project 5 loaded successfully");
alert("Welcome to Project 5!");
const title=document.getElementsByTagName('h1');
title[0].style.color="green";
title[0].style.textAlign='center';      
const para=document.querySelectorAll('p');
para.forEach(p=>p.style.fontFamily='Arial, sans-serif');
para.forEach(p=>p.style.marginBottom='15px');
para.forEach(p=>p.style.color='#02261c');
para.forEach(p=>p.style.textAlign='Center');
para[1].innerHTML="One"

const div_element=document.getElementsByClassName('main')[0];
div_element.style.border='3px solid #1a431b';
div_element.style.padding='20px';
div_element.style.borderRadius='10px';
div_element.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)';
div_element.style.backgroundColor='#fefefe';

var span=document.createElement("span");
span.textContent="I am a span"
span.style.color='blue';
span.style.fontSize='20px';
span.style.textAlign='Center';
span.style.fontWeight='bold';
div_element.append(span,document.createElement("br"));
console.log("Span element added successfully");