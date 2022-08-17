let gridContainer = document.getElementById('container');
const btn = document.querySelector('button');
btn.addEventListener('click', gridMaker);


function gridMaker() {
  const n = 16;
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement('div');
    gridContainer.appendChild(div);
    div.classList.add("grid")
  }
}

gridContainer.addEventListener('mouseover', color);
gridContainer.addEventListener('mouseout', (e) => e.target.style.backgroundColor = "rgb(245,245,245)");

function color(e) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "rgb(" + r + "," + g + "," + b + ")";

  e.target.style.backgroundColor = `${rgb}`;
}




//         
//       
//    
//   function gridRemove(e) {
//     while (gridContainer.firstChild) {
//       gridContainer.removeChild(gridContainer.firstChild);
//     }
