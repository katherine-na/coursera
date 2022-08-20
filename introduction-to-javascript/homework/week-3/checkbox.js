function billingFunction() {
  var shipName = document.getElementById("shippingName").value;

  var shipZip = document.getElementById("shippingZip").value;

  var billName = document.getElementById("billingName");

  var billZip = document.getElementById("billingZip");

  if (document.getElementById("same").checked) {
    billName.value = shipName;
    billZip.value = shipZip;
  } else {
    billName.value = "";
    billZip.value = "";
  }
}
