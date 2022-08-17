    const container = document.getElementById("container");
    const btn = document.querySelector('button');
    btn.addEventListener('click', gridMaker);
    function gridMaker(e) {
      gridRemove(e);
      const n = prompt();
      for (let i = 0; i < n * n; i++) {
        const div = document.createElement('div');
        div.style.width = `${500 / n}px`;
        div.classList.add("grid");
        container.appendChild(div);
  
      }
  
    };
    container.addEventListener
      ('mouseover', function color(e) {
        function rrggbb() {
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          let color = "rgb(" + r + "," + g + "," + b + ")";
          return color;
        }
        let gridColor = rrggbb();
        e.target.style.backgroundColor = `${gridColor}`;
        container.addEventListener('mouseout', function colorZero(e) {
          e.target.style.backgroundColor = "rgb(245,245,245)";
        })
      });
      const box=document.getElementsByClassName("grid");
      box.addEventListener('click', function colorChange(e) {
        e.target.style.backgroundColor = 'yellow';
      });   // let change = function co(gridColor){
    function gridRemove(e) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }