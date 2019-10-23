const url = "https://api.iextrading.com/1.0/";
const dataSymbol = "ref-data/symbols";

axios.get(url + dataSymbol).then(response => getSymbol(body, response.data));

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let body = document.getElementById("symbol");
function getSymbol(div, data) {
  for (i = 0; i < 101; i++) {
    var ranNum = getRandomNum(0, 8886);
    let divBody = document.createElement("div");
    divBody.classList.add("symbol-card");
    let symbolName = document.createElement("h2");
    symbolName.classList.add("symbol-text");
    var text = document.createTextNode(data[ranNum].symbol);
    symbolName.appendChild(text);
    let stockName = document.createElement("h3");
    stockName.classList.add("stock-name");
    text = document.createTextNode(data[ranNum].name);
    stockName.appendChild(text);
    let stockId = document.createElement("h3");
    stockId.classList.add("stock-id");
    text = document.createTextNode(`IEX ID: ${data[ranNum].iexId}`);
    stockId.appendChild(text);

    divBody.appendChild(symbolName);
    divBody.appendChild(stockName);
    divBody.appendChild(stockId);
    div.appendChild(divBody);
  }
}

function searchFilter() {
  var input = document.getElementById("search-box");
  var filter = input.value.toUpperCase();
  var div = document.getElementsByClassName("symbol-card");
  for (i = 0; i < div.length; i++) {
    sText = div[i].getElementsByClassName("symbol-text")[0];
    sText2 = div[i].getElementsByClassName("stock-name")[0];
    sText3 = div[i].getElementsByClassName("stock-id")[0];
    var txtValue = sText.textContent || sText.innerText;
    var txtValue2 = sText2.textContent || sText.innerText;
    var txtValue3 = sText3.textContent || sText.innerText;
    if (
      txtValue.toUpperCase().indexOf(filter) > -1 ||
      txtValue2.toUpperCase().indexOf(filter) > -1 ||
      txtValue3.toUpperCase().indexOf(filter) > -1
    ) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
