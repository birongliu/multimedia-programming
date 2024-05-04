const weightForm = document.getElementById("weightForm");
const result = document.getElementById("output");
weightForm.onsubmit = (k) => {
  k.preventDefault();
  const weightUnit = document.getElementById("weightUnit");
  const outcome = calucateWeightUnit(weightUnit);
  result.textContent = `Result: ${outcome}${weightUnit.value}`;
};

function calucateWeightUnit(weightUnit) {
  const weight = document.getElementById("weight").value;
  const options = {
    "lb": calucatePound(weight),
    "oz": calucateOunce(weight),
    "g": calucateGram(weight)
  }
  return options[weightUnit.value] ?? weight;
}

function calucateOunce(weight) {
  return weight * 35.274; // 1 kilogram is approximately 35.274 ounces
}

function calucateGram(weight) {
  return weight * 1000; // 1 kilogram is 1000 grams
}

function calucatePound(weight) {
  return weight * 2.20462; // 1 kilogram is approximately 2.20462 pounds
}