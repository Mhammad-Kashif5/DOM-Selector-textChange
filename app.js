/* JavaScript Selector: How to Select different elements by using different selector */
// getElementById: Select element by id
let selectBtn = document.getElementById("btn")
console.log(selectBtn);

// getElementByClassName: select element by class name
let para = document.getElementsByClassName("para")
console.log(para);

// getElementByTagName: select element by tag Name
let selectSpan = document.getElementsByTagName("span")
console.log(selectSpan);

// querySelector: select any first element including id,class,tagName etc
let heading2 = document.querySelector("#heading")
console.log(heading2);

// querySelectorAll: select all elements
let paras = document.querySelectorAll(".para")
console.log(paras);


// How to change , update and show text by using different elements
// innerText: change text and show the return text, can't show hidden text
// textContent: change text and show text + hidden text
// innerHTML: change html elements and also show return text.

/* some tasks */
/* task No1: Change Text Using JavaScript */

let selectH2 = document.getElementById("heading2")
selectH2.innerText = "Welcome to JavaScript!"
console.log(selectH2);

/* task No2: Change Paragraph Text on Button Click */
let selectPara = document.querySelector("#para")
let clickBtn = document.querySelector("#btn1")
clickBtn.addEventListener("click", () => {
    selectPara.textContent = "Paragraph text was changed!"
})

/* Task No3:  Change Background Color on Button Click */

let changeBg = document.querySelector("#bg")
changeBg.addEventListener("click", () => {
    document.body.style.backgroundColor = "aqua"
})

/* Task No4: Show Alert Message on Button Click */
let show = document.getElementById("show")
show.addEventListener("click", () => {
    alert("DOM is Working")
})
