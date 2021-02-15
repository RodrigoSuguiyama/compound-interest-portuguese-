function mountTable() {
  collectsData();
  calculatesSnowBall();
  addElementTBody();
  removeLastTbody();
}

// collectsData();
var period;
var annualTax;
var annualYield;
var initialAmount;
var button = document.querySelector("button");

function collectsData (){
  period = parseFloat(document.querySelector("#input-ano").value);
  initialAmount = parseFloat(document.querySelector("#input-montante-inicial").value);
  annualTax = parseFloat(document.querySelector("#input-aporte-anual").value);
  annualYield = parseFloat(document.querySelector("#input-rendimento-anual").value);
}
//

function calculatesSnowBall() {
  var year = 1;
  var yield;

  for (var i = 0; i < period; i++){

    initialAmount = (initialAmount + annualTax);
    yield = (initialAmount * annualYield / 100);
    var total = initialAmount + (yield);

    addElementTBody(year, yield.toFixed(2), total.toFixed(2));

    initialAmount = total;

    //just for "Ano" html camp;
    year++;
  } 
}

function createTableLine(thYeartext, thYieldText, thTotalText) {
  
  var tr = document.createElement("tr");
  tr.classList.add("tr-body");

  var thYear = document.createElement("th");
  thYear.classList.add("th-ano");
  tr.appendChild(thYear);
  thYear.textContent += thYeartext;

  var thAnnualYield = document.createElement("th");
  thAnnualYield.classList.add("th-annualYield");
  tr.appendChild(thAnnualYield);
  thAnnualYield.textContent += "R$ " + thYieldText + " mil";

  var thTotal = document.createElement("th");
  thTotal.classList.add("th-total");
  tr.appendChild(thTotal);
  thTotal.textContent += "R$ " + thTotalText + " mil";

  return tr;
}

function addElementTBody(year, yield, total) {
  var tBody = document.querySelector("tbody");
  tBody.appendChild(createTableLine(year, yield, total));
}

function removeLastTbody(){
  var tbody = document.querySelector("tbody").lastElementChild.remove();
}

button.onclick = mountTable;