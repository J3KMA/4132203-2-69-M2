let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

function add() {
  let result = parseFloat(num1.value) + parseFloat(num2.value);
  document.getElementById("result").innerHTML = result;
}

let numbers = [5, 10, "win", 20];
console.log(numbers[2]);

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    run: function() {
        console.log("The car is running.");
    }
};
console.log(car.model);
console.log(car.run());

$(document).ready(()=> {
   $("#btnAdd").click(()=> {

        let num1 = $("#num1").val();
        let num2 = $("#num2").val();
            let result = parseFloat(num1) + parseFloat(num2);
            $("#result").html(result);
    });
})