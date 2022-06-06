let Value;
let amount = JSON.parse(localStorage.getItem("user"));
amount.map(function (el) {
  Value = el.amount;

  document.getElementById("wallet_balance").innerText = Value;
});

const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

async function voucher() {
  const res = await fetch(url);

  const data = await res.json();

  const vouchers = data[0].vouchers;

  console.log(vouchers);

  append(vouchers);
}

voucher();

function append(vouchers) {
  vouchers.map(function (el) {
    let vouchers_div = document.querySelector("#voucher_list");

    let box = document.createElement("div");
    box.setAttribute("class", "voucher");

    let name = document.createElement("h2");
    name.innerText = el.name;

    let img = document.createElement("img");
    img.src = el.image;
    img.setAttribute("class", "image");

    let price = document.createElement("h3");
    price.innerText =  el.price;

    let button = document.createElement("button");
    
    button.setAttribute("class", "buy_voucher");

    button.innerText = "BUY";

    button.addEventListener("click", function () {
      comparing(el);
    });

    box.append(img,name,price,button);

    vouchers_div.append(box);
  });
}
let arr = [];
let money = [];

function comparing(el) {
  arr.push(el);
  localStorage.setItem("purchase", JSON.stringify(arr));

  let givenPric=el.price;

  let walletValue = Value;

  if (walletValue<givenPrice) {

    alert("Sorry! insufficient balance");
  } else {

    walletValue = walletValue-givenPrice;

    document.getElementById("wallet_balance").innerText = walletValue;

    alert("Hurray! purchase successful");

    money.push(walletValue);

    localStorage.setItem("money", JSON.stringify(money));
  }
}
