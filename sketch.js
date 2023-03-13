const grid_container = document.getElementById("gridContainer");
const new_grid = document.getElementsByClassName("newGrid");
const clear = document.getElementById("clear");
const select_colors = document.getElementById("refreshColor");
let grid_color = "black";
Array.from(new_grid).forEach((element, i) => {
  let a = i * 10 + 10;
  element.addEventListener("click", () => gridMaker(a));
});
clear.addEventListener("click", removeGrid);
select_colors.addEventListener("click", addColors);

function gridMaker(n) {
  removeGrid();
  for (let i = 0; i < n * n; i++) {
    const unit = document.createElement("div");
    unit.style.width = `${500 / n}px`;
    unit.classList.add("grid");
    unit.addEventListener("click", addColorToGrid);
    unit.addEventListener("dblclick", eraseColor);
    grid_container.appendChild(unit);
  }
}
function removeGrid() {
  while (grid_container.lastChild) {
    grid_container.removeChild(grid_container.lastChild);
  }
}
function addColorToGrid(e) {
  e.target.style.backgroundColor = grid_color;
}
function eraseColor(e) {
  e.target.style.backgroundColor = "transparent";
}
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function addColors() {
  const newUnit = document.getElementById("newunit");
  while (newUnit.lastChild) {
    newUnit.removeChild(newUnit.lastChild);
  }
  for (let i = 0; i < 6; i++) {
    let c = getRandomColor();
    const unit = document.createElement("div");
    unit.style.backgroundColor = c;
    unit.classList.add("color-unit");
    unit.addEventListener("click", () => {
      grid_color = c;
      while (newUnit.lastChild) {
        newUnit.removeChild(newUnit.lastChild);
      }
    });
    newUnit.appendChild(unit);
  }
}
