function bill() {
  let oldReading = +document.getElementById("unit1").value;
  let newReading = +document.getElementById("unit2").value;
  let cost = +document.getElementById("rs").value;
  let difference = newReading - oldReading;
  let electricityBill = cost * difference;
  //   document.getElementById("demo").innerHTML = `Old Reading : ${oldReading}`;
  //   document.getElementById("demo").innerHTML = `New Reading : ${newReading}`;
  document.getElementById(
    "demo"
  ).innerHTML = `Old Reading : ${oldReading}, New Reading : ${newReading}, Cost/Unit : ₹${cost} Electricity Bill : ₹${electricityBill}`;
}
