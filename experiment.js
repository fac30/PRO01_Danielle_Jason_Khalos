// BUTTONS
const chaosButton = document.querySelector("button#chaos");
chaosButton.addEventListener("click", breakShit);

const scrambleButton = document.querySelector("button#scramble");
scrambleButton.addEventListener("click", scramble)

// HANDLERS
function breakShit(event) {
    body.classList.toggle("allWrong");
};

function scramble(event) {
    const arr = Array.from(nodeList);
    /* Change text */
};

// CONTENT OBJECTS
const body = document.querySelector("body");
const chaos = {
    groupA: document.querySelectorAll(".chaosA"),
    groupB: document.querySelectorAll(".chaosB")
};

const titles = {
    h2: document.querySelectorAll("h2")
}