const canvas = document.querySelector(".canvas-container");
let dimension = 16; //default dimension is 16x16 grid

function createCanvas(dimension) { 
    let pixels = dimension * dimension;

    document.documentElement.style.setProperty("--grid-dimension", dimension);

for (i=1; i <= pixels; i++) {
    let item = document.createElement("div");
    canvas.appendChild(item);
    item.classList.add("item");
}
}

//prevent dragging inside canvas when holding down left click
canvas.addEventListener("dragstart", (e) => {
    e.preventDefault();
})


document.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("item")) {
        let currentOpacity = parseFloat(e.target.style.opacity) || 0; //default to 0 if no opacity
        e.target.style.opacity = (currentOpacity + 0.1).toString();
        e.target.classList.add("dark");
    }
})

document.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("item") && e.buttons === 1) {
        let currentOpacity = parseFloat(e.target.style.opacity) || 0; //default to 0 if no opacity
        e.target.style.opacity = (currentOpacity + 0.1).toString();
        e.target.classList.add("dark");
    }
})

createCanvas(dimension);