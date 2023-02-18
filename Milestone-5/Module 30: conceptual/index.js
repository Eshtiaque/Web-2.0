let serial = 0;
// first card operation
document.getElementById("first-card").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("first-card-title").innerText;
    const firstInput = document.getElementById("first-card-first-input").value;
    const lastInput = document.getElementById("first-card-second-input").value;
    if (
        firstInput == "" ||
        lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number for calculation");
    }
  const result = 0.5 * parseFloat(firstInput) * parseFloat(lastInput);
  displayData(title, firstInput, lastInput, result);
  disabledButton("first-card");
});
// second card operation
document.getElementById("second-card").addEventListener("click", function () {
  serial += 1;
    const title = document.getElementById("second-card-title").innerText;
    const firstInput = document.getElementById("second-card-first-input").value;
    const lastInput = document.getElementById("second-card-second-input").value;
    if (
        firstInput == "" ||
        lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number");
    }
  const result = parseFloat(firstInput) * parseFloat(lastInput);
  displayData(title, firstInput, lastInput, result);
  disabledButton("second-card");
});
document.getElementById("third-card").addEventListener("click", function () {
  serial += 1;
    const title = document.getElementById("third-title").innerText;
    const firstInput = document.getElementById("third-card-first-input").value;
    const lastInput = document.getElementById("third-card-second-input").value;
    if (
      firstInput == "" ||
      lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number");
    }
  const result = parseFloat(firstInput) * parseFloat(lastInput);
  displayData(title, firstInput, lastInput, result);
  disabledButton("third-card");
});

// fourth card
document.getElementById("fourth-card").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("fourth-card-title").innerText;
    const firstInput = document.getElementById("fourth-card-first-input").value;
    const lastInput = document.getElementById("fourth-card-second-input").value;
    if (
      firstInput == "" ||
      lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number");
    }
    const total =0.5 * parseFloat(firstInput) * parseFloat(lastInput);
    displayData(title, firstInput, lastInput, total);
    //   disabled button using function
    disabledButton("last-card");
  });
// second last card
document.getElementById("second-last").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("second-last-title").innerText;
    const firstInput = document.getElementById("second-last-first-input").value;
    const lastInput = document.getElementById("second-last-second-input").value;
    if (
      firstInput == "" ||
      lastInput == "" ||
      firstInput <= 0 ||
      lastInput <= 0
    ) {
      return alert("please enter any valid number");
    }
    const total =0.5 * parseFloat(firstInput) * parseFloat(lastInput);
    //   show the data using function
    displayData(title, firstInput, lastInput, total);
    //   disabled button using function
    disabledButton("last-card");
  });
// last card
//we can not use common function beacuse its an input type , we need to use dot value
document.getElementById("last-card").addEventListener("click", function () {
  serial += 1;
  const title = document.getElementById("last-title").innerText;
  const firstInput = document.getElementById("last-card-first-input").value;
  const lastInput = document.getElementById("last-card-second-input").value;
  if (
    firstInput == "" ||
    lastInput == "" ||
    firstInput <= 0 ||
    lastInput <= 0
  ) {
    return alert("please enter any valid number");
  }
  const total2 = 3.14 * parseInt(firstInput) * parseInt(lastInput);
  displayData(title, firstInput, lastInput, total2);
  //   disabled button using function
  disabledButton("last-card");
});
// common function to display data
function displayData(nameOfP, priceOfP, quantityOfp, resultP, cm) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${resultP}</td>
    <td>cm<sup>2</sup></td>
    <td>
    <button class="btn btn-primary">Convert to m<sup>2</sup></button>
    </td>
  `;
  container.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

// common function to disable button
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}
//done