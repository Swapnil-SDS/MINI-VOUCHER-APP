





// function get_data(e){
//  event.preventDefault(e)
//   let data1 = form.getElementById("detail")

// let name= form.name.value
// let email = form.email.value;
// let address = form.address.value;
// let amount = form.amount.value;

// let obj = new data(name,email,address,amount)
// console.log(obj)


// }


function data(n, e, a, am) {
  this.name = n;
  this.email = e;
  this.address = a;
  this.wallet = am;
}

const get_data = (e) => {
  event.preventDefault();
  let form = document.querySelector("form");

  var name = form.name.value;
  var email = form.email.value;
  var address = form.address.value;
  var wallet = form.amount.value;

  var obj = new data(name, email, address, wallet);
  var arr = JSON.parse(localStorage.getItem("user")) || [];
  arr.push(obj);
  localStorage.setItem("user", JSON.stringify(arr));
  console.log(obj);
};

/////////////////////////////////////////////////////////



