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
    let h1 = document.createElement("h1");
    let text = document.createTextNode(data[ranNum].symbol);
    h1.appendChild(text);
    divBody.appendChild(h1);
    div.appendChild(divBody);
  }
}
