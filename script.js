let header = document.getElementById("main-title");
let subtext = document.getElementById("description");
let pizzaList = document.getElementById("pizza-list");
let pizzas = document.getElementsByClassName("pizza-img");

header.style.textAlign = "center";
subtext.style.textAlign = "center";
pizzaList.style.justifyContent = "space-around";

pizzas[1].src = "images/veggie.png"