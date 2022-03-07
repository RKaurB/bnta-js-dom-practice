console.log("I'm being printed by the JavaScript file!");

const h1 = document.querySelector("h1");

h1.innerText = "YAY, IT'S MONDAY!";
h1.style.color = "red";

const div = document.querySelector("#demo-div");

const p1 = document.createElement("p");
p1.innerText = "I'm the first paragraph";

const p2 = document.createElement("p");
p2.innerText = "I'm second";

const p3 = document.createElement("p");
p3.innerText = "Third!";

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

// const paragraphs = document.querySelector("p");
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// Can treat node list the same as a JS array
// (Better to use CSS for changing color style, e.g. .add("blue-text") as per below)
// for (let i = 0; i < paragraphs.length; i++) {
//     // paragraphs[i].style.color = "blue";
//     paragraphs[i].classList.add("blue-text");
// }

// Put above for loop in function instead
const makeTextBlue = function() {
    for (let i = 0; i < paragraphs.length; i++) {
        // paragraphs[i].style.color = "blue";
        paragraphs[i].classList.add("blue-text");
    }
}

const textChanger = document.querySelector("#text-changer");
textChanger.addEventListener("click", makeTextBlue);
