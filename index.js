

let calculadora = (x) => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Limpa o resultado anterior

  for (let i = 0; i < arr.length; i++) {
      let result = `${x} x ${i + 1} = ${arr[i] * x}`;
      let p = document.createElement("p");
      p.textContent = result;
      resultDiv.appendChild(p);
  }
};

function generateTable() {
  let number = document.getElementById("number").value;
  calculadora(number);
}

