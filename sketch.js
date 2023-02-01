const grid_container = document.getElementById("gridContainer");
const btn_container = document.getElementById("btnContainer");
const color_selector = document.getElementById("colorSelection");
const grid_btn = document.getElementById("gridButton");
const save_btn = document.createElement("button");

let color = "";
grid_btn.addEventListener("click", loadGrid);
colorSelect();

function loadGrid() {
  gridMaker();
  addSaveBtn();
}
function addSaveBtn() {
  save_btn.textContent = "Save Grid";
  btn_container.appendChild(save_btn);
  save_btn.addEventListener("click", removeGrid);
}
function gridMaker() {
  const n = prompt();
  for (let i = 0; i < n * n; i++) {
    const unit = document.createElement("div");
    unit.style.width = `${500 / n}px`;
    unit.classList.add("grid");
    unit.addEventListener("click", addColorToGrid);
    grid_container.appendChild(unit);
  }
}
function removeGrid() {
  alert("your sketch is saved");
  const btn_container = document.getElementById("btnContainer");
  btn_container.removeChild(save_btn);
  while (grid_container.lastChild) {
    grid_container.removeChild(grid_container.lastChild);
  }
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function addColorToGrid(e) {
  e.target.style.backgroundColor = color;
}

function colorSelect() {
  const label = document.createElement("label");
  label.textContent = "Select your color : ";
  const select = document.createElement("select");
  select.addEventListener("change", (e) => {
    color = e.target.value;
  });
  for (let i = 0; i < 20; i++) {
    let color = randomColor();
    const option = document.createElement("option");
    option.style.backgroundColor = color;
    option.textContent = color;
    option.value = color;
    select.appendChild(option);
  }
  label.appendChild(select);
  color_selector.appendChild(label);
}
