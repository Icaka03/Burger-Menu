const sizeForm = document.getElementById("size-form");
const matrixOne = document.getElementsByClassName("matrix-one")[0];
const matrixTwo = document.getElementsByClassName("matrix-two")[0];
const matrixThree = document.getElementsByClassName("matrix-result")[0];
const matrixN = document.getElementById("matrixN");
const solve = document.getElementById("solve");
let size;
function submitHandler(e) {
  e.preventDefault();
  size = Number(matrixN.value);
  createMatrix(matrixOne, size);
  createMatrix(matrixTwo, size);
  createMatrix(matrixThree, size);
}

function solveMatrix() {
  for (let i = 0; i < size * size; i++) {
    console.log(matrixThree.children[i].value);
    let result =
      Number(matrixOne.children[i].value) + Number(matrixTwo.children[i].value);
    matrixThree.children[i].value = result;
  }
}

function createMatrix(wrapper, size) {
  wrapper.innerHTML = "";
  wrapper.style.gridTemplateColumns = `repeat(${size},40px)`;
  for (let i = 0; i < size * size; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.value = 0;
    wrapper.appendChild(input);
  }
}
sizeForm.addEventListener("submit", submitHandler);
solve.addEventListener("click", solveMatrix);
