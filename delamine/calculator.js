
    function submitForm() {
  // Get the form element
  var form = document.getElementById("form");
  // Access the input field value
  var DISTANCE = form.elements["distance"].value;
  let CONSUMPTION = form.elements["avrage"].value;
  let PRICE = form.elements["price"].value;

  // Now you can use the 'data' variable in your JavaScript code
  console.log("Data submitted: " + DISTANCE);
  console.log("Data submitted: " + CONSUMPTION);
  console.log("Data submitted: " + PRICE);
  let final_price=(CONSUMPTION/100*DISTANCE*PRICE).toFixed(2);
  let final_fuel_used=(CONSUMPTION/100*DISTANCE).toFixed(2);
  console.log("Total price of the trip: "+final_price+" RONI.");
  console.log("Fuel used (L): "+final_fuel_used+" litres.");
  // SHOWING DATA IN THE WEBSITE
  document.getElementById("print_price").innerHTML = final_price+" RONI";
  document.getElementById("print_usedfuel").innerHTML = final_fuel_used+" L";
}
  