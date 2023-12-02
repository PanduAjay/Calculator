let inputEl = document.getElementById("Input");
let buttonEls = document.querySelectorAll("button");

let string = "";

buttonEls.forEach(element => {
    element.addEventListener("click", (event) => {
        if (event.target.textContent === "=") {
            string = String(eval(string));
            inputEl.value = string;
        } else if (event.target.textContent === "AC") {
            inputEl.value = "";
            string = "";
        } else if (event.target.textContent === "DEL") {
            string = string.slice(0, -1);
            inputEl.value = string;
        } else {
            string += event.target.textContent;
            inputEl.value = string;
        }
    });
});
