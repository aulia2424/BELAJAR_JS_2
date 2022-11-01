// Try this new. Its work for me.

//take flight number and its status
var flightNumber = "NGT 929";
var flightStatus = "landed";
function Flight(flightNumber, flightStatus) {
  //fix the constructor
  this.flightNumber = flightNumber;
  this.flightStatus = flightStatus;
}
var flight1 = new Flight(flightNumber, flightStatus);
//assign a flight object to flight1 variable

//output
console.log("The flight " + flight1.flightNumber + " is " + flight1.flightStatus);
