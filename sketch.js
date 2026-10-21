let dimension = 32;

function createCanvas(dimension) {
    let canvas = document.querySelector(".canvas-container")
    let pixels = dimension * dimension;

    document.documentElement.style.setProperty("--grid-dimension", dimension);

for (i=1; i <= pixels; i++) {
    let item = document.createElement("div");
    canvas.appendChild(item);
    item.classList.add("item");
    item.textContent = i;
}
}

createCanvas(dimension);