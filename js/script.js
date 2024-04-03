let $ = document;

const weightInput = $.querySelector("#weight");
const heightInput = $.querySelector("#height");
let weightVal = $.querySelector("#weight-val");
let heightVal = $.querySelector("#height-val");
const resultpElem = $.querySelector("#result");
const categorypElem = $.querySelector("#category");

function bmicalculator() {
  // console.log("BMI");

  let weightInputValue = weightInput.value;
  let heightInputInputValue = heightInput.value;

  weightVal.innerHTML = weightInputValue + " kg";
  heightVal.innerHTML = heightInputInputValue + " cm";

  let bmiValue = (
    weightInputValue / Math.pow(heightInputInputValue / 100, 2)
  ).toFixed(1);

  console.log(bmiValue);

  resultpElem.innerHTML = bmiValue;

  if (bmiValue < 18.5) {
    //کم وزنی
    categorypElem.innerHTML = "Under weight";
    resultpElem.style.color="#ffc44d"
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    ///نرمال هست
    categorypElem.innerHTML = "Normal weight";
    resultpElem.style.color= "#0be881"
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    //اضافه وزن
    categorypElem.innerHTML = "over weight";
    resultpElem.style.color="#ff884d"
  } else {
    ///چاق
    categorypElem.innerHTML = "obese";
    resultpElem.style.color="#ff5e4d"
  }
}

weightInput.addEventListener("input", bmicalculator);
heightInput.addEventListener("input", bmicalculator);
