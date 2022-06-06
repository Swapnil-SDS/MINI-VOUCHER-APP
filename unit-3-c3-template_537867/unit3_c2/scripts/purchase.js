// let getData = async () => {
//   try {
//     let res = await fetch(
//       "https://masai-vouchers-api.herokuapp.com/api/vouchers"
//     );
//     let data = await res.json();
//     // console.log("data:", data[0].vouchers);

//     appendData(data[0].vouchers);
//   } catch (error) {}
// };
// getData();

// let main = document.getElementById("main");
// //console.log('main:', main)

// let appendData = (data) => {
//   data.forEach((el) => {
//     let div = document.createElement("div");

//     let imgD = document.createElement("div");

//     let img = document.createElement("img");

//     img.src = el.image;

//     imgD.append(img);

//     let p1 = document.createElement("p");

//     p1.innerText = el.name;

//     let p2 = document.createElement("p");

//     p2.innerText = el.price;

//     let btn = document.createElement("button");

//     btn.innerText = ".buy_voucher";

//     btn.setAttribute( ".buy_voucher");

//     btn.addEventListener("click", () => {
//       storeData(el.price);
//       abc();
//       StoreAllData(el);
//     });

//     div.append(imgD, p1, p2, btn);

//     main.append(div);
//   });
// };

// abc();

// let storeData = (price) => {
//   let wallet = JSON.parse(localStorage.getItem("wallet_balance"));
//   if (wallet <= 0) {
//     alert("Insufficient wallet Amount");
//   } else {
//     wallet -= price;
//     localStorage.setItem("wallet_balance", JSON.stringify(wallet));
//   }
// };

// function abc() {
//   let wallet = JSON.parse(localStorage.getItem("wallet"));
//   //console.log("wallet:", wallet);
//   let h3 = document.getElementById("wallet_balance");

//   h3.innerText = wallet || 0;
// }

// let purchaseData = JSON.parse(localStorage.getItem("purchase")) || [];

// let StoreAllData = (el) => {
//   let h3 = document.getElementById("wallet");
//   let wallet = h3.innerText;
//   //console.log('wallet:', wallet)

//   if (wallet <= 0) {
//     return false;
//   } else {
//     purchaseData.push(el);
//     localStorage.setItem("purchase", JSON.stringify(purchaseData));
//   }
// };






//////////////////////////////////////////////////////////////////////////////
let amount = JSON.parse(localStorage.getItem("money"));
document.getElementById("wallet_balance").innerText = amount;

let vouchers = JSON.parse(localStorage.getItem("purchase"));
console.log(vouchers);
vouchers.map(function (el) {
  let vouchers_div = document.querySelector("#purchased_vouchers");

  let box = document.createElement("div");
  box.setAttribute("class", "voucher");

  let name = document.createElement("h2");
  name.innerText = el.name;

  let img = document.createElement("img");
  img.src = el.image;
  img.setAttribute("class", "image");

  let price = document.createElement("h3");
  price.innerText =  el.price;

  box.append(img, name, price);

  vouchers_div.append(box);
});